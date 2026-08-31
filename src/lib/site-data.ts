// Central content store for Gurur Consultancy Services LLP.
// All copy is sourced verbatim from the brief, condensed into card copy.
// Items marked `[ADD DETAILS]` / `[UPDATE STAT]` are client-fill placeholders.

export type ServiceItem = {
  code: string; // mono reference code, e.g. REG-01
  name: string;
  description: string;
  details?: string[]; // accordion bullets, optional
  slug?: string; // when present, links to /services/[slug] instead of /contact
};

export type ServiceCategory = {
  id: string; // url fragment
  code: string; // category code, e.g. REG
  name: string;
  intro: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "business-registration",
    code: "REG",
    name: "Business Registration & Incorporation",
    intro:
      "Start right. We incorporate your business entity end-to-end — DSC, DIN, PAN, TAN, GST and MSME support included — so you can begin operations compliantly from day one.",
    items: [
      {
        code: "REG-01",
        name: "Private Limited Company",
        description:
          "India's most preferred structure for funded startups and growing businesses — limited liability, separate legal entity and easier access to capital.",
        details: [
          "Digital Signature Certificate (DSC) for directors",
          "Director Identification Number (DIN) allotment",
          "Name reservation via SPICe+ (Part A)",
          "Incorporation filing via SPICe+ (Part B)",
          "PAN & TAN allotment (linked)",
          "Commencement of Business (INC-20A) filing",
          "Registered office verification (INC-22)",
        ],
        slug: "private-limited-company",
      },
      {
        code: "REG-02",
        name: "One Person Company (OPC)",
        description:
          "A private limited company with a single founder — limited liability without the need for a co-founder.",
        slug: "one-person-company",
      },
      {
        code: "REG-03",
        name: "LLP Registration",
        description:
          "Limited Liability Partnership — combines operational flexibility of a partnership with limited liability of a company.",
        slug: "llp-registration",
      },
      {
        code: "REG-04",
        name: "Partnership Firm",
        description:
          "Traditional partnership with a registered deed — ideal for professional firms and family-run businesses.",
        slug: "partnership-firm-registration",
      },
      {
        code: "REG-05",
        name: "Proprietorship",
        description:
          "Simplest form of business — single owner, minimal compliance, fast to set up.",
        slug: "proprietorship-registration",
      },
      {
        code: "REG-06",
        name: "Section 8 Company",
        description:
          "Non-profit entity with limited liability — for charities, foundations, and social enterprises.",
        slug: "section-8-company-registration",
      },
    ],
  },
  {
    id: "statutory-registrations",
    code: "GOV",
    name: "Government & Statutory Registrations",
    intro:
      "Every registration your business needs to operate legally and access government schemes — filed correctly the first time, with renewal and compliance support built in.",
    items: [
      {
        code: "GOV-01",
        name: "GST Registration",
        description:
          "Goods & Services Tax registration — mandatory beyond threshold turnover and for inter-state sales.",
        slug: "gst-registration",
      },
      {
        code: "GOV-02",
        name: "MSME / Udyam Registration",
        description:
          "Unlock subsidies, easier credit, and tender preference. We file your Udyam certificate in a single working day.",
        slug: "msme-udyam-registration",
      },
      {
        code: "GOV-03",
        name: "Startup India Recognition",
        description:
          "DPIIT recognition for eligible startups — tax benefits, easier compliance and fund-raising advantages.",
        slug: "startup-india-recognition",
      },
      {
        code: "GOV-04",
        name: "Import Export Code (IEC)",
        description:
          "Mandatory 10-digit code issued by DGFT for any business importing or exporting goods or services from India.",
        slug: "import-export-code-iec",
      },
      {
        code: "GOV-05",
        name: "Digital Signature Certificate (DSC)",
        description:
          "Class 3 DSC for filings with MCA, GST, Income Tax, EPFO, trade marks and tenders.",
        slug: "digital-signature-certificate",
      },
      {
        code: "GOV-06",
        name: "FSSAI License",
        description:
          "Food Safety license — Basic, State or Central, depending on turnover and scale of food operations.",
        slug: "fssai-registration-license",
      },
      {
        code: "GOV-07A",
        name: "Trade License",
        description:
          "Local municipal license authorising your business premises to operate legally.",
        slug: "trade-license",
      },
      {
        code: "GOV-07B",
        name: "Shop & Establishment / Gumasta Registration",
        description:
          "State Shops & Establishments registration (Gumasta in several states) covering your premises and working-hours compliance.",
        slug: "shop-establishment-gumasta-registration",
      },
      {
        code: "GOV-08",
        name: "Professional Tax Registration",
        description:
          "State-level tax on professionals and employers — registration and return filing support.",
        slug: "professional-tax-registration",
      },
      {
        code: "GOV-09",
        name: "Pollution Control Board Consent",
        description:
          "Consent to Establish (CTE) and Consent to Operate (CTO) for manufacturing and process industries.",
        slug: "pollution-control-board-consent",
      },
      {
        code: "GOV-10",
        name: "Fire NOC",
        description:
          "Fire safety certificate from the local fire department — mandatory for commercial and industrial premises.",
        slug: "fire-noc",
      },
      {
        code: "GOV-11A",
        name: "EPFO / PF Registration",
        description:
          "Employees' Provident Fund registration and compliance for eligible employers.",
        slug: "epfo-pf-registration",
      },
      {
        code: "GOV-11B",
        name: "ESIC Registration",
        description:
          "Employee State Insurance registration for eligible employers and their workforce.",
        slug: "esic-registration",
      },
      {
        code: "GOV-12",
        name: "Labour License",
        description:
          "Shops & Establishments and Contract Labour licensing for compliant workforce management.",
        slug: "labour-license",
      },
      {
        code: "GOV-13",
        name: "E-Way Bill Setup",
        description:
          "Configure E-way bill generation for movement of goods above the GST threshold.",
      },
      {
        code: "GOV-14",
        name: "NSIC Registration",
        description:
          "Single-point registration with the National Small Industries Corporation — supports MSMEs seeking government procurement preference.",
        slug: "nsic-registration",
      },
      {
        code: "GOV-15",
        name: "PAN & TAN Services",
        description:
          "PAN and TAN application assistance for new entities and individuals — the base identifiers most other registrations depend on.",
        slug: "pan-tan-services",
      },
      {
        code: "GOV-16",
        name: "LIN Certification",
        description:
          "Labour Identification Number certificate for establishments — applies to ordinary employers, not only NGOs.",
        slug: "lin-certification",
      },
    ],
  },
  {
    id: "gem-procurement",
    code: "GEM",
    name: "GeM & Government Procurement",
    intro:
      "Become a verified, sell-ready seller on the Government e-Marketplace (GeM) — from registration and cataloguing to vendor assessment and OEM authorization.",
    items: [
      {
        code: "GEM-01",
        name: "GeM Registration",
        description:
          "Seller registration on the Government e-Marketplace — Aadhaar/PAN, bank, and category verification included.",
        slug: "gem-registration",
      },
      {
        code: "GEM-02",
        name: "GeM Seller Account Setup",
        description:
          "Complete seller onboarding — profile, CA certificate upload, payment and brand verification.",
      },
      {
        code: "GEM-03",
        name: "GeM Account Management",
        description:
          "Ongoing management — bid participation, order acceptance, invoice filing and rating upkeep.",
      },
      {
        code: "GEM-04",
        name: "GeM Catalog Management",
        description:
          "Listing creation, product images, datasheets and pricing — your storefront done right.",
        details: [
          "Product listing & service listing creation",
          "Brand authorization and OEM proof uploads",
          "Catalogue optimisation with correct HSN/SAC codes",
          "Pricing strategy (BOQ vs L1 vs Custom)",
          "Image and datasheet standards compliance",
        ],
      },
      {
        code: "GEM-05",
        name: "Vendor Assessment",
        description:
          "GeM Vendor Assessment (VA) for higher-value participation — turnover, certifications and capability audit.",
      },
      {
        code: "GEM-06",
        name: "OEM Authorization",
        description:
          "Original Equipment Manufacturer authorization — authorise resellers to list your brand on GeM.",
        slug: "oem-vendor-registration",
      },
      {
        code: "GEM-07",
        name: "Direct Purchase",
        description:
          "GeM's Direct Purchase order route for lower-value requirements — understand it and stay ready to fulfil it.",
        slug: "gem-direct-purchase",
      },
      {
        code: "GEM-08",
        name: "L1 Process",
        description:
          "How GeM's L1 (lowest technically-qualified bid) selection works, and pricing your bid to compete on it.",
        slug: "l1-process-gem",
      },
      {
        code: "GEM-09",
        name: "Product Listing",
        description:
          "Create compliant, buyer-ready product listings with correct specifications and HSN codes.",
        slug: "product-listing",
      },
      {
        code: "GEM-10",
        name: "Service Listing",
        description:
          "List your services on GeM with the right category, SAC code and service-level details.",
        slug: "service-listing",
      },
      {
        code: "GEM-11",
        name: "Brand Registration",
        description:
          "GeM's brand-approval workflow for OEMs before branded products can be listed.",
        slug: "gem-brand-registration",
      },
      {
        code: "GEM-12",
        name: "GeM Training",
        description:
          "Practical, hands-on training for your team on registration, cataloguing and bidding on GeM.",
        slug: "gem-training",
      },
      {
        code: "GEM-13",
        name: "One Stop Solution for GeM Portal",
        description:
          "A single guided path through the entire GeM journey — registration to tender participation.",
        slug: "gem-one-stop-solution",
      },
    ],
  },
  {
    id: "government-tenders",
    code: "TND",
    name: "Government Tenders",
    intro:
      "Identify, qualify and win government tenders — from bid discovery to documentation, pricing strategy and submission.",
    items: [
      {
        code: "TND-01",
        name: "Government Tender Participation",
        description:
          "End-to-end tender participation — registration on CPP Portal, EMD and bid submission support.",
        slug: "tender-participation",
      },
      {
        code: "TND-02",
        name: "Tender & Bid Consultancy",
        description:
          "Document preparation, eligibility mapping, pricing strategy and technical write-up for winning bids.",
      },
      {
        code: "TND-03",
        name: "Government Procurement Growth Strategy",
        description:
          "A 5-stage roadmap to grow your government business: Register → Comply → Prepare → Participate → Grow.",
        details: [
          "Register — GeM, CPP, departmental vendor panels",
          "Comply — certifications & documentation upgrades",
          "Prepare — bid templates, technical write-ups, BOQ",
          "Participate — targeted tender discovery & submission",
          "Grow — track record building and panel expansions",
        ],
      },
      {
        code: "TND-04",
        name: "Tender Publishing",
        description:
          "How tenders get published on GeM/CPP Portal, and how we help you track new ones as they go live.",
        slug: "gem-tender-publishing",
      },
      {
        code: "TND-05",
        name: "Tender Information",
        description:
          "Ongoing tender search, alerts and evaluation support so relevant opportunities don't slip past you.",
        slug: "tender-information-support",
      },
    ],
  },
  {
    id: "certifications",
    code: "CERT",
    name: "Certifications & Quality Standards",
    intro:
      "Certifications that signal quality and unlock tender eligibility — ISO management systems, BIS, CE, RoHS and food safety standards.",
    items: [
      {
        code: "CERT-01",
        name: "ISO 9001 — Quality Management",
        description:
          "International standard for quality management systems — credibility with customers and tender buyers.",
        slug: "iso-9001",
      },
      {
        code: "CERT-02",
        name: "ISO 14001 — Environmental Management",
        description:
          "Environmental management system certification — increasingly required in government procurement.",
        slug: "iso-14001",
      },
      {
        code: "CERT-03",
        name: "ISO 27001 — Information Security",
        description:
          "Information security management — essential for IT, fintech and data-sensitive businesses.",
        slug: "iso-27001",
      },
      {
        code: "CERT-04",
        name: "ISO 45001 — Occupational Health & Safety",
        description:
          "OH&S management system — mandatory for many construction, manufacturing and service tenders.",
        slug: "iso-45001",
      },
      {
        code: "CERT-05",
        name: "BIS Certification",
        description:
          "Bureau of Indian Standards certification — mandatory for many product categories sold in India.",
      },
      {
        code: "CERT-06",
        name: "CE Certification",
        description:
          "European Conformity marking for products exported to the EU market.",
        slug: "ce-marking",
      },
      {
        code: "CERT-07",
        name: "RoHS Compliance",
        description:
          "Restriction of Hazardous Substances compliance for electrical and electronic equipment.",
        slug: "rohs-compliance",
      },
      {
        code: "CERT-08A",
        name: "HACCP",
        description:
          "Food safety and hazard-control system certification assistance for manufacturers and processors.",
        slug: "haccp-certification",
      },
      {
        code: "CERT-08B",
        name: "GMP",
        description:
          "Good Manufacturing Practices certification assistance for consistent production quality and safety.",
        slug: "gmp-certification",
      },
      {
        code: "CERT-09",
        name: "ISO 22000",
        description:
          "Food safety management system standard covering the entire food supply chain.",
        slug: "iso-22000",
      },
      {
        code: "CERT-10",
        name: "ISO 13485",
        description:
          "Quality management system standard specific to medical device manufacturers.",
        slug: "iso-13485",
      },
      {
        code: "CERT-11",
        name: "ISO 50001",
        description:
          "Energy management system standard for organisations reducing energy costs and impact.",
        slug: "iso-50001",
      },
      {
        code: "CERT-12",
        name: "Organic Certification",
        description:
          "Certification assistance for organic farming, processing and handling operations.",
        slug: "organic-certification",
      },
      {
        code: "CERT-13",
        name: "WHO-GMP",
        description:
          "WHO's specific GMP framework for pharmaceutical manufacturers, often required for export markets.",
        slug: "who-gmp-certification",
      },
      {
        code: "CERT-14",
        name: "Kosher Certification",
        description:
          "Certification assistance for food businesses seeking Kosher-compliant production and supply chains.",
        slug: "kosher-certification",
      },
      {
        code: "CERT-15",
        name: "FDA",
        description:
          "Support understanding and preparing US FDA registration and compliance requirements for exporters.",
        slug: "fda-registration-support",
      },
      {
        code: "CERT-16",
        name: "FCC",
        description:
          "Compliance and documentation support for electronics manufacturers exporting to the US market.",
        slug: "fcc-certification-support",
      },
      {
        code: "CERT-17",
        name: "GDP",
        description:
          "Good Distribution Practice certification assistance for pharmaceutical and healthcare logistics.",
        slug: "gdp-certification",
      },
      {
        code: "CERT-18",
        name: "SA 8000",
        description:
          "Social accountability certification covering labour rights and workplace conditions.",
        slug: "sa8000-certification",
      },
      {
        code: "CERT-19",
        name: "CMMI Levels",
        description:
          "Process-maturity appraisal support for software and technology delivery organisations.",
        slug: "cmmi-certification",
      },
      {
        code: "CERT-20",
        name: "BIFMA Levels",
        description:
          "Sustainability and performance standards certification support for furniture manufacturers.",
        slug: "bifma-certification",
      },
      {
        code: "CERT-21",
        name: "GreenGuard",
        description:
          "Low chemical-emission certification assistance for building products and furnishings.",
        slug: "greenguard-certification",
      },
    ],
  },
  {
    id: "trademark-ip-branding",
    code: "IP",
    name: "Trademark, IP & Branding",
    intro:
      "Protect and present your brand — trademark registration, copyright, barcodes and brand identity design.",
    items: [
      {
        code: "IP-01",
        name: "Trademark Registration",
        description:
          "Search, file and protect your brand name and logo under the Trade Marks Act, 1999.",
      },
      {
        code: "IP-02",
        name: "Copyright Registration",
        description:
          "Protect original creative works — software, designs, literature, music and art.",
      },
      {
        code: "IP-03",
        name: "GS1 Barcode Registration",
        description:
          "GS1 India barcode allotment for retail-ready products and supply-chain compliance.",
        slug: "gs1-barcode-registration",
      },
      {
        code: "IP-04",
        name: "Business Branding & Logo Design",
        description:
          "Brand identity, logo, business profile material and portfolio design for a credible market presence.",
      },
    ],
  },
  {
    id: "ngo-csr-services",
    code: "NGO",
    name: "NGO & CSR Services",
    intro:
      "Set up and run a compliant non-profit — registration, tax exemptions, CSR eligibility and Darpan listing.",
    items: [
      {
        code: "NGO-01",
        name: "NGO Registration",
        description:
          "Society, Trust or Section 8 company incorporation for non-profits and social enterprises.",
      },
      {
        code: "NGO-02",
        name: "12A Registration",
        description:
          "Income-tax exemption for the NGO's own income — essential for grant eligibility.",
      },
      {
        code: "NGO-03",
        name: "80G Registration",
        description:
          "Tax-deduction benefit for donors — making your NGO more attractive to contributors.",
      },
      {
        code: "NGO-04",
        name: "CSR Registration",
        description:
          "CSR-1 registration with MCA — mandatory to receive CSR funds from eligible companies.",
      },
      {
        code: "NGO-05",
        name: "NGO Darpan Registration",
        description:
          "Listing on the NITI Aayog NGO Darpan portal — required for government grants and partnerships.",
      },
      {
        code: "NGO-06",
        name: "LIN Number Certificate",
        description:
          "Labour Identification Number for establishments — required for compliance with the e-Shram ecosystem.",
        slug: "lin-certification",
      },
    ],
  },
  {
    id: "documentation-reports",
    code: "DOC",
    name: "Documentation & Reports",
    intro:
      "Project reports, CA certificates and tender-specific documentation — the paperwork that turns intent into a winning bid.",
    items: [
      {
        code: "DOC-01",
        name: "Project Reports",
        description:
          "Detailed DPRs for funding, expansion, MUDRA/CGTMSE loans and government scheme applications.",
        slug: "project-report-certification",
      },
      {
        code: "DOC-02",
        name: "CA Net Worth Certificate",
        description:
          "Practising Chartered Accountant's net worth certificate — commonly required for vendor registration.",
        slug: "net-worth-certificate",
      },
      {
        code: "DOC-03",
        name: "Turnover Certificate",
        description:
          "CA-attested turnover certificate — frequently mandatory for GeM Vendor Assessment and tender bids.",
        slug: "turnover-certificate",
      },
      {
        code: "DOC-04",
        name: "Audit Certificates",
        description:
          "Statutory and tax audit certificates in formats accepted by tender authorities.",
      },
      {
        code: "DOC-05",
        name: "Tender-specific Documentation",
        description:
          "Custom documentation packs for individual tenders — eligibility checklists, EMD, financial bid covers.",
      },
      {
        code: "DOC-06",
        name: "CA Certificates",
        description:
          "A single overview of the CA-attested certificates we help coordinate — net worth, turnover and audit certificates.",
        slug: "ca-certificates",
      },
    ],
  },
];

