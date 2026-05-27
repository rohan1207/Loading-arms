import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Ruler,
  Thermometer,
  RotateCw,
  ShieldCheck,
  FlaskConical,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "../components/layout/PageHero";
import OptimizedImage from "../components/ui/OptimizedImage";
import { specifications } from "../constants/siteContent";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../components/ui/Reveal";
import { cn } from "../utils/cn";

const specIcons = {
  ruler: Ruler,
  thermometer: Thermometer,
  rotate: RotateCw,
};

const mocStyles = {
  CS: {
    accent: "from-slate-600 to-slate-800",
    badge: "bg-slate-100 text-slate-800",
    border: "hover:border-slate-400",
  },
  AL: {
    accent: "from-sky-500 to-sky-700",
    badge: "bg-sky-50 text-sky-800",
    border: "hover:border-sky-300",
  },
  SS: {
    accent: "from-zinc-500 to-zinc-700",
    badge: "bg-zinc-100 text-zinc-800",
    border: "hover:border-zinc-400",
  },
  PTFE: {
    accent: "from-emerald-600 to-emerald-800",
    badge: "bg-emerald-50 text-emerald-800",
    border: "hover:border-emerald-300",
  },
};

export default function Specifications() {
  return (
    <div className="bg-[var(--bg-base)]">
      <PageHero
        badge="Engineering"
        title="Technical Specifications & MOC"
        description="Core engineering parameters and materials of construction for loading arms, Test Aiders, and specialty chemical transfer systems."
        image={images.specs}
      />

      {/* Floating highlights */}
      <div className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-5 md:-mt-14 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:grid-cols-4 md:gap-0 md:divide-x md:divide-[var(--border)] md:p-0">
            {specifications.highlights.map((item) => (
              <div key={item.label} className="px-4 py-4 text-center md:py-6">
                <p className="font-display text-2xl font-bold text-brand-800 md:text-3xl">{item.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Core specs */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Core specifications"
            title="Engineering parameters"
            description="Every system is built to your fluid, pressure, temperature, and terminal requirements — from compact depot arms to 18-inch Test Aiders."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {specifications.coreSpecs.map((spec, i) => {
              const Icon = specIcons[spec.icon] || Ruler;
              return (
                <Reveal key={spec.title} delay={i * 0.08}>
                  <article className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[0_8px_32px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-md transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-[var(--text-primary)]">{spec.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{spec.detail}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SF-Series */}
      <section className="border-y border-[var(--border)] bg-slate-900 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <OptimizedImage
                  src={images.products.testAiders}
                  alt="Test Aider with swivel joints"
                  className="aspect-[4/3]"
                  imgClassName="object-contain bg-slate-800 p-6"
                />
              </div>
            </Reveal>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">Proprietary technology</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{specifications.sfSeries.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{specifications.sfSeries.description}</p>

              <ul className="mt-8 space-y-3">
                {specifications.sfSeries.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/products#test-aiders"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white"
              >
                Explore Test Aiders
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOC */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Materials"
            title="Materials of construction (MOC)"
            description="Select the right metallurgy for your fluid service — from standard petroleum to hyper-corrosive specialty chemicals."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {specifications.materials.map((mat, i) => {
              const style = mocStyles[mat.code] || mocStyles.CS;
              return (
                <Reveal key={mat.code} delay={i * 0.06}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    className={cn(
                      "overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-soft transition-shadow hover:shadow-lg",
                      style.border
                    )}
                  >
                    <div className={cn("bg-gradient-to-r px-6 py-5 text-white", style.accent)}>
                      <span className="font-display text-3xl font-bold">{mat.code}</span>
                      <p className="mt-1 text-sm font-medium text-white/90">{mat.name}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{mat.use}</p>
                      <span className={cn("mt-4 inline-flex rounded-lg px-3 py-1 text-xs font-bold uppercase", style.badge)}>
                        {mat.code} grade
                      </span>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 px-6 py-5 text-center md:justify-between md:text-left">
              <div className="flex items-center gap-3">
                <FlaskConical className="h-6 w-6 text-brand-700" />
                <p className="text-sm font-medium text-brand-900">
                  Not sure which MOC fits your application? Our engineers will recommend the right build.
                </p>
              </div>
              <PillButton to="/contact#enquiry" variant="primary" className="shrink-0 px-6 py-2.5 text-sm">
                Discuss MOC requirements
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testing & quality */}
      <section className="border-t border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              <Reveal>
                <OptimizedImage
                  src={images.factory[2]}
                  alt="In-house testing"
                  className="col-span-2 aspect-[16/9] rounded-2xl"
                />
              </Reveal>
              <Reveal delay={0.05}>
                <OptimizedImage src={images.products.topLoading} alt="Loading arm" className="aspect-square rounded-2xl" imgClassName="object-contain bg-slate-50 p-3" />
              </Reveal>
              <Reveal delay={0.1}>
                <OptimizedImage src={images.products.ptfe} alt="PTFE lined arm" className="aspect-square rounded-2xl" imgClassName="object-contain bg-slate-50 p-3" />
              </Reveal>
            </div>

            <div>
              <SectionHeader
                eyebrow="Quality assurance"
                title="Tested before dispatch"
                description="In-house pneumatic and hydro testing validates every assembly against industry standards before it leaves our Pune facility."
                align="left"
                className="!mx-0 !max-w-none !text-left"
              />

              <Stagger className="mt-8 space-y-3" stagger={0.06}>
                {[
                  "Pneumatic pressure testing per application requirements",
                  "Hydrostatic validation for structural integrity",
                  "ISO 9001:2015 certified design & manufacture",
                  "Custom builds from 1\" to 18\" nominal bore",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-secondary)]">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-brand-600" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Size reference band */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-12 text-white md:px-14 md:py-16">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <Layers className="h-8 w-8 text-brand-300" />
                  <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                    From 1&quot; depot arms to 18&quot; Test Aiders
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-100 md:text-base">
                    One engineering team, one quality system — scalable configurations for terminals, refineries, pump OEM test beds, and export projects worldwide.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <PillButton to="/products" variant="primary" className="bg-white px-8 py-3 text-brand-800 hover:bg-brand-50">
                    View product range
                  </PillButton>
                  <Link
                    to="/contact#enquiry"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Request engineering support
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-2 border-t border-white/15 pt-10 sm:grid-cols-5">
                {['1"', '4"', '8"', '12"', '18"'].map((size) => (
                  <div key={size} className="text-center">
                    <p className="font-display text-xl font-bold text-white md:text-2xl">{size}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-brand-200">NB</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
