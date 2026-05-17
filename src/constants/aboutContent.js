export const aboutTabs = [
  { id: "introduction", label: "SEPL Introduction", shortLabel: "Introduction" },
  { id: "factory", label: "Factory Overlook", shortLabel: "Factory" },
  { id: "manufacturing", label: "Manufacturing Facility", shortLabel: "Manufacturing" },
  { id: "quality", label: "Quality Assurance", shortLabel: "Quality" },
  { id: "certificates", label: "Certificates", shortLabel: "Certificates" },
  { id: "vendor-certificate", label: "Certificate Of Vendor", shortLabel: "Vendor" },
];

export const aboutStats = [
  { value: "1995", label: "Established" },
  { value: "3128 m²", label: "Facility area" },
  { value: "ISO 9001", label: "2015 certified" },
  { value: "50+", label: "Skilled professionals" },
];

export const introductionContent = {
  lead: "We are Manufacturer, Supplier of Unloading Arm Systems, Loading Arms, Floating Suction Assemblies, Prover Tanks, Swivel Joints from Pune, Maharashtra, India.",
  highlights: [
    { title: "Founded", detail: "1995 — Certificate of incorporation No. 11-85768" },
    { title: "Certification", detail: "ISO 9001:2015 — Design, manufacture & supply" },
    { title: "Registration", detail: "NSIC registered for core product lines" },
    { title: "Scale", detail: "3128 m² world-class facilities at two locations" },
  ],
  storyBlocks: [
    {
      title: "Who we are",
      points: [
        "SEPL is managed by directors with vast experience across operations and engineering.",
        "One of the largest leading manufacturers of fluid handling systems in India.",
        "Sales volume nearly ₹10 Cr with standards conforming to ISO, ASTM and BIS.",
      ],
    },
    {
      title: "What we build",
      points: [
        "Loading arms, unloading arms, swivel joints, floating suction & prover tanks.",
        "Mechanical seal support systems — coolers, pressure vessels, thermosyphons, API Plan 52/53.",
        "One-stop fluid handling solutions with continuous design & technology improvement.",
      ],
    },
    {
      title: "Where we serve",
      points: [
        "Oil & gas, petrochemical, pharmaceutical, chemical & fertilizer industries.",
        "Exports to Nigeria, South Africa, Vietnam, Kuwait, Greece, Israel, Indonesia, Hong Kong, Singapore & Ghana.",
      ],
    },
  ],
  qualityPolicy:
    "SEPL's quality policy is to enhance customer satisfaction by supplying world-class quality products at the right time and at the right price.",
  products: [
    "Floating Suction Assemblies",
    "Prover Tanks",
    "Storage Tanks",
    "Pressure Vessels",
    "Mechanical Seal Support Systems",
    "Thermosyphons",
    "Heat Exchangers",
    "API Plan 52/53",
    "Supply and commissioning of Mini Petrol Pumps",
    "SS / MS fabrication as per customer requirements",
    "Servicing of Loading Arms",
  ],
  clients: ["HPCL", "IOCL", "Deepak Fertilizers and Petrochemicals Corp. Ltd", "Reliance Industries Ltd", "SI Group Ltd", "RCF LTD", "HEMRL", "ARDE (Ministry of Defense)"],
  directors: [
    {
      name: "Mr. B. D. Petakar",
      role: "Director",
      address: "Ganga Residency, Hadapsar, Pune - 411 028, Maharashtra, India",
    },
    {
      name: "Mr. B. U. Hingane",
      role: "Director",
      address: "108, Hingane Ali, Hadapsar, Pune - 411 028, Maharashtra, India",
      phone: "+91 98810 70692",
    },
  ],
};

