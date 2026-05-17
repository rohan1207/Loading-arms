import { motion } from "framer-motion";
import { aboutStats, aboutTabs } from "../constants/aboutContent";
import { useAboutTab } from "../hooks/useAboutTab";
import { AboutPageSections } from "../components/about/AboutSections";
import { cn } from "../utils/cn";

export default function About() {
  const { activeTab, setActiveTab } = useAboutTab();

  return (
    <div className="bg-[var(--bg-base)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 pb-24 pt-[calc(var(--nav-height)+2rem)] text-white md:pb-32">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-8 lg:px-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            Steelfab Engineering Pvt. Ltd
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-brand-100 md:text-lg"
          >
            Leading manufacturer of loading arms, unloading systems & fluid handling solutions since 1995.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-16 max-w-[1400px] px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-5 text-center shadow-soft md:py-6"
            >
              <p className="font-display text-2xl font-bold text-brand-700 md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="sticky top-[var(--nav-height)] z-30 border-b border-[var(--border)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-2 px-5 py-4 md:px-8 lg:px-10">
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-semibold transition-all active:scale-[0.97]",
                activeTab === tab.id
                  ? "bg-brand-700 text-white shadow-md"
                  : "bg-[var(--bg-base)] text-[var(--text-secondary)] ring-1 ring-[var(--border)] hover:text-brand-800"
              )}
            >
              {tab.shortLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <AboutPageSections activeTab={activeTab} />
      </div>
    </div>
  );
}
