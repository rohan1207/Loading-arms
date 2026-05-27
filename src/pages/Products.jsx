import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import OptimizedImage from "../components/ui/OptimizedImage";
import { products } from "../constants/siteContent";
import { images } from "../constants/images";
import { PillButton } from "../components/ui/PillButton";
import { Reveal } from "../components/ui/Reveal";

export default function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div className="bg-[var(--bg-base)]">
      <PageHero
        badge="Our products"
        title="Loading Arm Systems"
        description="Top loading, bottom unloading, Test Aiders, and PTFE-lined specialty arms — engineered for safety, zero spillage, and decades of service."
        image={images.productsHero}
      />

      <div className="mx-auto max-w-[1400px] space-y-16 px-5 py-12 md:space-y-24 md:px-8 md:py-20 lg:px-10">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={product.id}>
              <section
                id={product.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)]"
              >
                <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`relative ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <OptimizedImage
                      src={product.image}
                      alt={product.title}
                      className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
                      imgClassName="lg:absolute lg:inset-0 lg:h-full"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                  <div className={`flex flex-col justify-center p-8 md:p-10 lg:p-12 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      Product {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                      {product.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">{product.overview}</p>
                    <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-brand-800">Key features</h3>
                    <ul className="mt-4 space-y-3">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-secondary)]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}

        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-brand-800 to-brand-900 px-8 py-12 text-center text-white md:px-16">
            <h3 className="font-display text-2xl font-bold md:text-3xl">Need a custom configuration?</h3>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              From 1 inch to 18 inch Test Aiders — we engineer to your exact application, MOC, and terminal requirements.
            </p>
            <PillButton to="/contact#enquiry" variant="primary" className="mt-8 bg-white px-8 py-3 text-brand-800 hover:bg-brand-50">
              Contact our team
            </PillButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