// Used by the hero, About CTA and final Home CTA
export const BRAND_TAGLINE_EN = "Your Business. Our Expertise. Your Growth.";
export const BRAND_TAGLINE_HI = "आपकी सफलता में हमारा गुरुर है।";
export const BRAND_FOOTER_LINE = "Your success is our Gurur.";

// Hero trust strip badges — numbers are placeholders, marked [UPDATE STAT]
export const TRUST_BADGES = [
  { label: "Businesses Registered", value: "500+" },
  { label: "GeM Certified Consultants", value: "100%" },
  { label: "End-to-End Compliance", value: "1-Stop" },
  { label: "Pan-India Support", value: "24×7" },
];

// Why businesses choose Gurur — 6 differentiators
export const WHY_CHOOSE_GURUR = [
  {
    code: "W-01",
    icon: "Layers",
    title: "End-to-End Support",
    short: "One partner from idea to registration to tender win.",
    full: "From your first incorporation filing to your first government contract, you work with a single accountable team — no juggling multiple vendors for compliance, certifications and procurement.",
  },
  {
    code: "W-02",
    icon: "Compass",
    title: "Practical Guidance",
    short: "Plain-language advice from people who have filed thousands of cases.",
    full: "We translate government rules into clear next steps. You'll always know what's mandatory, what's optional, and what's worth your time and money — no jargon, no guesswork.",
  },
  {
    code: "W-03",
    icon: "FileText",
    title: "Documentation Support",
    short: "Right documents, right format, right the first time.",
    full: "Most rejections come from incorrect documentation. We prepare and verify every document to specification — CA certificates, project reports, tender bid packs and more.",
  },
  {
    code: "W-04",
    icon: "ShieldCheck",
    title: "Compliance-Focused Approach",
    short: "We don't just register — we keep you compliant.",
    full: "Registration is the start, not the end. We build a compliance calendar for your entity so annual filings, renewals and audits never catch you by surprise.",
  },
  {
    code: "W-05",
    icon: "Landmark",
    title: "Government Procurement Expertise",
    short: "We know GeM, CPP and tender portals inside-out.",
    full: "GeM cataloguing, vendor assessment, OEM authorization and tender participation — we have direct, current experience of how these portals and panels work in practice.",
  },
  {
    code: "W-06",
    icon: "Handshake",
    title: "Long-Term Business Support",
    short: "We grow with you — from proprietorship to private limited.",
    full: "Many of our clients started as proprietorships and are now private limited companies bidding on government tenders. We support every stage of that journey under one roof.",
  },
];

