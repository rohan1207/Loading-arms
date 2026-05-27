import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { company } from "../../constants/siteContent";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal } from "../ui/Reveal";

export default function ContactCta() {
  return (
    <section className="bg-[var(--bg-base)] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <OptimizedImage src={images.contact} alt="Steelfab plant" className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-l lg:from-steel-900/40 lg:to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Get started</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  Ready to eliminate hose pipes?
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  Speak with our loading arm specialists for custom engineering, Test Aiders up to 18 inches, and
                  terminal solutions. Based in Pune — serving India and exports worldwide.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 font-semibold text-brand-800 hover:underline">
                    <Phone className="h-4 w-4" /> {company.phone}
                  </a>
                  {company.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-brand-800">
                      <Mail className="h-4 w-4" /> {email}
                    </a>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PillButton to="/contact#enquiry" variant="primary" className="px-8 py-3">
                    Request a quote
                    <ArrowUpRight className="h-4 w-4" />
                  </PillButton>
                  <PillButton to="/specifications" variant="outline" className="px-6 py-3">
                    Technical specs
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
