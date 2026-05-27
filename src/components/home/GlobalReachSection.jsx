import { globalHighlights } from "../../constants/siteContent";
import { PillButton } from "../ui/PillButton";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui/Reveal";
import { Globe2, MapPin, Ship } from "lucide-react";

export default function GlobalReachSection() {
  return (
    <section className="bg-[var(--bg-base)] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Global presence"
          title="Exporting loading arms worldwide"
          description="Engineered in Pune, Maharashtra — delivered to terminals, refineries, and pump OEMs across the Middle East, Africa, Asia-Pacific, and beyond."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-6 rounded-2xl border border-[var(--border)] bg-white px-6 py-5 shadow-soft">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Globe2 className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-brand-800">20+</p>
                <p className="text-sm text-[var(--text-secondary)]">Countries & regions served</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-[var(--border)] sm:block" />
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                <Ship className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-brand-800">1995</p>
                <p className="text-sm text-[var(--text-secondary)]">Exporting since establishment</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {globalHighlights.map((item) => (
            <StaggerItem key={item.region}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="text-right">
                    <p className="font-display text-3xl font-bold text-brand-800">{item.count}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      {item.unit}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-[var(--text-primary)]">{item.region}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <PillButton to="/clients" variant="primary" className="px-8 py-3">
            See international clients
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}
