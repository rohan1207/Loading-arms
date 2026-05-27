import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import OptimizedImage from "../components/ui/OptimizedImage";
import { company, products } from "../constants/siteContent";
import { images } from "../constants/images";
import { cn } from "../utils/cn";
import { Reveal } from "../components/ui/Reveal";

export default function Contact() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.hash === "#enquiry") {
      requestAnimationFrame(() => {
        document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--bg-base)]">
      <PageHero
        badge="Get in touch"
        title="Contact Us"
        description="Headquarters & manufacturing plant in Pune — direct support for loading arm enquiries, Test Aiders, and export projects."
        image={images.contact}
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <Reveal direction="left">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-soft">
                <OptimizedImage src={images.factory[0]} alt="Plant" className="aspect-[16/7]" />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
                <h2 className="font-display text-xl font-bold">Headquarters & plant</h2>
                <p className="mt-4 flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <strong className="text-[var(--text-primary)]">{company.legalName}</strong>
                    <br />
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.city}
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft md:p-8">
                <h2 className="font-display text-xl font-bold">Direct contacts</h2>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-lg font-semibold text-brand-800 hover:underline"
                    >
                      <Phone className="h-5 w-5 text-brand-600" />
                      {company.phone}
                    </a>
                  </li>
                  {company.emails.map((email) => (
                    <li key={email}>
                      <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-brand-800">
                        <Mail className="h-5 w-5 text-brand-600" />
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <Clock className="h-4 w-4" />
                  Mon–Sat · Business hours IST
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.1}>
            <div id="enquiry" className="scroll-mt-28">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border border-brand-200 bg-brand-50 px-8 py-16 text-center"
                >
                  <p className="font-display text-3xl font-bold text-brand-900">Thank you!</p>
                  <p className="mt-3 text-[var(--text-secondary)]">We will respond to your loading arm enquiry shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.08)] md:p-10">
                  <h2 className="font-display text-2xl font-bold">Send an enquiry</h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Tell us about your application — size, fluid, MOC, and terminal requirements.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <label className="block sm:col-span-1">
                      <span className="text-sm font-semibold">Full name *</span>
                      <input required type="text" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-sm font-semibold">Company</span>
                      <input type="text" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-sm font-semibold">Email *</span>
                      <input required type="email" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-sm font-semibold">Phone *</span>
                      <input required type="tel" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-sm font-semibold">Product interest</span>
                      <select className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500">
                        {products.map((p) => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                        <option>Custom / Other</option>
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-sm font-semibold">Message *</span>
                      <textarea required rows={5} className="mt-1.5 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-800 active:scale-[0.98] sm:w-auto"
                    )}
                  >
                    Submit enquiry
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
