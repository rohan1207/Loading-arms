import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Droplets, RotateCw, Gauge } from "lucide-react";
import { whyChooseUs } from "../../constants/siteContent";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { Reveal, SectionHeader } from "../ui/Reveal";

const icons = [Shield, Droplets, RotateCw, Gauge];

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-base)] py-20 md:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <SectionHeader eyebrow="Core value" title={whyChooseUs.title} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left" className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <OptimizedImage src={images.factory[0]} alt="Steelfab loading arm manufacturing" className="aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-200">SF-Series swivel joints</p>
                <p className="mt-1 font-display text-xl font-bold md:text-2xl">Torque-free 360° rotation</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/20 bg-brand-700 px-5 py-4 text-white shadow-xl md:block"
            >
              <p className="font-display text-2xl font-bold">18&quot;</p>
              <p className="text-xs text-brand-100">Max Test Aider size</p>
            </motion.div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.items.map((item, i) => {
              const Icon = icons[i] || Shield;
              return (
                <Reveal key={item.title} delay={i * 0.08} direction="right">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(3,105,161,0.12)" }}
                    className="group h-full rounded-2xl border border-[var(--border)] bg-white p-5 shadow-soft transition-colors hover:border-brand-200 md:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-[var(--text-primary)] md:text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
