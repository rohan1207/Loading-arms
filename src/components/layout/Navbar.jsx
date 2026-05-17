import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { navItems, ctaItem } from "../../constants/navigation";
import { PillButton } from "../ui/PillButton";
import { cn } from "../../utils/cn";
import { isNavActive } from "../../utils/navActive";

const navPillBase =
  "rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.97]";

function NavDropdown({ label, children, href }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const isActive = isNavActive(location.pathname, href);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          navPillBase,
          "inline-flex items-center gap-1.5",
          isActive
            ? "bg-brand-700 text-white shadow-sm"
            : "text-[var(--text-secondary)] hover:bg-slate-100 hover:text-brand-800",
          open && !isActive && "bg-slate-100 text-brand-800"
        )}
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 mt-2 min-w-[260px] overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.1)]"
          >
            <Link
              to={href}
              className="mb-1 flex items-center justify-between rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-700 transition-colors hover:bg-brand-50"
              onClick={() => setOpen(false)}
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <div className="h-px bg-[var(--border)]" />
            <ul className="mt-1 space-y-0.5">
              {children.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block rounded-full px-4 py-2.5 text-[14px] font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-brand-50 text-brand-800"
                        : "text-[var(--text-secondary)] hover:bg-slate-50 hover:text-brand-800"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ label, children, href, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left font-display text-lg font-semibold text-[var(--text-primary)]"
      >
        {label}
        <ChevronDown className={cn("h-5 w-5 text-[var(--text-muted)] transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="space-y-1 pb-4 pl-2">
              <li>
                <Link to={href} className="block py-2 text-sm font-semibold text-brand-700" onClick={onNavigate}>
                  View all →
                </Link>
              </li>
              {children.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block rounded-full px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-slate-50"
                    onClick={onNavigate}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] h-[var(--nav-height)] transition-all duration-300",
          scrolled
            ? "border-b border-[var(--border)] bg-white/95 shadow-nav backdrop-blur-md"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-3 px-4 md:gap-5 md:px-8 lg:px-10">
          <Link to="/" className="group flex shrink-0 items-center gap-3 md:gap-4">
            <img
              src="/logo.png"
              alt="SEPL"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-14"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="truncate font-display text-base font-bold leading-tight text-[var(--text-primary)] md:text-lg">
                Loading Arms Pvt. Ltd.
              </p>
              <p className="mt-0.5 truncate text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)] md:text-xs">
                Steelfab Engineering
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} label={item.label} href={item.href} children={item.children} />
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    navPillBase,
                    isNavActive(location.pathname, item.href)
                      ? "bg-brand-700 text-white shadow-sm"
                      : "text-[var(--text-secondary)] hover:bg-slate-100 hover:text-brand-800"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <PillButton
              to={ctaItem.href}
              variant={location.pathname === ctaItem.href ? "navActive" : "primary"}
              className="hidden px-5 py-2.5 text-[15px] sm:inline-flex"
            >
              {ctaItem.label}
            </PillButton>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(navPillBase, "border border-[var(--border)] bg-white p-2.5 xl:hidden")}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm xl:hidden"
              onClick={closeMobile}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[120] flex w-full max-w-md flex-col bg-white xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="SEPL" className="h-10 w-auto" />
                  <span className="font-display text-sm font-bold">Loading Arms Pvt. Ltd.</span>
                </div>
                <button
                  type="button"
                  onClick={closeMobile}
                  className={cn(navPillBase, "border border-[var(--border)] p-2.5")}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-3">
                {navItems.map((item) =>
                  item.children ? (
                    <MobileAccordion
                      key={item.label}
                      label={item.label}
                      href={item.href}
                      children={item.children}
                      onNavigate={closeMobile}
                    />
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block border-b border-[var(--border)] py-4 font-display text-lg font-semibold"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="border-t border-[var(--border)] p-5">
                <PillButton to={ctaItem.href} variant="primary" className="w-full py-3.5" onClick={closeMobile}>
                  {ctaItem.label}
                  <ArrowUpRight className="h-4 w-4" />
                </PillButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