export const factoryContent = {
  lead: "We are leading Manufacturer, Supplier, Exporter of Fluid Handling Systems, Thermosyphons, Heat Exchangers, Rotary Joints, and Storage Tanks. Our setup is situated in Pune, Maharashtra, India. Majorly we serve our products to customers in Saudi Arabia.",
  features: [
    "Two manufacturing locations in Pune with modern infrastructure",
    "Material handling cranes and automated workshop processes",
    "Serving domestic and international markets including Saudi Arabia",
  ],
  images: Array.from({ length: 12 }, (_, i) => ({
    src: `/about/factory/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `SEPL factory overlook ${i + 1}`,
  })),
};

export const manufacturingContent = {
  lead: "We are leading Manufacturer, Supplier, Exporter of Loading Arm Systems, Unloading Arms, Swivel Joints, Floating Suction Assemblies, and Prover Tanks from Pune, Maharashtra, India — serving customers in Saudi Arabia and worldwide.",
  capabilities: [
    {
      title: "CNC precision",
      description: "Ultra-modern units with new-generation CNC machines for superior quality output.",
    },
    {
      title: "Kaizen philosophy",
      description: "Continuous improvement drives efficient in-house production and competitive pricing.",
    },
    {
      title: "Strong vendor network",
      description: "Trusted suppliers for outsourced components and sub-assemblies.",
    },
    {
      title: "R&D & customization",
      description: "50 skilled professionals deliver tailored solutions for every client demand.",
    },
  ],
  processSteps: [
    "Periodic expansion of facilities in response to market demand",
    "Automated material handling at Hadapsar plant",
    "In-house pneumatic & hydro testing before dispatch",
    "Custom-built arms and joints for diverse applications",
  ],
  qualityPolicy:
    "SEPL's quality policy is to enhance customer satisfaction by supplying world-class quality products at the right time and at the right price.",
  productRange: [
    "Loading / Unloading Arms Systems",
    "Swivel Joints",
    "Rotary Joints",
    "Floating Suction Assemblies",
    "Prover Tanks",
    "Storage Tanks",
    "Mechanical Seal Support Systems",
    "Thermosyphons",
    "Heat Exchangers",
  ],
};

export const qualityContent = {
  lead: "We are leading Manufacturer, Supplier, Exporter of Mechanical Seal Support Systems, Thermosyphons, Heat Exchangers, Rotary Joints, and Storage Tanks from Pune, Maharashtra, India — serving Saudi Arabia and global markets.",
  assuranceSteps: [
    {
      title: "Premium raw materials",
      description: "Procured from renowned, reliable suppliers for supreme finishing quality.",
    },
    {
      title: "Rigorous in-house testing",
      description: "High pneumatic pressure tests, hydro tests & performance validation per industry standards.",
    },
    {
      title: "Application expertise",
      description: "Special-purpose loading arms, swivel joints & systems for terminals, refineries & plants.",
    },
    {
      title: "After-sales support",
      description: "Complete peace of mind with backup support for every product we supply.",
    },
  ],
  industries: [
    "Oil Terminals / Depots",
    "Tank Farms",
    "Petrochemical / Chemical",
    "Refineries",
    "Edible Oil Plants",
    "Fertilizer Plants",
    "LPG Bottling Plants",
  ],
  certificates: [
    { src: "/about/certificates/iso-9001.jpg", title: "ISO 9001:2008 Certificate" },
    { src: "/about/certificates/weights-measure-1.jpg", title: "Weights & Measures Calibration Certificate" },
    { src: "/about/certificates/weights-measure-2.jpg", title: "Calibration Certificate" },
    { src: "/about/certificates/quality-1.jpg", title: "Quality Certification" },
    { src: "/about/certificates/quality-2.jpg", title: "Quality Certification" },
    { src: "/about/certificates/quality-3.jpg", title: "Quality Certification" },
  ],
};

export const certificatesGallery = [
  { src: "/about/certificates/gallery-1.jpg", title: "SEPL Certificate" },
  { src: "/about/certificates/gallery-2.jpg", title: "SEPL Certificate" },
  { src: "/about/certificates/gallery-3.jpg", title: "SEPL Certificate" },
  { src: "/about/certificates/gallery-4.jpg", title: "SEPL Certificate" },
  { src: "/about/certificates/gallery-5.jpg", title: "SEPL Certificate" },
  { src: "/about/certificates/gallery-6.jpg", title: "SEPL Certificate" },
];

export const vendorCertificates = [
  { src: "/about/vendor/vendor-1.jpg", title: "Certificate of Vendor" },
  { src: "/about/vendor/vendor-2.jpg", title: "Certificate of Vendor" },
  { src: "/about/vendor/vendor-3.jpg", title: "Certificate of Vendor" },
  { src: "/about/vendor/vendor-4.jpg", title: "Certificate of Vendor" },
];
