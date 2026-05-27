import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "../../constants/siteContent";
import { navItems, ctaItem } from "../../constants/navigation";
import { PillButton } from "../ui/PillButton";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-steel-900 text-slate-300">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="SEPL" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {company.legalName} — advanced loading arms, unloading systems & industrial Test Aiders from Pune, India.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick links</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Products</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Top Loading Arms</li>
              <li>Bottom Loading & Unloading</li>
              <li>Test Aiders (6&quot;–18&quot;)</li>
              <li>PTFE Lined Specialty Arms</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{company.address.city}</span>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-400" />
                  {company.phone}
                </a>
              </li>
              {company.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-400 hover:text-white">
                    <Mail className="h-4 w-4 text-brand-400" />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <PillButton to={ctaItem.href} variant="primary" className="px-5 py-2.5 text-sm">
            {ctaItem.label}
            <ArrowUpRight className="h-4 w-4" />
          </PillButton>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          Designed &amp; developed by{" "}
          <a
            href="https://thesocialkollab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-300 transition-colors hover:text-white"
          >
            TheSocialKollab
          </a>
        </p>
      </div>
    </footer>
  );
}