// Who we support — client-type list
export const WHO_WE_SUPPORT = [
  "Entrepreneurs",
  "Startups",
  "MSMEs",
  "Manufacturers",
  "Exporters & Importers",
  "NGOs & Trusts",
  "Private / Public Limited Companies",
  "Service Providers",
];

// 9-step journey on Home — "From Business Idea to Government Contract"
export const JOURNEY_STEPS = [
  { num: "01", title: "Business Setup", desc: "Choose the right structure for your goals." },
  { num: "02", title: "Registration", desc: "Incorporate and obtain all statutory IDs." },
  { num: "03", title: "Compliance", desc: "GST, MSME, labour, tax — set up and active." },
  { num: "04", title: "Certification", desc: "ISO, BIS and industry-specific certifications." },
  { num: "05", title: "GeM", desc: "Register as a verified government seller." },
  { num: "06", title: "Catalog", desc: "List your products and services on GeM." },
  { num: "07", title: "Vendor Assessment", desc: "Qualify for higher-value procurement." },
  { num: "08", title: "Tender Participation", desc: "Discover, qualify and submit winning bids." },
  { num: "09", title: "Government Contract", desc: "Win and execute the contract — and grow." },
];

// 5-step process band — "Understand → Prepare → Apply → Follow Up → Complete"
export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "We listen to your business, your goals and your challenge.",
  },
  {
    num: "02",
    title: "Prepare",
    desc: "We prepare the right documentation and compliance pack.",
  },
  {
    num: "03",
    title: "Apply",
    desc: "We file with the right authority, correctly the first time.",
  },
  {
    num: "04",
    title: "Follow Up",
    desc: "We follow up with departments and resolve queries.",
  },
  {
    num: "05",
    title: "Complete",
    desc: "You receive your registration, certification or contract.",
  },
];

