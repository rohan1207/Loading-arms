import { motion } from "framer-motion";

export default function PageHero({ badge, title, description }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 pb-20 pt-[calc(var(--nav-height)+2rem)] text-white md:pb-28">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-8 lg:px-10">
        {badge ? (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            {badge}
          </motion.span>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-display text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-brand-100 md:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
