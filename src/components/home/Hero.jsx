import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HeroModelViewer from "./HeroModelViewer";
import { PillButton } from "../ui/PillButton";

const stats = [
  { value: "1995", label: "Established" },
  { value: "3128 m²", label: "Facility" },
  { value: "ISO 9001", label: "Certified" },
  { value: "₹10 Cr", label: "Sales volume" },
];

export default function Hero() {
  return (
    <section className="relative flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[var(--bg-surface)]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="absolute -right-24 top-0 h-[55%] w-[45%] rounded-full bg-brand-100/80 blur-3xl" />
        <motion.div className="absolute -left-16 bottom-0 h-[40%] w-[35%] rounded-full bg-slate-200/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(#e2e8f0 1px, transparent 1px),
              linear-gradient(90deg, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 70% at 60% 40%, black 10%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pb-4 pt-[var(--nav-height)] md:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-10 lg:pb-6">
        <div className="flex min-h-0 flex-1 flex-col justify-center lg:max-w-[56%]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Pune, Maharashtra · Global exports
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {["Precision", "fluid", "handling", "systems."].map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.25em] inline-block"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <span className={i === 1 ? "text-brand-700" : ""}>{word}</span>
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-secondary)] md:mt-4 md:max-w-lg md:text-[15px] md:leading-7"
          >
            Steelfab Engineering Pvt. Ltd — manufacturer of loading arms, unloading systems, swivel joints
            and storage solutions since 1995. ISO certified, engineered in India, trusted worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mt-5 flex flex-wrap items-center gap-3 md:mt-6"
          >
            <PillButton to="/products" variant="primary" className="px-6 py-3 text-sm">
              Explore products
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
            <PillButton to="/about#introduction" variant="outline" className="px-6 py-3 text-sm">
              About SEPL
            </PillButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex flex-wrap items-stretch gap-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] md:mt-6"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`min-w-[calc(50%-0px)] flex-1 px-3 py-2.5 sm:min-w-0 sm:px-4 sm:py-3 ${
                  i > 0 ? "border-l border-[var(--border)]" : ""
                }`}
              >
                <p className="font-display text-base font-bold text-[var(--text-primary)] sm:text-lg">{stat.value}</p>
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
