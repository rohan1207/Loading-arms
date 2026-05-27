import { motion } from "framer-motion";
import { Cog, ShieldCheck } from "lucide-react";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { Reveal, SectionHeader } from "../ui/Reveal";

const facilityLabels = [
  "CNC machining bay",
  "Fabrication shop",
  "Assembly & testing",
  "Quality inspection",
  "Finished systems",
];

export default function ManufacturingGallery() {
  return (
    <section className="overflow-hidden bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <SectionHeader
          theme="dark"
          eyebrow="Manufacturing"
          title="World-class fabrication in Pune"
          description="CNC machining, in-house testing, and Kaizen-driven production — 3128 m² of precision engineering capacity."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              ISO 9001:2015 certified
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <Cog className="h-4 w-4 text-brand-300" />
              In-house design & testing
            </span>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {images.factory.map((src, i) => (
            <Reveal key={src} delay={i * 0.06} className="w-[72vw] shrink-0 snap-center md:w-auto">
              <motion.div whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl border border-white/10">
                <OptimizedImage
                  src={src}
                  alt={facilityLabels[i] || `Manufacturing ${i + 1}`}
                  className="aspect-[3/4] md:aspect-[4/5]"
                  imgClassName="group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    {facilityLabels[i] || `Facility ${i + 1}`}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-300">Pune, Maharashtra</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
