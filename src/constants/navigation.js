import { products } from "./siteContent";

export const productLinks = products.map((p) => ({
  label: p.title,
  href: `/products#${p.id}`,
}));

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", children: productLinks },
  { label: "Technical Specs", href: "/specifications" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const ctaItem = { label: "Get a Quote", href: "/contact#enquiry" };
