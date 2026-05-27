import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";
import { Reveal, SectionHeader } from "../ui/Reveal";

function ClientLogoCard({ client, index }) {
  return (
    <Reveal delay={index * 0.05}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="group flex h-full flex-col"
      >
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:border-brand-200 group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)]">
          <div className="flex h-[72px] w-full items-center justify-center md:h-[80px]">
            <img
              src={client.image}
              alt={client.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-wide text-slate-500 transition-colors group-hover:text-brand-700">
          {client.name}
        </p>
      </motion.div>
    </Reveal>
  );
}

export default function ClientsStrip() {
  const clients = images.featuredClients;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-[var(--bg-base)] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Our clientele"
          title="Trusted by industry leaders"
          description="Refineries, pump OEMs, fertilizer majors, and defense organizations across India — plus international terminal operators."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {clients.slice(0, 4).map((client, i) => (
            <ClientLogoCard key={client.name} client={client} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5">
          {clients.slice(4).map((client, i) => (
            <ClientLogoCard key={client.name} client={client} index={i + 4} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <p className="text-center text-sm text-slate-500 sm:text-left">
              <span className="font-semibold text-slate-700">50+</span> domestic & international partners
              <span className="mx-2 hidden text-slate-300 sm:inline">·</span>
              <span className="mt-1 block sm:mt-0 sm:inline">ITT · Flowserve · Kirloskar · John Crane & more</span>
            </p>
            <Link
              to="/clients"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-brand-800 shadow-sm transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-md"
            >
              View full client list
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
