import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HeroModelViewer from "./HeroModelViewer";
import { PillButton } from "../ui/PillButton";
import { heroContent } from "../../constants/siteContent";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[var(--bg-surface)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-[55%] w-[45%] rounded-full bg-brand-100/80 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-[40%] w-[35%] rounded-full bg-slate-200/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 70% at 60% 40%, black 10%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pb-8 pt-[var(--nav-height)] md:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:pb-12">
        <div className="flex flex-1 flex-col justify-center lg:max-w-[58%]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Steelfab Engineering · Pune, India
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(1.65rem,4.2vw,3rem)] font-bold leading-[1.12] tracking-tight text-[var(--text-primary)]"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-[15px] md:leading-7"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <PillButton to="/products" variant="primary" className="px-6 py-3 text-sm">
              Our products
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
            <PillButton to="/contact#enquiry" variant="outline" className="px-6 py-3 text-sm">
              Get a quote
            </PillButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4"
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--bg-base)] px-3 py-3 sm:px-4 sm:py-3.5">
                <p className="font-display text-base font-bold text-brand-800 sm:text-lg">{stat.value}</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--text-muted)] sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <HeroModelViewer />
      </div>
    </section>
  );
}
