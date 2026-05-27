import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Cog,
  Factory,
  Globe2,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import PageHero from "../components/layout/PageHero";
import OptimizedImage from "../components/ui/OptimizedImage";
import { aboutSummary, company, whyChooseUs } from "../constants/siteContent";
import {
  aboutStats,
  introductionContent,
  manufacturingContent,
  qualityContent,
} from "../constants/aboutContent";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../components/ui/Reveal";
import { cn } from "../utils/cn";

const capabilityIcons = [Cog, Sparkles, Wrench, Users];

function BentoGallery() {
  const [main, topRight, midRight, ...rest] = images.factory;

  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4">
      <Reveal className="col-span-12 md:col-span-7 md:row-span-2">
        <div className="group relative h-[260px] overflow-hidden rounded-2xl md:h-full md:min-h-[340px]">
          <OptimizedImage
            src={main}
            alt="SEPL main manufacturing facility"
            className="h-full"
            imgClassName="group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Hadapsar, Pune
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="col-span-6 md:col-span-5">
        <div className="group relative h-[140px] overflow-hidden rounded-2xl md:h-[164px]">
          <OptimizedImage src={topRight} alt="CNC machining" className="h-full" imgClassName="group-hover:scale-105" />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="col-span-6 md:col-span-5">
        <div className="group relative h-[140px] overflow-hidden rounded-2xl md:h-[164px]">
          <OptimizedImage src={midRight} alt="Assembly floor" className="h-full" imgClassName="group-hover:scale-105" />
        </div>
      </Reveal>

      {rest.map((src, i) => (
        <Reveal key={src} delay={0.12 + i * 0.04} className="col-span-4">
          <div className="group relative h-[120px] overflow-hidden rounded-2xl md:h-[130px]">
            <OptimizedImage src={src} alt={`Facility ${i + 4}`} className="h-full" imgClassName="group-hover:scale-105" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[var(--bg-base)]">
      <PageHero
        badge="About SEPL"
        title="Steelfab Engineering Pvt. Ltd."
        description="ISO 9001:2015 certified manufacturer of loading arms, unloading systems, Test Aiders & fluid handling solutions since 1995."
        image={images.about}
      />

      {/* Floating stats */}
      <div className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-5 md:-mt-14 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:grid-cols-4 md:gap-0 md:divide-x md:divide-[var(--border)] md:p-0">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 text-center md:py-6">
                <p className="font-display text-2xl font-bold text-brand-800 md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Intro + bento */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <BentoGallery />

            <div>
              <SectionHeader
                eyebrow="Our story"
                title={aboutSummary.title}
                description={aboutSummary.lead}
                align="left"
                className="!mx-0 !max-w-none !text-left"
              />

              <ul className="mt-8 space-y-3">
                {aboutSummary.pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-secondary)] shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {pillar}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {introductionContent.highlights.map((h) => (
                  <span
                    key={h.title}
                    className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-800"
                  >
                    {h.title}: {h.detail.split("—")[0].trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story blocks — numbered cards */}
      <section className="border-y border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Who we are"
            title="Three decades of fluid handling excellence"
            description="From Pune to global terminals — engineering systems that eliminate hoses, reduce spillage, and keep operators safe."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {introductionContent.storyBlocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.08}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] p-8 transition-shadow hover:shadow-lg">
                  <span className="font-display text-5xl font-bold text-brand-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-[var(--text-primary)]">{block.title}</h3>
                  <ul className="mt-5 flex-1 space-y-3">
                    {block.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — dark band */}
      <section className="bg-slate-900 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader
            theme="dark"
            eyebrow="Manufacturing"
            title="Built for precision & scale"
            description={manufacturingContent.lead}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {manufacturingContent.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[i] || Cog;
              return (
                <Reveal key={cap.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">{cap.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{cap.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {manufacturingContent.processSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  <Factory className="h-4 w-4 shrink-0 text-brand-300" />
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Product range + industries */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Portfolio"
                title="What we manufacture"
                align="left"
                className="!mx-0 !max-w-none !text-left"
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {introductionContent.products.map((product) => (
                  <span
                    key={product}
                    className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-xs font-medium text-[var(--text-secondary)] shadow-sm transition-colors hover:border-brand-300 hover:text-brand-800"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Industries"
                title="Where our systems operate"
                align="left"
                className="!mx-0 !max-w-none !text-left"
              />
              <Stagger className="mt-8 grid grid-cols-2 gap-3" stagger={0.05}>
                {qualityContent.industries.map((industry) => (
                  <StaggerItem key={industry}>
                    <div className="flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-md">
                      <Globe2 className="h-4 w-4 shrink-0 opacity-80" />
                      {industry}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader eyebrow="Leadership" title="Guided by experienced directors" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {introductionContent.directors.map((director, i) => (
              <Reveal key={director.name} delay={i * 0.08}>
                <div className="flex gap-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] p-6 md:p-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-700 font-display text-2xl font-bold text-white">
                    {director.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{director.role}</p>
                    <h3 className="mt-1 font-display text-xl font-bold">{director.name}</h3>
                    <p className="mt-2 flex gap-2 text-sm text-[var(--text-secondary)]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {director.address}
                    </p>
                    {director.phone ? (
                      <a
                        href={`tel:${director.phone.replace(/\s/g, "")}`}
                        className="mt-2 inline-block text-sm font-semibold text-brand-700 hover:underline"
                      >
                        {director.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {introductionContent.clients.map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--text-secondary)]"
                >
                  {client}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality policy */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-12 text-white md:px-14 md:py-16">
              <Quote className="h-10 w-10 text-brand-300 opacity-60" />
              <p className="mt-6 max-w-3xl font-display text-2xl font-bold leading-snug md:text-3xl">
                {introductionContent.qualityPolicy}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  <Award className="h-4 w-4 text-brand-200" />
                  NSIC Registered
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="border-t border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <SectionHeader eyebrow="Why Steelfab" title={whyChooseUs.title} />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whyChooseUs.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] p-6 shadow-soft md:p-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
                    <Award className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[220px] lg:min-h-[280px]">
                  <OptimizedImage
                    src={images.factory[4]}
                    alt="Contact SEPL"
                    className="absolute inset-0 h-full"
                    imgClassName="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-900/40" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Partner with us</p>
                  <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                    Ready to engineer your loading arm solution?
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    {company.legalName} · {company.address.city}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <PillButton to="/contact#enquiry" variant="primary" className="px-8 py-3">
                      Get a quote
                    </PillButton>
                    <Link
                      to="/products"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
                      )}
                    >
                      View products
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
