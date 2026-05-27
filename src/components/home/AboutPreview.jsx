import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { aboutSummary } from "../../constants/siteContent";
import { images } from "../../constants/images";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui/Reveal";

export default function AboutPreview() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-3">
              <OptimizedImage src={images.factory[1]} alt="Manufacturing facility" className="col-span-2 aspect-[16/9] rounded-2xl" />
              <OptimizedImage src={images.factory[2]} alt="Engineering workshop" className="aspect-square rounded-2xl" />
              <OptimizedImage src={images.factory[3]} alt="Quality inspection" className="aspect-square rounded-2xl" />
            </div>
          </Reveal>

          <div>
            <SectionHeader
              eyebrow="About SEPL"
              title={aboutSummary.title}
              description={aboutSummary.lead}
              align="left"
            />

            <Stagger className="mt-8 grid grid-cols-2 gap-3" stagger={0.06}>
              {aboutSummary.highlights.map((h) => (
                <StaggerItem key={h.label}>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-4">
                    <p className="font-display text-xl font-bold text-brand-800">{h.value}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                      {h.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <ul className="mt-6 space-y-2">
              {aboutSummary.pillars.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {p}
                </li>
              ))}
            </ul>

            <PillButton to="/about" variant="outline" className="mt-8 px-6 py-3 text-sm">
              Discover our story
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
