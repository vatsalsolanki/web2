// Authoritative slug/category map for the individual service-page build.
// This is the single source of truth for which slugs exist, which file owns
// their content, and how each maps back to the original coverage audit.
//
// Do not add or rename slugs anywhere else — services/index.ts validates
// business-certification.ts, quality-standards.ts and gem.ts against this
// list and will throw at build time if anything drifts.

export type ManifestEntry = {
  slug: string;
  title: string;
  categoryId: string; // matches an id in SERVICE_CATEGORIES (site-data.ts)
  categoryLabel: string; // 3-bucket label used in breadcrumbs
  code?: string;
  coverage: "existing" | "new" | "hub" | "redirect";
  file: "business-certification" | "quality-standards" | "gem" | "business-registration";
  /** only present on coverage:"redirect" entries */
  redirectTo?: string;
};

const CAT_BUSINESS = "Business Certification";
const CAT_QUALITY = "Business Quality Standards Certification";
const CAT_GEM = "GeM & Government Procurement";
const CAT_REG = "Business Registration & Incorporation";

export const SERVICE_MANIFEST: ManifestEntry[] = [
  // ---------------------------------------------------------------
  // Business Certification  (23 pages + 1 redirect)
  // ---------------------------------------------------------------
  { slug: "gst-registration", title: "GST Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-01", coverage: "existing", file: "business-certification" },
  { slug: "msme-udyam-registration", title: "MSME / Udyam Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-02", coverage: "existing", file: "business-certification" },
  { slug: "startup-india-recognition", title: "Startup India Recognition", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-03", coverage: "existing", file: "business-certification" },
  { slug: "shop-establishment-gumasta-registration", title: "Shop & Establishment / Gumasta Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-07A", coverage: "existing", file: "business-certification" },
  { slug: "professional-tax-registration", title: "Professional Tax Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-08", coverage: "existing", file: "business-certification" },
  { slug: "trade-license", title: "Trade License", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-07B", coverage: "existing", file: "business-certification" },
  { slug: "gem-registration", title: "GeM Registration", categoryId: "gem-procurement", categoryLabel: CAT_BUSINESS, code: "GEM-01", coverage: "existing", file: "business-certification" },
  { slug: "nsic-registration", title: "NSIC Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-14", coverage: "new", file: "business-certification" },
  { slug: "import-export-code-iec", title: "Import Export Code (IEC)", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-04", coverage: "existing", file: "business-certification" },
  { slug: "digital-signature-certificate", title: "Digital Signature Certificate (DSC)", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-05", coverage: "existing", file: "business-certification" },
  { slug: "pan-tan-services", title: "PAN & TAN Services", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-15", coverage: "new", file: "business-certification" },
  { slug: "fssai-registration-license", title: "FSSAI Registration / License", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-06", coverage: "existing", file: "business-certification" },
  { slug: "food-business-license", title: "Food Business License", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, coverage: "redirect", file: "business-certification", redirectTo: "fssai-registration-license" },
  { slug: "fire-noc", title: "Fire NOC", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-10", coverage: "existing", file: "business-certification" },
  { slug: "pollution-control-board-consent", title: "Pollution Control Board Consent", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-09", coverage: "existing", file: "business-certification" },
  { slug: "labour-license", title: "Labour License", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-12", coverage: "existing", file: "business-certification" },
  { slug: "epfo-pf-registration", title: "EPFO / PF Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-11A", coverage: "existing", file: "business-certification" },
  { slug: "esic-registration", title: "ESIC Registration", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "GOV-11B", coverage: "existing", file: "business-certification" },
  { slug: "lin-certification", title: "LIN Certification", categoryId: "statutory-registrations", categoryLabel: CAT_BUSINESS, code: "NGO-06", coverage: "existing", file: "business-certification" },
  { slug: "gs1-barcode-registration", title: "Barcode / GS1 Registration", categoryId: "trademark-ip-branding", categoryLabel: CAT_BUSINESS, code: "IP-03", coverage: "existing", file: "business-certification" },
  { slug: "project-report-certification", title: "Project Report Certification / Audit", categoryId: "documentation-reports", categoryLabel: CAT_BUSINESS, code: "DOC-01", coverage: "existing", file: "business-certification" },
  { slug: "ca-certificates", title: "CA Certificates", categoryId: "documentation-reports", categoryLabel: CAT_BUSINESS, coverage: "hub", file: "business-certification" },
  { slug: "net-worth-certificate", title: "Net Worth Certificate", categoryId: "documentation-reports", categoryLabel: CAT_BUSINESS, code: "DOC-02", coverage: "existing", file: "business-certification" },
  { slug: "turnover-certificate", title: "Turnover Certificate", categoryId: "documentation-reports", categoryLabel: CAT_BUSINESS, code: "DOC-03", coverage: "existing", file: "business-certification" },

  // ---------------------------------------------------------------
  // Business Quality Standards Certification  (21 pages)
  // ---------------------------------------------------------------
  { slug: "iso-9001", title: "ISO 9001", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-01", coverage: "existing", file: "quality-standards" },
  { slug: "iso-14001", title: "ISO 14001", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-02", coverage: "existing", file: "quality-standards" },
  { slug: "iso-45001", title: "ISO 45001", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-04", coverage: "existing", file: "quality-standards" },
  { slug: "iso-22000", title: "ISO 22000", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-09", coverage: "new", file: "quality-standards" },
  { slug: "iso-27001", title: "ISO 27001", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-03", coverage: "existing", file: "quality-standards" },
  { slug: "iso-13485", title: "ISO 13485", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-10", coverage: "new", file: "quality-standards" },
  { slug: "iso-50001", title: "ISO 50001", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-11", coverage: "new", file: "quality-standards" },
  { slug: "organic-certification", title: "Organic Certification", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-12", coverage: "new", file: "quality-standards" },
  { slug: "haccp-certification", title: "HACCP", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-08A", coverage: "existing", file: "quality-standards" },
  { slug: "gmp-certification", title: "GMP", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-08B", coverage: "existing", file: "quality-standards" },
  { slug: "who-gmp-certification", title: "WHO-GMP", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-13", coverage: "new", file: "quality-standards" },
  { slug: "ce-marking", title: "CE Mark", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-06", coverage: "existing", file: "quality-standards" },
  { slug: "rohs-compliance", title: "RoHS", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-07", coverage: "existing", file: "quality-standards" },
  { slug: "kosher-certification", title: "Kosher Certification", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-14", coverage: "new", file: "quality-standards" },
  { slug: "fda-registration-support", title: "FDA", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-15", coverage: "new", file: "quality-standards" },
  { slug: "fcc-certification-support", title: "FCC", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-16", coverage: "new", file: "quality-standards" },
  { slug: "gdp-certification", title: "GDP", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-17", coverage: "new", file: "quality-standards" },
  { slug: "sa8000-certification", title: "SA 8000", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-18", coverage: "new", file: "quality-standards" },
  { slug: "cmmi-certification", title: "CMMI Levels", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-19", coverage: "new", file: "quality-standards" },
  { slug: "bifma-certification", title: "BIFMA Levels", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-20", coverage: "new", file: "quality-standards" },
  { slug: "greenguard-certification", title: "GreenGuard", categoryId: "certifications", categoryLabel: CAT_QUALITY, code: "CERT-21", coverage: "new", file: "quality-standards" },

  // ---------------------------------------------------------------
  // GeM — Government e-Marketplace  (11 new pages + gem-registration, shared above)
  // ---------------------------------------------------------------
  { slug: "gem-tender-publishing", title: "Tender Publishing", categoryId: "government-tenders", categoryLabel: CAT_GEM, code: "TND-04", coverage: "new", file: "gem" },
  { slug: "tender-participation", title: "Tender Participation", categoryId: "government-tenders", categoryLabel: CAT_GEM, code: "TND-01", coverage: "existing", file: "gem" },
  { slug: "gem-direct-purchase", title: "Direct Purchase", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-07", coverage: "new", file: "gem" },
  { slug: "l1-process-gem", title: "L1 Process", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-08", coverage: "existing", file: "gem" },
  { slug: "product-listing", title: "Product Listing", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-09", coverage: "existing", file: "gem" },
  { slug: "service-listing", title: "Service Listing", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-10", coverage: "existing", file: "gem" },
  { slug: "oem-vendor-registration", title: "OEM Registration & Vendor Registration", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-11", coverage: "existing", file: "gem" },
  { slug: "gem-brand-registration", title: "Brand Registration", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-12", coverage: "new", file: "gem" },
  { slug: "tender-information-support", title: "Tender Information", categoryId: "government-tenders", categoryLabel: CAT_GEM, code: "TND-05", coverage: "new", file: "gem" },
  { slug: "gem-training", title: "GeM Training", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-13", coverage: "new", file: "gem" },
  { slug: "gem-one-stop-solution", title: "One Stop Solution for GeM Portal", categoryId: "gem-procurement", categoryLabel: CAT_GEM, code: "GEM-14", coverage: "hub", file: "gem" },

  // ---------------------------------------------------------------
  // Business Registration & Incorporation (6 pages)
  // Not part of the original 57-item audit list, but every other card on
  // the site now links to a dedicated page — these six were the only
  // remaining gap, so they get the same treatment.
  // ---------------------------------------------------------------
  { slug: "private-limited-company", title: "Private Limited Company", categoryId: "business-registration", categoryLabel: CAT_REG, code: "REG-01", coverage: "existing", file: "business-registration" },
  { slug: "one-person-company", title: "One Person Company (OPC)", categoryId: "business-registration", categoryLabel: CAT_REG, code: "REG-02", coverage: "existing", file: "business-registration" },
  { slug: "llp-registration", title: "LLP Registration", categoryId: "business-registration", categoryLabel: CAT_REG, code: "REG-03", coverage: "existing", file: "business-registration" },
  { slug: "partnership-firm-registration", title: "Partnership Firm", categoryId: "business-registration", categoryLabel: CAT_REG, code: "REG-04", coverage: "existing", file: "business-registration" },
  { slug: "proprietorship-registration", title: "Proprietorship", categoryId: "business-registration", categoryLabel: CAT_REG, code: "REG-05", coverage: "existing", file: "business-registration" },
  { slug: "section-8-company-registration", title: "Section 8 Company", categoryId: "business-registration", categoryLabel: CAT_REG, code: "REG-06", coverage: "existing", file: "business-registration" },
];

export const REDIRECT_ENTRIES = SERVICE_MANIFEST.filter((e) => e.coverage === "redirect");
