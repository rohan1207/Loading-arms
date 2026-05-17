import { motion } from "framer-motion";
import { Building2, Award } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { clientsList } from "../constants/sitePages";
import { PillButton } from "../components/ui/PillButton";

export default function Clients() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[var(--bg-base)]">
      <PageHero
        badge="Trusted partnerships"
        title="Our Clients"
        description="Serving leading oil & gas, petrochemical, defence and industrial organizations across India and worldwide."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-20 lg:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Steelfab Engineering Pvt. Ltd. is proud to supply loading arms, unloading systems, swivel joints and
            related equipment to prestigious clients who demand reliability, safety and compliance with international
            standards.
          </p>
          <PillButton to="/enquiry" variant="primary" className="px-6 py-3">
            Become a partner
          </PillButton>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientsList.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-soft"
            >
              <Building2 className="h-8 w-8 text-brand-600" />
              <h3 className="mt-4 font-display text-lg font-bold text-[var(--text-primary)]">{client.name}</h3>
              <p className="mt-1 text-sm text-brand-700">{client.sector}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 px-6 py-8 text-center md:px-12">
          <Award className="mx-auto h-10 w-10 text-brand-700" />
          <h3 className="mt-4 font-display text-xl font-bold text-brand-900">ISO 9001:2015 Certified Supplier</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-brand-800">
            Consistent quality and on-time delivery have earned SEPL long-term relationships with India&apos;s leading
            energy and industrial companies.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
