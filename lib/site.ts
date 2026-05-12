export const site = {
  name: "JMT Shipping & Trading Co. Ltd.",
  url: "https://www.jmtshipping.com",
  description:
    "Bangladesh-based shipping agency and integrated maritime service provider supporting port calls, logistics, surveys, crew matters, and marine supplies.",
  address:
    "Nazir Mansion, 1 No. CCT Gate, Bandar, South Halishahar - 4225, Chattogram, Bangladesh.",
  addressParts: {
    streetAddress: "Nazir Mansion, 1 No. CCT Gate, Bandar, South Halishahar",
    addressLocality: "Chattogram",
    postalCode: "4225",
    addressCountry: "BD"
  },
  emails: ["agency@jmtshipping.com", "ops@jmtshipping.com"],
  website: "www.jmtshipping.com",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ],
  cta: { label: "Request Agency Support", href: "/contact" }
};

export const pageSeo = {
  home: {
    title: "Bangladesh Port Agency & Maritime Support",
    description:
      "JMT Shipping & Trading Co. Ltd. provides 24/7 Bangladesh port agency, vessel husbandry, logistics, crew, survey, marine supply, and trade support from Chattogram.",
    path: "/"
  },
  about: {
    title: "About JMT Shipping & Trading Co. Ltd.",
    description:
      "Learn about JMT Shipping & Trading Co. Ltd., a Chattogram-based shipping agency delivering compliance-focused Bangladesh maritime support for 12+ years.",
    path: "/about"
  },
  services: {
    title: "Port Agency, Logistics & Marine Services in Bangladesh",
    description:
      "Explore JMT's Bangladesh maritime services, including port agency, STS logistics, crew documentation, vessel surveys, marine supplies, environmental support, and trade coordination.",
    path: "/services"
  },
  contact: {
    title: "Contact JMT Shipping Operations",
    description:
      "Contact JMT Shipping & Trading Co. Ltd. for Bangladesh port agency, maritime logistics, survey, crew, marine supply, and urgent vessel operations support.",
    path: "/contact"
  }
} as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.emails.map((email) => `mailto:${email}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressParts.streetAddress,
    addressLocality: site.addressParts.addressLocality,
    postalCode: site.addressParts.postalCode,
    addressCountry: site.addressParts.addressCountry
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Bangladesh"
    },
    {
      "@type": "City",
      name: "Chattogram"
    }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  makesOffer: [
    "Port agency",
    "Vessel husbandry",
    "Marine logistics",
    "Crew change support",
    "Survey coordination",
    "Marine supplies"
  ],
  knowsAbout: [
    "Bangladesh port agency",
    "Chattogram maritime logistics",
    "Ship-to-ship coordination",
    "Vessel husbandry",
    "Marine survey support"
  ]
};

export const trustHighlights = [
  { value: "12+", label: "Years of maritime experience" },
  { value: "BD", label: "Bangladesh seaport coverage" },
  { value: "24/7", label: "Operations coordination" },
  { value: "100%", label: "Compliance focused support" }
];

export const serviceGroups = [
  {
    title: "Port Agency & Vessel Support",
    icon: "⚓",
    description:
      "Port call coordination, vessel husbandry, owner matters, berthing support, and real-time agency communication.",
    items: ["Port agency", "Vessel husbandry", "Owner protective agency", "Berth and launch coordination"]
  },
  {
    title: "Logistics & STS Services",
    icon: "🚢",
    description:
      "Integrated marine logistics, ship-to-ship service coordination, spares delivery, and cargo movement support.",
    items: ["STS coordination", "Marine logistics", "Spare parts delivery", "Local transport support"]
  },
  {
    title: "Crew & Documentation Services",
    icon: "🧭",
    description:
      "Crew change, immigration support, documentation, clearances, and safe transfer arrangements for seafarers.",
    items: ["Crew change", "Immigration liaison", "Documentation", "Seafarer transfers"]
  },
  {
    title: "Survey & Inspection Services",
    icon: "📋",
    description:
      "Cargo, bunker, condition, and underwater inspection coordination with clear reporting and trusted local execution.",
    items: ["Cargo survey", "Bunker survey", "Condition reporting", "Underwater diving"]
  },
  {
    title: "Marine Supplies & Environmental Services",
    icon: "💧",
    description:
      "Fresh water, provisions, stores, sludge and waste coordination, and environmental service support for vessels.",
    items: ["Fresh water supply", "Stores and provisions", "Waste coordination", "Environmental services"]
  },
  {
    title: "Oil & Gas / Trade Support",
    icon: "🛢️",
    description:
      "Commercial and operational support for oil, gas, trading, and project cargo clients moving through Bangladesh ports.",
    items: ["Oil and gas support", "Trading support", "Project coordination", "Commercial liaison"]
  }
];


export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  whyChoose: string[];
};

export const serviceDetails = [
  {
    slug: "port-agency",
    title: "Port Agency Services in Bangladesh",
    shortTitle: "Port Agency",
    eyebrow: "Port call coordination",
    description:
      "Responsive port agency support for vessel calls, clearances, berth coordination, launch attendance, and principal communication across Bangladesh ports.",
    metaDescription:
      "JMT provides port agency services in Bangladesh with 24/7 vessel attendance, port liaison, documentation, berth support, and transparent updates.",
    keywords: ["port agency Bangladesh", "Chattogram port agent", "ship agent Bangladesh"],
    overview:
      "JMT acts as a dependable local port agency partner for owners, charterers, operators, and managers requiring coordinated attendance in Bangladesh. Our operations team supports pre-arrival planning, port liaison, documentation follow-up, husbandry requests, and timely updates so each call is managed with practical local knowledge and professional communication.",
    benefits: [
      "Single point of contact for port call coordination and local attendance.",
      "24/7 operational monitoring for vessel schedules, berthing, and service requests.",
      "Compliance-focused documentation and liaison with relevant port stakeholders.",
      "Clear reporting for principals, charterers, and vessel managers."
    ],
    process: [
      { step: "01", title: "Nomination review", description: "We confirm vessel particulars, ETA, cargo scope, required services, and reporting contacts." },
      { step: "02", title: "Pre-arrival coordination", description: "Our team aligns port formalities, berth intelligence, vendor attendance, and launch or transport needs." },
      { step: "03", title: "Port stay attendance", description: "JMT monitors the call, coordinates local resources, and escalates operational issues quickly." },
      { step: "04", title: "Departure and closing", description: "We assist departure requirements and provide closing documentation, updates, and cost summaries." }
    ],
    whyChoose: [
      "Local Chattogram-based team with Bangladesh port knowledge.",
      "Responsive communication for time-sensitive vessel matters.",
      "Integrated access to crew, supply, survey, and logistics services."
    ]
  },
  {
    slug: "sts-service",
    title: "STS Service Coordination in Bangladesh",
    shortTitle: "STS Service",
    eyebrow: "Ship-to-ship support",
    description:
      "Practical ship-to-ship service coordination for marine logistics, attendance planning, local liaison, equipment support, and operational updates.",
    metaDescription:
      "Coordinate STS service support in Bangladesh with JMT for local liaison, logistics, attendance planning, documentation, and real-time operations updates.",
    keywords: ["STS service Bangladesh", "ship to ship coordination", "marine logistics Bangladesh"],
    overview:
      "JMT supports ship-to-ship related requirements by coordinating local resources, agency communication, logistics, documentation, and operational follow-up. We help principals align the moving parts around STS activity so vessel teams receive timely support and stakeholders remain informed.",
    benefits: [
      "Coordinated local support for vessels, vendors, and service providers.",
      "Structured planning around ETAs, weather windows, and operational constraints.",
      "Responsive updates for principals and attending parties.",
      "Integration with launch, transport, stores, and documentation support."
    ],
    process: [
      { step: "01", title: "Scope confirmation", description: "We review the STS requirement, involved vessels, location, timing, and support services." },
      { step: "02", title: "Resource alignment", description: "JMT coordinates suitable local vendors, documentation flow, transport, and attendance plans." },
      { step: "03", title: "Operational follow-up", description: "Our team tracks progress, communicates changes, and supports issue resolution." },
      { step: "04", title: "Completion reporting", description: "Principals receive closing updates, relevant documents, and service summaries." }
    ],
    whyChoose: [
      "Strong local liaison capability for complex marine coordination.",
      "Experience supporting time-critical vessel and cargo operations.",
      "Transparent communication before, during, and after attendance."
    ]
  },
  {
    slug: "vessel-husbandry",
    title: "Vessel Husbandry Services in Bangladesh",
    shortTitle: "Vessel Husbandry",
    eyebrow: "Owner and crew support",
    description:
      "Husbandry assistance for stores, provisions, spares, medical needs, launch service, transport, documentation, and owner matters during port stay.",
    metaDescription:
      "JMT delivers vessel husbandry services in Bangladesh including stores, provisions, spares, medical coordination, transport, launch, and documentation support.",
    keywords: ["vessel husbandry Bangladesh", "ship husbandry Chattogram", "marine supplies Bangladesh"],
    overview:
      "JMT provides coordinated vessel husbandry services to keep ships, crews, and owner matters moving efficiently while alongside, at anchorage, or preparing for port operations. We manage practical local arrangements with an emphasis on responsiveness, documentation, and dependable follow-through.",
    benefits: [
      "Coordinated stores, provisions, spares, and launch requirements.",
      "Support for crew welfare, medical coordination, and local transport.",
      "Owner-focused handling of urgent operational requests.",
      "Consolidated communication through one local operations team."
    ],
    process: [
      { step: "01", title: "Requirement list", description: "We gather the vessel’s husbandry needs, urgency, delivery point, and documentation requirements." },
      { step: "02", title: "Local arrangement", description: "JMT sources vendors, schedules transport or launch attendance, and confirms feasibility." },
      { step: "03", title: "Delivery coordination", description: "We monitor the requested service through completion and keep the vessel and principal updated." },
      { step: "04", title: "Document closeout", description: "Receipts, delivery notes, and operational summaries are shared for principal records." }
    ],
    whyChoose: [
      "Broad husbandry coverage from supplies to crew welfare support.",
      "Practical vendor coordination with professional oversight.",
      "Available for planned calls and urgent operational needs."
    ]
  },
  {
    slug: "crew-change",
    title: "Crew Change Services in Bangladesh",
    shortTitle: "Crew Change",
    eyebrow: "Seafarer movement support",
    description:
      "Crew change coordination for documentation, immigration liaison, transport, hotel arrangements, medical needs, and safe seafarer transfers.",
    metaDescription:
      "Arrange crew change services in Bangladesh with JMT, including seafarer documentation, immigration liaison, transfers, hotels, and vessel attendance.",
    keywords: ["crew change Bangladesh", "seafarer transfer Chattogram", "crew logistics Bangladesh"],
    overview:
      "JMT coordinates crew change arrangements for joining and signing-off seafarers with careful attention to documentation, timing, transport, and welfare. We work with principals and vessel teams to reduce disruption and support compliant movement through local processes.",
    benefits: [
      "Documentation and immigration liaison support for planned crew movements.",
      "Coordinated airport, hotel, port, launch, and vessel transfer arrangements.",
      "Assistance for medical, welfare, and urgent crew matters.",
      "Clear status updates for managers, masters, and crewing teams."
    ],
    process: [
      { step: "01", title: "Crew details", description: "We verify joining and off-signing crew information, travel plans, and documentation status." },
      { step: "02", title: "Formalities planning", description: "JMT coordinates local liaison, immigration-related support, transport, and accommodation needs." },
      { step: "03", title: "Transfer execution", description: "Our team monitors arrival, movement, vessel transfer, and any schedule changes." },
      { step: "04", title: "Confirmation", description: "Principals receive completion updates and supporting records for crew files." }
    ],
    whyChoose: [
      "Seafarer-focused support with practical local coordination.",
      "Responsive handling of schedule changes and urgent crew needs.",
      "Integrated agency, transport, and vessel attendance capability."
    ]
  },
  {
    slug: "fresh-water-supply",
    title: "Fresh Water Supply for Vessels in Bangladesh",
    shortTitle: "Fresh Water Supply",
    eyebrow: "Marine supply coordination",
    description:
      "Fresh water supply coordination for vessels with delivery planning, local vendor liaison, attendance monitoring, and documentation support.",
    metaDescription:
      "JMT coordinates fresh water supply for vessels in Bangladesh with local delivery planning, vendor liaison, attendance monitoring, and documentation.",
    keywords: ["fresh water supply vessel Bangladesh", "marine water supply Chattogram", "ship supplies Bangladesh"],
    overview:
      "JMT arranges fresh water supply support for vessels calling Bangladesh, coordinating practical delivery options, timing, and local attendance. Our team helps principals and masters plan replenishment needs while keeping service communication simple and accountable.",
    benefits: [
      "Coordinated fresh water delivery planning for port or anchorage requirements.",
      "Local vendor liaison and attendance monitoring through completion.",
      "Support for related stores, provisions, and husbandry requests.",
      "Delivery documentation and prompt operational updates."
    ],
    process: [
      { step: "01", title: "Quantity and timing", description: "We confirm required volume, delivery location, vessel schedule, and access conditions." },
      { step: "02", title: "Vendor coordination", description: "JMT aligns local supply resources, delivery method, documentation, and estimated timeline." },
      { step: "03", title: "Supply attendance", description: "Our operations team tracks delivery progress and communicates any operational constraints." },
      { step: "04", title: "Completion records", description: "Delivery notes and closing updates are shared with the vessel and principal." }
    ],
    whyChoose: [
      "Reliable coordination for essential vessel replenishment.",
      "Ability to combine water supply with broader husbandry support.",
      "Local follow-up from request through documentation closeout."
    ]
  },
  {
    slug: "cargo-survey",
    title: "Cargo Survey Coordination in Bangladesh",
    shortTitle: "Cargo Survey",
    eyebrow: "Cargo inspection support",
    description:
      "Cargo survey coordination for loading, discharge, condition checks, quantity observations, documentation, and stakeholder reporting.",
    metaDescription:
      "Coordinate cargo survey support in Bangladesh with JMT for loading, discharge, condition checks, quantity observations, and clear reporting.",
    keywords: ["cargo survey Bangladesh", "marine cargo inspection", "Chattogram cargo survey"],
    overview:
      "JMT coordinates cargo survey attendance for principals requiring practical local support around loading, discharge, condition observations, and documentation. We help align survey resources and operational communication so cargo stakeholders receive timely, usable information.",
    benefits: [
      "Survey attendance coordination for cargo operations and condition checks.",
      "Support for documentation, photographs, and stakeholder updates.",
      "Local liaison with vessel, terminal, and attending parties.",
      "Clear reporting flow for owners, charterers, traders, and insurers."
    ],
    process: [
      { step: "01", title: "Instruction review", description: "We confirm cargo type, operation, survey objective, location, and reporting requirements." },
      { step: "02", title: "Attendance planning", description: "JMT aligns survey attendance, access arrangements, local liaison, and documentation needs." },
      { step: "03", title: "Observation support", description: "Operational updates and relevant observations are communicated during attendance." },
      { step: "04", title: "Report handling", description: "We support document collection and share closing summaries with the instructing party." }
    ],
    whyChoose: [
      "Local coordination for cargo-sensitive vessel and terminal operations.",
      "Practical reporting support for commercial stakeholders.",
      "Integrated agency knowledge to reduce attendance friction."
    ]
  },
  {
    slug: "bunker-survey",
    title: "Bunker Survey Coordination in Bangladesh",
    shortTitle: "Bunker Survey",
    eyebrow: "Fuel quantity support",
    description:
      "Bunker survey coordination for fuel quantity checks, sampling support, delivery attendance, documentation, and principal reporting.",
    metaDescription:
      "JMT coordinates bunker survey support in Bangladesh for fuel quantity checks, delivery attendance, sampling support, documentation, and reporting.",
    keywords: ["bunker survey Bangladesh", "bunker quantity survey", "marine fuel survey Chattogram"],
    overview:
      "JMT helps coordinate bunker survey requirements for vessels and principals seeking local attendance during fuel operations. Our role is to align survey resources, vessel communication, documentation support, and timely updates around the bunkering process.",
    benefits: [
      "Coordination for bunker quantity checks, delivery attendance, and sampling support.",
      "Local liaison with vessel teams, suppliers, and relevant stakeholders.",
      "Documentation follow-up for bunker delivery and survey records.",
      "Real-time communication during time-sensitive fuel operations."
    ],
    process: [
      { step: "01", title: "Bunker plan review", description: "We confirm vessel schedule, supply plan, survey objective, and documentation needs." },
      { step: "02", title: "Survey alignment", description: "JMT coordinates local attendance, access, communication points, and service timing." },
      { step: "03", title: "Operation monitoring", description: "Our team follows the operation and shares progress or exception updates." },
      { step: "04", title: "Records and closeout", description: "Relevant documents and closing summaries are collected and forwarded to principals." }
    ],
    whyChoose: [
      "Focused coordination for commercially important bunker operations.",
      "Practical local support for vessel, supplier, and survey communication.",
      "Commitment to documentation discipline and timely reporting."
    ]
  },
  {
    slug: "underwater-diving",
    title: "Underwater Diving Support in Bangladesh",
    shortTitle: "Underwater Diving",
    eyebrow: "Hull and underwater attendance",
    description:
      "Underwater diving coordination for hull inspection support, propeller or sea chest checks, light underwater assistance, and reporting liaison.",
    metaDescription:
      "JMT coordinates underwater diving support in Bangladesh for hull inspections, propeller checks, sea chest checks, attendance planning, and reporting.",
    keywords: ["underwater diving Bangladesh", "hull inspection Chattogram", "marine diving support"],
    overview:
      "JMT coordinates underwater diving attendance for vessel operators requiring local support for hull-related observations, checks, and light assistance. We focus on safe planning, suitable local resources, clear vessel communication, and practical reporting coordination.",
    benefits: [
      "Local coordination for underwater inspection and diving attendance.",
      "Support for hull, propeller, sea chest, and condition observation requirements.",
      "Operational liaison between vessel, diving team, and principal.",
      "Documentation and photo-reporting follow-up where applicable."
    ],
    process: [
      { step: "01", title: "Requirement assessment", description: "We review the inspection purpose, vessel position, urgency, and safety considerations." },
      { step: "02", title: "Team coordination", description: "JMT arranges suitable local attendance, timing, access, and operational communication." },
      { step: "03", title: "Diving attendance", description: "The operation is monitored with updates for vessel command and the instructing party." },
      { step: "04", title: "Reporting support", description: "Available findings, images, and closing notes are coordinated for principal review." }
    ],
    whyChoose: [
      "Practical access to local marine diving coordination.",
      "Safety-aware planning for vessel and underwater attendance.",
      "Integrated support with agency, survey, and logistics services."
    ]
  }
] as const satisfies ServiceDetail[];

export const serviceDetailMap = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service])
) as Record<string, ServiceDetail>;

export const values = [
  "Safety-first coordination",
  "Transparent communication",
  "Anti-bribery and compliance commitment",
  "Reliable 24/7 operational response",
  "Local port knowledge with international standards"
];
