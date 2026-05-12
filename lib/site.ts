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

export const values = [
  "Safety-first coordination",
  "Transparent communication",
  "Anti-bribery and compliance commitment",
  "Reliable 24/7 operational response",
  "Local port knowledge with international standards"
];
