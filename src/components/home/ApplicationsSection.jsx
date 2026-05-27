import { Link } from "react-router-dom";
import {
  Fuel,
  Factory,
  Gauge,
  Plane,
  FlaskConical,
  Package,
  ArrowUpRight,
  MapPin,
  Ruler,
} from "lucide-react";
import { applications, featuredProjects } from "../../constants/siteContent";
import OptimizedImage from "../ui/OptimizedImage";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui/Reveal";
const iconMap = {
  fuel: Fuel,
  factory: Factory,
  gauge: Gauge,
  plane: Plane,
  flask: FlaskConical,
  package: Package,
};

export default function ApplicationsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Applications"
          title="Built for demanding industries"
          description="Oil terminals, refineries, pump OEMs, chemical plants, and export projects worldwide."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {applications.map((app) => {
            const Icon = iconMap[app.icon] || Factory;
            return (
              <StaggerItem key={app.title}>
                <div className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] p-5 transition-all hover:border-brand-300 hover:bg-brand-50/60 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white shadow-md transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="font-display text-base font-bold text-[var(--text-primary)]">{app.title}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Case studies</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                Featured projects
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[var(--text-secondary)] md:text-base">
                Major Test Aider and loading arm installations for India&apos;s leading pump OEMs and refineries.
              </p>
            </div>
            <Link
              to="/clients"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              All projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.client} delay={i * 0.08}>
                <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)]">
                  <div className="relative h-44 overflow-hidden border-b border-[var(--border)] bg-slate-50">
                    <OptimizedImage
                      src={project.image}
                      alt={project.client}
                      className="h-full"
                      imgClassName="object-contain p-5 group-hover:scale-[1.02]"
                    />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-brand-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                        {project.type}
                      </span>
                      <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-800 shadow-sm">
                        {project.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <h4 className="font-display text-lg font-bold text-[var(--text-primary)] md:text-xl">
                      {project.client}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{project.detail}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-brand-600" />
                        {project.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Ruler className="h-3.5 w-3.5 text-brand-600" />
                        {project.size} nominal bore
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
