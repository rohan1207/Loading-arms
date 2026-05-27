import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Gauge,
  Cog,
  Fuel,
  FlaskConical,
  Globe2,
  MapPin,
  Ruler,
  ArrowUpRight,
  Building2,
  Handshake,
} from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { clientHighlights, clientele, featuredProjects } from "../constants/siteContent";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal, SectionHeader } from "../components/ui/Reveal";
import { cn } from "../utils/cn";

const groupIcons = {
  gauge: Gauge,
  cog: Cog,
  fuel: Fuel,
  flask: FlaskConical,
  globe: Globe2,
};

const groupThemes = {
  "test-aiders": "from-brand-700 via-brand-800 to-brand-900",
  oem: "from-slate-700 via-slate-800 to-slate-900",
  refineries: "from-amber-600 via-orange-700 to-orange-800",
  chemicals: "from-emerald-600 via-emerald-700 to-teal-800",
  international: "from-indigo-600 via-indigo-700 to-indigo-900",
};

function parseClientEntry(entry) {
  const match = entry.match(/^(.+?)\s*\((.+)\)\s*$/);
  if (match) return { name: match[1].trim(), note: match[2].trim() };
  return { name: entry, note: null };
}

function ClientLogoCard({ client, index }) {
  return (
    <Reveal delay={index * 0.04}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group flex h-full flex-col"
      >
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all group-hover:border-brand-200 group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)]">
          <div className="flex h-[72px] w-full items-center justify-center md:h-[80px]">
            <img
              src={client.image}
              alt={client.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-wide text-slate-500 group-hover:text-brand-700">
          {client.name}
        </p>
      </motion.div>
    </Reveal>
  );
}

function ClientEntryCard({ name, note }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white p-4 shadow-sm transition-all hover:border-brand-200 hover:shadow-md">
      <p className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{name}</p>
      {note ? (
        <p className="mt-2 rounded-lg bg-brand-50 px-2.5 py-1.5 text-xs leading-relaxed text-brand-800">{note}</p>
      ) : null}
    </div>
  );
}

function ClientGroupSection({ group, index }) {
  const Icon = groupIcons[group.icon] || Building2;
  const gradient = groupThemes[group.id] || groupThemes["test-aiders"];
  const isInternational = group.id === "international";

  return (
    <Reveal delay={index * 0.05}>
      <section id={group.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[0_12px_48px_rgba(15,23,42,0.08)]">
        <div className="grid lg:grid-cols-[minmax(240px,300px)_1fr]">
          <div className={cn("bg-gradient-to-br p-8 text-white lg:p-10", gradient)}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-display text-xl font-bold leading-tight md:text-2xl">{group.title}</h2>
            <p className="mt-2 text-sm text-white/80">{group.subtitle}</p>
            <p className="mt-6 font-display text-4xl font-bold">
              {isInternational
                ? group.regions?.reduce((n, r) => n + r.clients.length, 0)
                : group.clients?.length}
              <span className="ml-2 text-sm font-medium text-white/70">partners</span>
            </p>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            {isInternational && group.regions ? (
              <div className="space-y-8">
                {group.regions.map((region) => (
                  <div key={region.name}>
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-brand-600" />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-800">
                        {region.name}
                      </h3>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {region.clients.map((client) => {
                        const { name, note } = parseClientEntry(client);
                        return <ClientEntryCard key={client} name={name} note={note} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {group.clients?.map((client) => {
                  const { name, note } = parseClientEntry(client);
                  return <ClientEntryCard key={client} name={name} note={note} />;
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default function Clients() {
  const [activeGroup, setActiveGroup] = useState(clientele[0].id);

  return (
    <div className="bg-[var(--bg-base)]">
      <PageHero
        badge="Our partners"
        title="Esteemed clientele & major projects"
        description="Pump manufacturers, refineries, OEM partners, and international terminals rely on Steelfab loading arms and Test Aiders."
        image={images.factory[1]}
      />

      {/* Floating stats */}
      <div className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-5 md:-mt-14 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:grid-cols-4 md:gap-0 md:divide-x md:divide-[var(--border)] md:p-0">
            {clientHighlights.map((item) => (
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

      {/* Logo wall */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Trusted brands"
            title="Industry leaders we work with"
            description="A selection of refineries, pump OEMs, and industrial partners across India."
          />

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {images.featuredClients.slice(0, 4).map((client, i) => (
              <ClientLogoCard key={client.name} client={client} index={i} />
            ))}
          </div>
          <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {images.featuredClients.slice(4).map((client, i) => (
              <ClientLogoCard key={client.name} client={client} index={i + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-y border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Case studies"
            title="Featured installations"
            description="Landmark Test Aider and loading arm projects — engineered and supplied from our Pune facility."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.client} delay={i * 0.08}>
                <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)]">
                  <div className="grid sm:grid-cols-[140px_1fr]">
                    <div className="relative flex min-h-[140px] items-center justify-center border-b border-[var(--border)] bg-white p-4 sm:border-b-0 sm:border-r">
                      <img
                        src={project.image}
                        alt={project.client}
                        className="max-h-20 max-w-full object-contain"
                        loading="lazy"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                        {project.type}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold">{project.client}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{project.detail}</p>
                      <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Ruler className="h-3.5 w-3.5 text-brand-600" />
                          {project.size}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-brand-600" />
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client categories */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Full directory"
            title="Browse by sector"
            description="From 18-inch Test Aiders for global pump OEMs to terminal loading arms for India's largest refineries."
          />

          {/* Quick nav */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {clientele.map((group) => {
                const Icon = groupIcons[group.icon] || Building2;
                return (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    onClick={() => setActiveGroup(group.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                      activeGroup === group.id
                        ? "border-brand-600 bg-brand-700 text-white shadow-md"
                        : "border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-brand-300 hover:text-brand-800"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {group.title.split(" ")[0]}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-12 space-y-8">
            {clientele.map((group, i) => (
              <ClientGroupSection key={group.id} group={group} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950">
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-14">
                  <Handshake className="h-10 w-10 text-brand-300" />
                  <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                    Partner with Steelfab Engineering
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-100 md:text-base">
                    From 6-inch to 18-inch Test Aiders and terminal loading arms — engineered, tested, and supplied across India and globally.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <PillButton to="/contact#enquiry" variant="primary" className="bg-white px-8 py-3 text-brand-800 hover:bg-brand-50">
                      Start a project
                    </PillButton>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      View products
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[240px] bg-slate-800 lg:min-h-[320px]">
                  <img
                    src={images.factory[3]}
                    alt="Steelfab facility"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-transparent lg:from-brand-900/90" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
