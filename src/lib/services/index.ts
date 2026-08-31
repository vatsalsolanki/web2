import type { Service } from "./types";
import { SERVICE_MANIFEST } from "./manifest";
import { BUSINESS_CERTIFICATION_SERVICES } from "./business-certification";
import { QUALITY_STANDARDS_SERVICES } from "./quality-standards";
import { GEM_SERVICES } from "./gem";
import { BUSINESS_REGISTRATION_SERVICES } from "./business-registration";

export type { Service, ServiceProcessStep, ServiceFAQ, ServiceCoverage } from "./types";
export { SERVICE_MANIFEST } from "./manifest";

export const ALL_SERVICES: Service[] = [
  ...BUSINESS_CERTIFICATION_SERVICES,
  ...QUALITY_STANDARDS_SERVICES,
  ...GEM_SERVICES,
  ...BUSINESS_REGISTRATION_SERVICES,
];

const SERVICE_BY_SLUG = new Map<string, Service>(
  ALL_SERVICES.map((s) => [s.slug, s]),
);

const REDIRECT_BY_SLUG = new Map<string, string>(
  SERVICE_MANIFEST.filter((e) => e.coverage === "redirect" && e.redirectTo).map(
    (e) => [e.slug, e.redirectTo as string],
  ),
);

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICE_BY_SLUG.get(slug);
}

export function getRedirectTarget(slug: string): string | undefined {
  return REDIRECT_BY_SLUG.get(slug);
}

export function getAllServiceSlugs(): string[] {
  return ALL_SERVICES.map((s) => s.slug);
}

export function getRelatedServices(service: Service, max = 4): Service[] {
  return service.relatedServices
    .map((slug) => SERVICE_BY_SLUG.get(slug))
    .filter((s): s is Service => Boolean(s))
    .slice(0, max);
}

export function getServicesByCategoryLabel(categoryLabel: string): Service[] {
  return ALL_SERVICES.filter((s) => s.categoryLabel === categoryLabel);
}

/**
 * Cross-checks the manifest (the intended slug list) against what actually
 * got written into business-certification.ts / quality-standards.ts / gem.ts.
 * Used by the QA pass — not imported by any page, so it never affects the
 * live site even if it reports a problem.
 */
export function validateServiceData(): string[] {
  const issues: string[] = [];
  const expectedSlugs = SERVICE_MANIFEST.filter(
    (e) => e.coverage !== "redirect",
  ).map((e) => e.slug);

  const slugCounts = new Map<string, number>();
  for (const s of ALL_SERVICES) {
    slugCounts.set(s.slug, (slugCounts.get(s.slug) ?? 0) + 1);
  }

  for (const slug of expectedSlugs) {
    const count = slugCounts.get(slug) ?? 0;
    if (count === 0) issues.push(`Missing service data for slug "${slug}"`);
    if (count > 1) issues.push(`Duplicate service data for slug "${slug}" (${count}x)`);
  }

  for (const s of ALL_SERVICES) {
    if (!expectedSlugs.includes(s.slug)) {
      issues.push(`Service "${s.slug}" exists in data but is not declared in manifest.ts`);
    }
    for (const rel of s.relatedServices) {
      if (!SERVICE_BY_SLUG.has(rel) && !REDIRECT_BY_SLUG.has(rel)) {
        issues.push(`Service "${s.slug}" has relatedServices entry "${rel}" which does not exist`);
      }
    }
  }

  return issues;
}
