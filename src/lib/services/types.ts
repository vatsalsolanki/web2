// Shared type contract for every individual service page.
// One Service object = one page rendered by <ServicePage> at /services/[slug].

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

/**
 * "existing"  — the service (or a combined version of it) was already present
 *               in SERVICE_CATEGORIES before this build; this page gives it a
 *               dedicated URL and expanded content.
 * "new"       — did not exist on the site before this build.
 * "hub"       — an overview/index page that ties several related services
 *               together rather than describing one narrow filing.
 * "redirect"  — not a real page; permanently redirects to a canonical slug
 *               that already covers the same regulatory instrument.
 */
export type ServiceCoverage = "existing" | "new" | "hub" | "redirect";

export type Service = {
  slug: string;
  title: string;
  /** id of the matching category in SERVICE_CATEGORIES (site-data.ts), used for breadcrumb linking + sidebar highlighting */
  categoryId: string;
  /** display label for the coarser 3-bucket grouping used in the breadcrumb, e.g. "Business Certification" */
  categoryLabel: string;
  /** cross-reference to the existing REG/GOV/GEM/TND/CERT/IP/NGO/DOC code, if any */
  code?: string;
  coverage: ServiceCoverage;
  /** one-line card/meta description */
  shortDescription: string;
  heroHeadline: string;
  heroSupport: string;
  /** overview paragraphs — what it is, why it matters, who needs it, what Gurur helps with */
  description: string[];
  benefits: string[];
  whoNeedsIt: string[];
  eligibility?: string[];
  documents?: string[];
  documentsNote?: string;
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  /** slugs of other Service entries */
  relatedServices: string[];
  ctaDescription?: string;
  /** only set on coverage:"redirect" entries */
  redirectTo?: string;
};
