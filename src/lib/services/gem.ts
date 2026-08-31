import type { Service } from "./types";

// GeM & Government Procurement bucket — 11 dedicated service pages.
// gem-registration itself lives in business-certification.ts (it appeared
// first in that requested list) — not duplicated here.

export const GEM_SERVICES: Service[] = [
  {
    slug: "gem-tender-publishing",
    title: "Tender Publishing",
    categoryId: "government-tenders",
    categoryLabel: "GeM & Government Procurement",
    code: "TND-04",
    coverage: "new",
    shortDescription:
      "Understand how tenders get published on GeM and the CPP Portal, and how to know the moment a relevant one goes live.",
    heroHeadline: "Know the moment a tender relevant to you goes live.",
    heroSupport:
      "Tender publishing itself is a buyer-side action performed by the government department — our role is to help you monitor, catch and understand a newly published tender fast enough to act on it.",
    description: [
      "\"Tender publishing\" refers to the moment a government department or PSU lists a procurement requirement on GeM, the Central Public Procurement (CPP) Portal, or another eProcurement platform — publishing the scope of work, eligibility criteria, technical specifications, EMD amount and submission deadline.",
      "This step is carried out by the buying department, not by a seller or a consultancy — no third party publishes a tender on a client's behalf. Where sellers lose time is not in the publishing itself, but in finding out about a relevant tender late, or misreading its scope before deciding whether to bid.",
      "Gurur Consultancy's role at this stage is to help you track tenders as they're published — set up monitoring against your product/service categories, flag ones worth a closer look, and give you a clear first read of a freshly published tender's requirements so you can decide quickly whether to pursue it.",
    ],
    benefits: [
      "Earlier visibility of tenders relevant to your business category",
      "A structured first read of a tender's scope, eligibility and deadline instead of a raw PDF",
      "More time to prepare a considered bid instead of a last-minute scramble",
      "Fewer missed opportunities due to a tender being noticed too late",
    ],
    whoNeedsIt: [
      "Sellers and manufacturers who want a repeatable way to track newly published tenders",
      "Businesses that have missed relevant tenders in the past simply by not seeing them in time",
      "GeM sellers who want their monitoring aligned to their actual listed categories",
    ],
    process: [
      { title: "Consultation", description: "We understand your product/service categories, target buyers and the platforms (GeM, CPP Portal, state portals) relevant to you." },
      { title: "Monitoring Setup", description: "We configure category-based tracking so newly published tenders in your space are flagged as they appear." },
      { title: "First-Read Briefing", description: "For each flagged tender, we summarise scope, eligibility, EMD and deadline in plain language." },
      { title: "Go/No-Go Discussion", description: "You decide whether to pursue it — we can move straight into bid preparation if you do." },
    ],
    faqs: [
      { question: "Does Gurur Consultancy publish tenders?", answer: "No. Publishing a tender is a buyer-side action carried out by the government department or PSU running the procurement — not something a consultancy does. We help you monitor and understand tenders once they're published." },
      { question: "What does \"tender publishing\" actually mean?", answer: "It's the point at which a government buyer lists a requirement on GeM, the CPP Portal, or a state eProcurement platform, including scope, eligibility, EMD and deadline." },
      { question: "How is this different from Tender Participation?", answer: "This service is about finding and understanding a tender the moment it appears. Tender Participation is the bidding process that follows once you've decided to go ahead." },
      { question: "How do you decide which tenders are relevant to me?", answer: "We track tenders against the product/service categories, buyer types and geographies that match your business — set up during the consultation stage." },
      { question: "Can this cover tenders on portals other than GeM?", answer: "Yes, where relevant — the CPP Portal and several state eProcurement portals can be included alongside GeM." },
      { question: "What happens once a relevant tender is found?", answer: "We give you a plain-language summary of scope, eligibility and deadline so you can quickly decide whether to bid, and can move into tender preparation if you do." },
    ],
    relatedServices: ["tender-information-support", "tender-participation", "l1-process-gem", "gem-registration"],
    ctaDescription: "Tell us your product or service categories and we'll show you how tender monitoring would work for your business.",
  },

  {
    slug: "tender-participation",
    title: "Tender Participation",
    categoryId: "government-tenders",
    categoryLabel: "GeM & Government Procurement",
    code: "TND-01",
    coverage: "existing",
    shortDescription:
      "End-to-end support for bidding on a government tender — eligibility checks, documentation, EMD and submission.",
    heroHeadline: "Bid on government tenders with your documentation in order.",
    heroSupport:
      "We help you assess whether a tender is worth pursuing, prepare a compliant bid, and manage submission and follow-up — the eligibility and outcome always rest with the buyer's evaluation.",
    description: [
      "Government tenders — whether run through GeM, the CPP Portal or a departmental process — give manufacturers, suppliers and service providers access to large, recurring procurement opportunities. But every tender carries its own eligibility criteria, technical and financial requirements, documentation list and submission deadline.",
      "Participating well means more than submitting a bid: it means correctly reading whether you qualify, assembling the right technical and financial documents, calculating your EMD, and submitting through the correct channel before the deadline.",
      "Gurur Consultancy supports businesses through each of these steps — from an honest eligibility assessment through to submission — so that your bid is complete and compliant with what the specific tender asks for.",
    ],
    benefits: [
      "A clear-eyed eligibility assessment before you commit time and EMD to a bid",
      "Bid documentation prepared and checked against the tender's stated requirements",
      "Reduced risk of technical disqualification due to missing or incorrect documents",
      "A structured process for tracking deadlines and clarification windows",
    ],
    whoNeedsIt: [
      "Manufacturers and suppliers bidding on government tenders for the first time",
      "MSMEs looking to participate in tenders that reserve or prefer MSME vendors",
      "Service providers responding to a departmental request for proposal or tender",
      "Businesses that have been technically disqualified in the past due to documentation issues",
    ],
    eligibility: [
      "Eligibility is set independently by each tender's own terms — turnover, experience, certifications and registrations required will vary",
      "Registration on the relevant portal (GeM, CPP Portal or the department's own eProcurement platform) is typically a precondition",
      "Some tenders carry reservations or relaxations for MSMEs or Startups — applicability depends on the specific tender",
    ],
    documents: [
      "PAN, GST registration and MSME/Udyam certificate, where applicable",
      "Company incorporation or registration documents",
      "Financial documents — turnover certificate, net worth certificate or audited financials as asked for",
      "Relevant technical certifications (ISO, BIS or product-specific, as required by the tender)",
      "EMD instrument or exemption proof, and any tender-specific undertakings",
    ],
    documentsNote: "Commonly required documents may include:",
    process: [
      { title: "Tender Review", description: "We read the tender document with you and map its eligibility, technical and financial requirements." },
      { title: "Eligibility Check", description: "We assess honestly whether your business currently meets the stated criteria." },
      { title: "Document Preparation", description: "We assemble and format the technical and financial documents the tender asks for." },
      { title: "Pricing & EMD", description: "We help structure your commercial bid and confirm the EMD requirement." },
      { title: "Submission", description: "The bid is submitted through the tender's specified channel before the deadline." },
      { title: "Clarification & Follow-up", description: "We track and respond to any clarification requests raised during evaluation." },
    ],
    faqs: [
      { question: "What is Tender Participation?", answer: "It's the process of reviewing a published government tender, preparing a compliant technical and financial bid, and submitting it before the deadline." },
      { question: "Who can participate in government tenders?", answer: "Any eligible manufacturer, supplier or service provider that meets the specific tender's stated criteria and is registered on the relevant procurement portal." },
      { question: "Can Gurur Consultancy guarantee I'll win a tender?", answer: "No. Evaluation and award decisions rest entirely with the buying department. We help you prepare a complete, compliant bid — the outcome depends on the buyer's evaluation against all bidders." },
      { question: "What is EMD?", answer: "Earnest Money Deposit — a refundable amount bidders typically submit with a tender to demonstrate seriousness of intent; the exact requirement and any exemptions are set by each tender." },
      { question: "What documents are usually needed?", answer: "This varies by tender, but commonly includes registration certificates, financial statements, and relevant technical certifications — we confirm the exact list against the specific tender." },
      { question: "What happens after I submit a bid?", answer: "The buyer evaluates all bids against the stated criteria; you may be asked for clarifications during this window, which we help you respond to." },
    ],
    relatedServices: ["gem-tender-publishing", "l1-process-gem", "tender-information-support", "gst-registration"],
    ctaDescription: "Share the tender you're considering and we'll help you assess eligibility before you commit.",
  },

  {
    slug: "gem-direct-purchase",
    title: "Direct Purchase",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-07",
    coverage: "new",
    shortDescription:
      "Understand GeM's Direct Purchase order mode and how to keep your catalog ready to receive these orders.",
    heroHeadline: "Be ready when a buyer orders directly, not through a bid.",
    heroSupport:
      "Direct Purchase orders on GeM go straight to a listed seller without a competitive bidding round — we help you keep your listings, pricing and documentation in a state where you can accept these orders without delay.",
    description: [
      "GeM allows government buyers to place orders directly against catalog listings for requirements that fall within GeM's Direct Purchase provisions, rather than running a full bid or reverse-auction process. The current value limits and conditions for Direct Purchase are set and periodically revised by GeM — these should be confirmed on the portal at the time of an order.",
      "For a seller, being order-ready for Direct Purchase depends largely on having an accurate, complete and competitively priced catalog listing, and being able to fulfil and invoice an order promptly once it arrives.",
      "Gurur Consultancy helps sellers get their catalog into that order-ready state and understand what's expected once a Direct Purchase order is placed — acceptance, delivery timelines and invoicing.",
    ],
    benefits: [
      "Faster order acceptance because your listing and documentation are already in order",
      "Reduced risk of losing a direct order to a delay in responding",
      "Clearer understanding of what buyers expect once an order lands",
    ],
    whoNeedsIt: [
      "GeM sellers with an active catalog who want to be responsive to direct orders",
      "New GeM sellers who are unfamiliar with how Direct Purchase differs from bid-based orders",
      "Manufacturers/suppliers of items commonly bought this way, such as standard, non-customised products",
    ],
    process: [
      { title: "Catalog Review", description: "We check whether your existing listings are structured to be found and ordered directly." },
      { title: "Pricing Check", description: "We review your listed pricing for competitiveness relative to comparable listings." },
      { title: "Readiness Guidance", description: "We walk you through order-acceptance, delivery and invoicing expectations on GeM." },
      { title: "Ongoing Support", description: "We help you respond promptly once a direct order is received." },
    ],
    faqs: [
      { question: "What is Direct Purchase on GeM?", answer: "An order mode where a government buyer places an order directly against a seller's catalog listing without running a competitive bid, typically for requirements within GeM's current Direct Purchase provisions." },
      { question: "Is there a value limit for Direct Purchase?", answer: "GeM sets and periodically revises value limits and conditions for this mode — we confirm the current applicable limit on the portal at the time relevant to your listing." },
      { question: "Do I need a separate registration for Direct Purchase?", answer: "No separate registration — any seller with an active, correctly listed catalog on GeM can potentially receive these orders." },
      { question: "How quickly must I respond to a Direct Purchase order?", answer: "GeM sets order-acceptance and delivery timelines as part of the order terms; we help you understand and plan around these." },
      { question: "How can I improve my chances of receiving direct orders?", answer: "An accurate, complete and competitively priced catalog listing is the main factor — we review this as part of our catalog support." },
    ],
    relatedServices: ["product-listing", "service-listing", "gem-registration", "l1-process-gem"],
    ctaDescription: "We'll review your GeM catalog and flag what's holding back direct order readiness.",
  },

  {
    slug: "l1-process-gem",
    title: "L1 Process",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-08",
    coverage: "existing",
    shortDescription:
      "Understand how GeM's L1 (lowest-bid) selection works and price your bid or listing with that logic in mind.",
    heroHeadline: "Price with the L1 mechanism in mind, not against it.",
    heroSupport:
      "On most GeM bids and reverse auctions, the lowest bid among technically qualified sellers — the L1 bid — wins. We help you think through pricing strategy against that reality before you commit a number.",
    description: [
      "\"L1\" refers to the lowest bid received from a technically qualified bidder in a GeM bid or reverse-auction process. Once technical qualification is cleared, the commercial evaluation on most GeM procurements comes down to this price-based ranking, which makes pricing strategy one of the more consequential decisions in the bidding process.",
      "Pricing purely to win L1 without accounting for your own margins and delivery capacity is a common way sellers end up with unprofitable or hard-to-fulfil orders. The opposite risk — pricing too conservatively — can mean losing volume you were technically qualified to win.",
      "Gurur Consultancy helps sellers think through this trade-off: understanding how a specific bid's evaluation works, what comparable past bids have cleared at where that information is available, and where your own cost base sets a realistic floor.",
    ],
    benefits: [
      "A clearer view of how the L1 mechanism will decide the specific bid you're entering",
      "Pricing decisions grounded in your actual costs and delivery capacity, not guesswork",
      "Reduced risk of winning an order you can't profitably fulfil",
    ],
    whoNeedsIt: [
      "GeM sellers bidding for the first time on a reverse-auction or L1-based tender",
      "Manufacturers and suppliers deciding between a BOQ, L1 or custom pricing approach for a listing",
      "Businesses that have previously won a bid but found it unprofitable to execute",
    ],
    process: [
      { title: "Bid Review", description: "We look at the specific tender/bid's evaluation method to confirm it is L1-based." },
      { title: "Cost Mapping", description: "We work through your cost base, delivery timeline and margin requirement for this order." },
      { title: "Pricing Strategy", description: "We discuss where to position your bid given the L1 logic and your own constraints." },
      { title: "Bid Submission Support", description: "We help finalise the commercial bid within the tender's submission process." },
    ],
    faqs: [
      { question: "What does L1 mean on GeM?", answer: "It's shorthand for the lowest bid among technically qualified bidders in a GeM reverse-auction or bid-based procurement — commercial evaluation is typically decided on this basis." },
      { question: "Does Gurur Consultancy set my price for me?", answer: "We help you think through the pricing decision using the L1 mechanism, your costs and your delivery capacity — the final price and the decision to bid remain yours." },
      { question: "Is every GeM order decided by L1?", answer: "No — some categories and order values use Direct Purchase or other evaluation methods instead. We confirm the applicable mechanism for your specific case." },
      { question: "What's the risk of underpricing to win L1?", answer: "Winning an order priced below your sustainable cost can make fulfilment difficult or unprofitable — this is exactly the trade-off we help you work through before you bid." },
      { question: "Does technical qualification matter if I have the lowest price?", answer: "Yes — L1 ranking only applies among bidders who have already cleared technical qualification; a lower price from a technically disqualified bidder isn't considered." },
    ],
    relatedServices: ["tender-participation", "product-listing", "service-listing", "gem-registration"],
    ctaDescription: "Bring us the bid you're evaluating and we'll help you think through the pricing decision.",
  },

  {
    slug: "product-listing",
    title: "Product Listing",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-09",
    coverage: "existing",
    shortDescription:
      "Get your products listed on GeM correctly — category, specifications, pricing and compliance in order from the start.",
    heroHeadline: "List your products the way GeM buyers actually search.",
    heroSupport:
      "We help you choose the right category, complete accurate specifications, and set pricing and compliance details so your product listing is find-able and order-ready.",
    description: [
      "A product listing on GeM is how a seller makes a specific product available for government buyers to find, compare and order. Getting it right involves choosing the correct product category and sub-category, filling in accurate technical specifications, attaching the right compliance and brand documentation, and setting pricing.",
      "An incomplete or miscategorised listing is one of the more common reasons a product goes unnoticed by buyers, even when the seller is otherwise fully eligible to sell it.",
      "Gurur Consultancy supports the listing process end to end — from category and specification mapping through to getting the listing live and ready to receive orders.",
    ],
    benefits: [
      "A listing that's easier for the right buyers to find in category search and filters",
      "Specifications and documentation aligned with GeM's requirements for that product category",
      "Fewer listing rejections or holds due to incomplete information",
    ],
    whoNeedsIt: [
      "Registered GeM sellers ready to list a specific product",
      "Manufacturers introducing a new product to their existing GeM catalog",
      "Sellers whose current listings aren't generating enquiries and may need re-work",
    ],
    documents: [
      "GeM seller account and category authorisation for the product",
      "Product technical specification sheet",
      "Brand authorisation or OEM proof, where the product is not your own manufacture",
      "Product images meeting GeM's listing standards",
      "Applicable certifications (BIS, ISO or product-specific) for the category",
    ],
    documentsNote: "Commonly required information/documents may include:",
    process: [
      { title: "Category Mapping", description: "We identify the correct GeM category and sub-category for your product." },
      { title: "Specification Preparation", description: "We prepare accurate, complete technical specifications in GeM's required format." },
      { title: "Documentation & Images", description: "We compile brand/OEM proof, certifications and compliant product images." },
      { title: "Listing Creation", description: "We create the listing on your GeM seller account with pricing set." },
      { title: "Review & Go-Live", description: "We check the listing before it goes live and confirm it's visible in relevant category searches." },
    ],
    faqs: [
      { question: "What is Product Listing on GeM?", answer: "The process of making a specific product searchable and orderable by government buyers through your GeM seller account, under the correct category with complete specifications." },
      { question: "Who can list a product on GeM?", answer: "Any seller with an active GeM account and category authorisation for that product type — manufacturers, authorised resellers and OEM-authorised sellers." },
      { question: "What happens if my product is miscategorised?", answer: "It may not appear in the searches and filters relevant buyers actually use, effectively making it invisible even though technically listed." },
      { question: "Do I need certifications to list a product?", answer: "Some categories require specific certifications such as BIS — this depends on the product; we confirm what applies before listing." },
      { question: "Can I update a listing after it's live?", answer: "Yes, listings can be updated — pricing, specifications and documentation can be revised as needed." },
    ],
    relatedServices: ["service-listing", "gem-registration", "oem-vendor-registration", "l1-process-gem"],
    ctaDescription: "Share your product details and we'll map out what your GeM listing needs.",
  },

  {
    slug: "service-listing",
    title: "Service Listing",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-10",
    coverage: "existing",
    shortDescription:
      "List your services on GeM with the right service category, scope definition and pricing structure.",
    heroHeadline: "Present your service offering the way GeM evaluates it.",
    heroSupport:
      "Service listings on GeM are structured differently from product listings — scope of work, service parameters and pricing models need to be defined clearly for a buyer to compare and select you.",
    description: [
      "A service listing on GeM lets government buyers discover and engage service providers — from AMC and manpower services to consulting, IT and facility management — through the marketplace rather than a separate tendering process, where the service category supports it.",
      "Because services don't have a fixed physical specification the way products do, a listing needs a clearly defined scope of work, service parameters, and an appropriate pricing structure (per unit, per service, or as defined by the category) to be evaluated fairly by buyers.",
      "Gurur Consultancy helps service providers translate what they actually deliver into a GeM-compliant service listing — scoped, priced and documented in the format the category expects.",
    ],
    benefits: [
      "A service listing that clearly communicates scope to a buyer comparing options",
      "Pricing structured the way the specific service category expects it",
      "Reduced back-and-forth from buyers due to an unclear or incomplete listing",
    ],
    whoNeedsIt: [
      "Service providers — AMC, manpower, consulting, IT, facility management and similar categories — ready to list on GeM",
      "Registered GeM sellers expanding from products into service categories",
      "Providers whose existing service listing isn't clearly understood by buyers",
    ],
    documents: [
      "GeM seller account and service category authorisation",
      "Detailed scope of work / service description",
      "Relevant experience or capability documentation for the service category",
      "Applicable certifications (such as ISO for service-quality categories)",
      "Pricing structure appropriate to the service category",
    ],
    documentsNote: "Commonly required information/documents may include:",
    process: [
      { title: "Service Scoping", description: "We define the exact scope of work and service parameters for the listing." },
      { title: "Category Mapping", description: "We confirm the correct GeM service category and applicable pricing structure." },
      { title: "Documentation", description: "We compile experience/capability proof and any required certifications." },
      { title: "Listing Creation", description: "We create the listing with scope, pricing and documentation in place." },
      { title: "Review & Go-Live", description: "We check the listing before it goes live for buyer visibility." },
    ],
    faqs: [
      { question: "What is Service Listing on GeM?", answer: "It's the process of making a defined service offering discoverable and orderable by government buyers through your GeM seller account." },
      { question: "How is a service listing different from a product listing?", answer: "A service listing centres on a clearly defined scope of work and an appropriate pricing structure rather than a fixed physical specification." },
      { question: "What service categories are commonly listed on GeM?", answer: "Categories such as AMC, manpower supply, consulting, IT services and facility management are commonly available, subject to GeM's current category list." },
      { question: "Do I need prior experience to list a service?", answer: "Some service categories ask for experience or capability documentation as part of the listing or a related assessment — we confirm this for your specific category." },
      { question: "Can pricing vary by contract duration or scale?", answer: "Depending on the category, GeM supports different pricing structures — we help you set this up correctly for how your service is actually delivered." },
    ],
    relatedServices: ["product-listing", "gem-registration", "tender-participation", "l1-process-gem"],
    ctaDescription: "Describe the service you want to list and we'll help scope it for GeM.",
  },

  {
    slug: "oem-vendor-registration",
    title: "OEM Registration & Vendor Registration",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-11",
    coverage: "existing",
    shortDescription:
      "Two related but different GeM paths — OEM authorization for brand owners, and vendor/seller registration for anyone selling on GeM.",
    heroHeadline: "OEM or vendor — know which registration path applies to you.",
    heroSupport:
      "OEM authorization and general vendor/seller registration serve different purposes on GeM. We help you identify the right one — or both — for how your business actually operates.",
    description: [
      "\"Vendor registration\" is the standard seller-onboarding process every business goes through to sell on GeM — creating a seller account, completing identity, bank and business verification, and gaining category authorisation to list.",
      "\"OEM (Original Equipment Manufacturer) registration/authorisation\" is a separate, additional step relevant to brand owners: it establishes that you are the manufacturer or authorised brand owner of a product, which is what allows resellers to list and sell your branded product on GeM with your authorisation.",
      "Many businesses only need standard vendor registration. Manufacturers whose products are also sold by resellers, or resellers who want to list a brand that isn't their own, typically need to understand the OEM authorisation layer as well. Gurur Consultancy helps you work out which path — or combination — applies to your business.",
    ],
    benefits: [
      "Clarity on which registration path actually applies to your business model",
      "For OEMs — a documented basis for resellers to list your brand correctly",
      "For resellers — the right authorisation in place before listing another brand's product",
      "Fewer listing rejections caused by missing brand authorisation",
    ],
    whoNeedsIt: [
      "Any business intending to sell on GeM (vendor registration)",
      "Manufacturers and brand owners whose products are sold through resellers (OEM authorisation)",
      "Resellers who want to list a product under a brand they don't own",
    ],
    documents: [
      "PAN, GST and bank account details for vendor registration",
      "Aadhaar-based verification for the authorised signatory",
      "For OEM authorisation — proof of brand ownership or manufacturing rights, such as trademark registration or manufacturing licence",
      "Letter of authorisation, where a brand owner is authorising a reseller",
    ],
    documentsNote: "Commonly required documents may include:",
    process: [
      { title: "Path Assessment", description: "We confirm whether you need vendor registration, OEM authorisation, or both." },
      { title: "Document Collection", description: "You share the identity, business and brand-ownership documents relevant to your path." },
      { title: "Registration/Authorisation Filing", description: "We complete the vendor registration and/or OEM authorisation process on GeM." },
      { title: "Verification", description: "We track the platform's verification of your details and respond to any queries." },
      { title: "Activation", description: "Once approved, your seller account or OEM authorisation is active and ready for listing." },
    ],
    faqs: [
      { question: "What's the difference between OEM registration and vendor registration?", answer: "Vendor registration is the standard seller onboarding every GeM seller completes. OEM authorisation is an additional step specific to brand owners, establishing the right for their brand to be listed — by themselves or authorised resellers." },
      { question: "Do I need OEM authorisation to sell on GeM?", answer: "Only if you are a brand owner whose product will be listed by resellers, or a reseller listing someone else's brand. If you manufacture and sell only under your own account, standard vendor registration may be sufficient." },
      { question: "Can one business need both?", answer: "Yes — a manufacturer that also sells directly typically needs vendor registration, and additionally needs OEM authorisation set up if resellers will also list their brand." },
      { question: "What documents prove OEM status?", answer: "Typically proof of brand ownership or manufacturing rights, such as a trademark registration or manufacturing licence — the exact document depends on your situation." },
      { question: "How long does vendor registration take?", answer: "This depends on document readiness and the platform's verification queue at the time; we help keep the documentation complete to avoid avoidable delays." },
    ],
    relatedServices: ["gem-registration", "gem-brand-registration", "product-listing", "service-listing"],
    ctaDescription: "Tell us how your business sells its products and we'll confirm which registration path you need.",
  },

  {
    slug: "gem-brand-registration",
    title: "Brand Registration",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-12",
    coverage: "new",
    shortDescription:
      "Get your brand approved on GeM so your branded products can be listed correctly, by you or an authorised reseller.",
    heroHeadline: "Put your brand on record before it goes on the shelf.",
    heroSupport:
      "GeM's brand-approval step establishes your brand against a product category before listings under that brand can go live — we help prepare and file that documentation correctly.",
    description: [
      "Before a branded product can be listed on GeM — whether by the brand owner directly or by an authorised reseller — the brand itself typically needs to be added and approved against the relevant product category on the platform. This is distinct from the general OEM authorisation process that governs who is allowed to list on the brand's behalf.",
      "Brand registration on GeM is usually supported by proof of brand ownership, such as a trademark registration, and confirmation of the product category the brand will be listed under.",
      "Gurur Consultancy helps prepare and file this documentation so your brand is correctly on record before listings are created, reducing the chance of a listing being held up for missing brand approval.",
    ],
    benefits: [
      "Brand correctly on record before product listings are created under it",
      "Fewer listing delays caused by missing or incomplete brand approval",
      "A documented basis for authorised resellers to list your brand",
    ],
    whoNeedsIt: [
      "Brand owners and manufacturers preparing to list branded products on GeM",
      "Businesses whose resellers need to list products under their brand",
      "Sellers who have had a listing held up due to brand-approval issues",
    ],
    eligibility: [
      "Generally applies to the entity that owns or holds manufacturing/authorisation rights to the brand",
      "Typically supported by trademark registration or equivalent proof of brand ownership",
    ],
    documents: [
      "Trademark registration certificate or trademark application proof",
      "Company/manufacturer registration documents",
      "Product category details the brand will be registered under",
      "Authorisation letter, if filed on behalf of the brand owner by a reseller",
    ],
    documentsNote: "Commonly required documents may include:",
    process: [
      { title: "Brand & Category Review", description: "We confirm the brand details and the product category it needs to be registered under." },
      { title: "Document Preparation", description: "We compile trademark and ownership documentation." },
      { title: "Filing", description: "We submit the brand-registration request on GeM." },
      { title: "Follow-up", description: "We track approval status and respond to any platform queries." },
    ],
    faqs: [
      { question: "What is Brand Registration on GeM?", answer: "The process of getting a brand approved against a specific product category on GeM before products under that brand can be listed." },
      { question: "Is Brand Registration the same as OEM authorisation?", answer: "They're related but distinct — brand registration puts the brand on record for a category; OEM authorisation governs who (the owner or a reseller) is permitted to list under that brand." },
      { question: "What proof of brand ownership is needed?", answer: "A trademark registration is the most common proof; where that's still pending, we confirm what alternative evidence GeM will accept at the time of filing." },
      { question: "Can a reseller register a brand it doesn't own?", answer: "Generally no — brand registration is tied to the brand owner, though a reseller can be separately authorised to list under an already-registered brand." },
      { question: "What happens if my brand isn't registered before I try to list?", answer: "The listing is likely to be held up until the brand is approved against that category, so registering it first avoids delay." },
    ],
    relatedServices: ["oem-vendor-registration", "product-listing", "gem-registration"],
    ctaDescription: "Tell us your brand and product category and we'll check what's needed to register it on GeM.",
  },

  {
    slug: "tender-information-support",
    title: "Tender Information",
    categoryId: "government-tenders",
    categoryLabel: "GeM & Government Procurement",
    code: "TND-05",
    coverage: "new",
    shortDescription:
      "Structured tender search and evaluation support — find relevant tenders and understand them before you commit to bidding.",
    heroHeadline: "Find the tenders worth your time, before you spend it.",
    heroSupport:
      "We search across GeM, the CPP Portal and other relevant platforms for tenders matching your business, and give you a clear first read of each so you can decide where to focus.",
    description: [
      "Before a business can participate in a tender, it first has to find the right one — and government tenders are spread across GeM, the CPP Portal, state eProcurement portals and departmental sites, each with its own search and filter conventions.",
      "Tender Information support is about that discovery and evaluation stage: identifying tenders that genuinely match your product/service category and eligibility, and giving you an early, plain-language read of scope, eligibility, EMD and deadline so you're not spending time decoding a tender document just to find out it doesn't apply to you.",
      "Gurur Consultancy provides this as an ongoing or one-off service depending on what a business needs — a steady flow of relevant leads, or help evaluating a specific tender you've already found.",
    ],
    benefits: [
      "Relevant tenders surfaced without you having to search every portal yourself",
      "A quick, plain-language read of a tender before you invest time preparing a bid",
      "Better use of your team's time — focused on tenders you're actually likely to qualify for",
    ],
    whoNeedsIt: [
      "Businesses new to government tendering who don't yet have a search routine across portals",
      "Sellers who want a second read on a specific tender before committing to bid",
      "Teams without the bandwidth to monitor multiple procurement portals regularly",
    ],
    process: [
      { title: "Profile Setup", description: "We record your product/service categories, eligibility profile and target buyer types." },
      { title: "Search & Shortlist", description: "We search across relevant portals and shortlist tenders that genuinely match." },
      { title: "Tender Briefing", description: "For each shortlisted tender, we summarise scope, eligibility, EMD and deadline." },
      { title: "Decision Support", description: "You decide which to pursue — we can move directly into bid preparation for any of them." },
    ],
    faqs: [
      { question: "What is Tender Information support?", answer: "Structured tender search and evaluation — finding tenders relevant to your business and summarising them clearly so you can decide whether to bid." },
      { question: "Which portals do you search?", answer: "Primarily GeM and the CPP Portal, along with relevant state eProcurement portals where applicable to your business." },
      { question: "How is this different from Tender Publishing?", answer: "Tender Publishing describes the buyer-side act of listing a tender and our monitoring role around that moment. This service is the ongoing search and evaluation work of finding and assessing tenders relevant to you." },
      { question: "Can you evaluate a tender I've already found myself?", answer: "Yes — you can bring us a specific tender and we'll give you a clear read of its requirements before you decide." },
      { question: "Does this include preparing the bid?", answer: "Not by itself — this service covers discovery and evaluation. Bid preparation is handled under Tender Participation once you decide to go ahead." },
    ],
    relatedServices: ["gem-tender-publishing", "tender-participation", "gem-registration"],
    ctaDescription: "Tell us your product or service categories and we'll show you what relevant tenders look like right now.",
  },

  {
    slug: "gem-training",
    title: "GeM Training",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-13",
    coverage: "new",
    shortDescription:
      "Practical training for your team on how to operate a GeM seller account — listings, bids, orders and account upkeep.",
    heroHeadline: "Get your own team comfortable running your GeM account.",
    heroSupport:
      "Beyond registration and one-off support, we train your staff to independently manage listings, respond to bids and keep your GeM account active and compliant.",
    description: [
      "Many businesses rely on outside help to get registered on GeM but then struggle to keep their account active day to day — updating listings, responding to bids and orders, and staying on top of account requirements.",
      "GeM Training is aimed at closing that gap: a practical, working-level walkthrough of the GeM seller dashboard and workflows for the people in your business who will actually operate the account.",
      "Gurur Consultancy structures this training around your business's actual product/service categories and current account setup, rather than a generic walkthrough of the platform.",
    ],
    benefits: [
      "Your own team able to manage day-to-day GeM account operations independently",
      "Fewer missed bid or order deadlines due to unfamiliarity with the dashboard",
      "Reduced dependence on external support for routine account tasks",
    ],
    whoNeedsIt: [
      "Businesses that are GeM-registered but find the day-to-day account operation unfamiliar",
      "Teams onboarding a new staff member to manage the GeM account",
      "Sellers wanting to bring bid/order management in-house after initial setup support",
    ],
    process: [
      { title: "Account Review", description: "We review your current GeM account setup and the team members who'll be trained." },
      { title: "Session Planning", description: "We structure the training around your specific product/service categories and workflows." },
      { title: "Working Session(s)", description: "A practical walkthrough of the dashboard — listings, bids, orders, invoicing and account upkeep." },
      { title: "Follow-up Support", description: "We remain available for questions as your team starts operating the account independently." },
    ],
    faqs: [
      { question: "Who is GeM Training for?", answer: "The staff in your business who will actually operate the GeM seller account day to day — not necessarily the same person who handled the initial registration." },
      { question: "Is this generic platform training or specific to my business?", answer: "We structure the sessions around your actual product/service categories and current account setup rather than a generic walkthrough." },
      { question: "What does the training cover?", answer: "Practical account operation — creating and updating listings, responding to bids and orders, invoicing, and keeping the account compliant." },
      { question: "Do I need to already be GeM-registered?", answer: "Training is most useful once your account is active, but we can also plan it alongside a new registration." },
      { question: "Is support available after the training session?", answer: "Yes — we remain available for questions as your team takes over day-to-day account management." },
    ],
    relatedServices: ["gem-registration", "product-listing", "service-listing", "gem-one-stop-solution"],
    ctaDescription: "Tell us who on your team will manage your GeM account and we'll plan a session around your categories.",
  },

  {
    slug: "gem-one-stop-solution",
    title: "One Stop Solution for GeM Portal",
    categoryId: "gem-procurement",
    categoryLabel: "GeM & Government Procurement",
    code: "GEM-14",
    coverage: "hub",
    shortDescription:
      "One place to see the full GeM journey Gurur Consultancy supports — from registration through to tender participation.",
    heroHeadline: "The whole GeM journey, under one roof.",
    heroSupport:
      "Registration, catalog, brand and vendor authorisation, pricing strategy, and tender participation — these are handled as one connected journey, not disconnected one-off filings.",
    description: [
      "Selling to the government through GeM involves more than a single registration step — it spans account setup, catalog and listing management, brand and vendor authorisation where relevant, pricing strategy, and ultimately participating in bids and tenders.",
      "This page exists as a map of that journey and the individual services within it, so you can see how the pieces connect rather than treating each one as a separate, unrelated task.",
      "Gurur Consultancy supports businesses across this whole journey — you can start wherever you currently are, whether that's initial registration or improving an account that's already active.",
    ],
    benefits: [
      "One accountable point of contact across registration, cataloguing and tendering",
      "A clearer view of how each GeM-related service connects to the next stage",
      "Support that can start at whichever stage your business is currently at",
    ],
    whoNeedsIt: [
      "Businesses just starting to explore GeM as a sales channel",
      "GeM sellers with a registered but under-used or incomplete account",
      "Businesses that have used GeM in one area (e.g. products) and want to expand into others (e.g. services or tenders)",
    ],
    process: [
      { title: "Where You Are Today", description: "We start by understanding your current GeM status — unregistered, registered but inactive, or actively selling." },
      { title: "Registration & Setup", description: "GeM Registration and, where relevant, OEM/Brand authorisation are put in place." },
      { title: "Catalog Build-Out", description: "Product and/or Service Listings are created and kept accurate." },
      { title: "Account Operation", description: "Ongoing account management and, where useful, GeM Training for your team." },
      { title: "Tendering", description: "Tender Information, Tender Participation and pricing strategy (including the L1 process) as you move into bidding." },
    ],
    faqs: [
      { question: "Is \"One Stop Solution\" a single service I sign up for?", answer: "It's a way of describing the full GeM journey Gurur Consultancy supports end to end — you can engage us for one part of it (like registration) or across the whole journey as your GeM presence grows." },
      { question: "Where should I start if I've never used GeM?", answer: "Typically with GeM Registration, followed by catalog listing for your products or services — we'll confirm the right starting point based on your business." },
      { question: "I'm already registered on GeM but not getting orders — can you help?", answer: "Yes — this is usually a catalog, pricing or category issue rather than a registration problem, and we review it as part of this journey." },
      { question: "Do I need to use every service in this list?", answer: "No — most businesses only need a subset relevant to how they sell. This page is a map of what's available, not a bundled requirement." },
      { question: "How does this connect to government tenders specifically?", answer: "Once your GeM presence is set up, Tender Information and Tender Participation are the next stage for businesses that want to bid on larger, tender-based requirements rather than catalog orders alone." },
    ],
    relatedServices: ["gem-registration", "product-listing", "service-listing", "oem-vendor-registration", "l1-process-gem", "gem-brand-registration", "tender-participation", "gem-training"],
    ctaDescription: "Tell us where your business currently stands with GeM and we'll map out the next step.",
  },
];
