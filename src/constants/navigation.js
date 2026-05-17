export const aboutLinks = [
  { label: "SEPL Introduction", href: "/about#introduction" },
  { label: "Factory Overlook", href: "/about#factory" },
  { label: "Manufacturing Facility", href: "/about#manufacturing" },
  { label: "Quality Assurance", href: "/about#quality" },
  { label: "Certificates", href: "/about#certificates" },
  { label: "Certificate Of Vendor", href: "/about#vendor-certificate" },
];

export const productLinks = [
  { label: "Loading Arms", href: "/products/loading-arms" },
  { label: "Unloading Arms Systems", href: "/products/unloading-arms" },
  { label: "Floating Suction Assemblies", href: "/products/floating-suction" },
  { label: "Prover Tanks", href: "/products/prover-tanks" },
  { label: "Swivel Joints", href: "/products/swivel-joints" },
  { label: "Test Aiders", href: "/products/test-aiders" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", children: aboutLinks },
  { label: "Products", href: "/products", children: productLinks },
  { label: "Careers", href: "/careers" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Clients", href: "/clients" },
  { label: "Download", href: "/download" },
  
];

export const ctaItem = { label: "Enquiry", href: "/enquiry" };