// Quick stats / hero stat strip
export const HERO_STATS = [
  { value: "8", label: "Service Categories" },
  { value: "50+", label: "Registration Types" },
  { value: "500+", label: "Businesses Onboarded" },
];

// Pillars grid (Home section 3) — derived from service categories
export const PILLARS = [
  {
    code: "P-01",
    icon: "Building2",
    label: "Business Registration",
    description: "Company, LLP, OPC, Partnership — set up right.",
    href: "/services#business-registration",
  },
  {
    code: "P-02",
    icon: "Receipt",
    label: "GST & MSME",
    description: "Statutory IDs to operate and access schemes.",
    href: "/services#statutory-registrations",
  },
  {
    code: "P-03",
    icon: "Landmark",
    label: "GeM & Procurement",
    description: "Become a verified seller on Government e-Marketplace.",
    href: "/services#gem-procurement",
  },
  {
    code: "P-04",
    icon: "Award",
    label: "Certifications",
    description: "ISO, BIS, CE — credibility that wins tenders.",
    href: "/services#certifications",
  },
  {
    code: "P-05",
    icon: "FileCheck",
    label: "Tenders",
    description: "Discover, qualify and win government bids.",
    href: "/services#government-tenders",
  },
  {
    code: "P-06",
    icon: "Stamp",
    label: "Trademark & Branding",
    description: "Protect and present your brand identity.",
    href: "/services#trademark-ip-branding",
  },
  {
    code: "P-07",
    icon: "HeartHandshake",
    label: "NGO / CSR",
    description: "Run a compliant, fundable non-profit.",
    href: "/services#ngo-csr-services",
  },
  {
    code: "P-08",
    icon: "FolderOpen",
    label: "Documentation",
    description: "Project reports, CA certificates, tender packs.",
    href: "/services#documentation-reports",
  },
];

// [ADD DETAILS] — client to replace placeholders below
export const CONTACT_DETAILS = {
  phone: "+91 [ADD DETAILS]",
  phoneHref: "tel:+910000000000",
  whatsapp: "+91 [ADD DETAILS]",
  whatsappHref: "https://wa.me/910000000000",
  email: "[ADD DETAILS]@gururconsultancy.in",
  emailHref: "mailto:[ADD DETAILS]@gururconsultancy.in",
  address: "[ADD DETAILS], Business District, City, State — 000000",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.076786987643!2d77.20766031508255!3d28.61391938242479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347e9a1f%3A0xa23b6d1f0d68f4dc!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const SOCIAL_LINKS = {
  linkedin: "#",
  twitter: "#",
  facebook: "#",
  instagram: "#",
};
