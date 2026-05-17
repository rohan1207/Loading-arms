export function isNavActive(pathname, href) {
  if (pathname === href) return true;
  if (href === "/about" && pathname.startsWith("/about")) return true;
  if (href === "/products" && pathname.startsWith("/products")) return true;
  return false;
}
