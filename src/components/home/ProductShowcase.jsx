import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "../../constants/siteContent";
import OptimizedImage from "../ui/OptimizedImage";
import { PillButton } from "../ui/PillButton";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui/Reveal";

export default function ProductShowcase() {
  const featured = products.find((p) => p.id === "test-aiders");
  const rest = products.filter((p) => p.id !== "test-aiders");

  return (
    <section className="bg-[var(--bg-base)] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Our products"
            title="Engineered loading arm systems"
            description="From petroleum terminals to 18-inch pump test beds — rigid piping that replaces hoses permanently."
            align="left"
            className="max-w-2xl text-left"
          />
          <PillButton to="/products" variant="primary" className="shrink-0 px-6 py-3 text-sm">
            All products
            <ArrowUpRight className="h-4 w-4" />
          </PillButton>
        </div>

        {featured && (
          <Reveal className="mb-6">
            <Link to={`/products#${featured.id}`} className="group relative block overflow-hidden rounded-3xl bg-steel-900 shadow-2xl">
              <OptimizedImage
                src={featured.image}
                alt={featured.title}
                className="aspect-[21/9] min-h-[280px]"
                imgClassName="opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-steel-900/95 via-steel-900/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 lg:max-w-xl">
                <span className="w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Featured · {featured.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-4xl">{featured.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{featured.overview}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                  Explore Test Aiders
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.1}>
          {rest.map((product) => (
            <StaggerItem key={product.id}>
              <Link
                to={`/products#${product.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(3,105,161,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={product.title}
                    className="aspect-[4/3]"
                    imgClassName="group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-800 backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:text-brand-800">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                    {product.overview}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    View details <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
