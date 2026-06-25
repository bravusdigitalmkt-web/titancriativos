import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const BG_IMAGE = "https://images.pexels.com/photos/30713515/pexels-photo-30713515.jpeg";

export default function FinalCTA() {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]">
          {/* BG image */}
          <div className="absolute inset-0">
            <img
              src={BG_IMAGE}
              alt="Modelo profissional vestindo conteúdo Titan"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/85 to-[#09090B]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 sm:p-14 lg:p-20 min-h-[420px] items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#60A5FA]">
                Pronta para escalar
              </div>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-white max-w-2xl">
                Sua loja merece <span className="text-gradient">vender mais.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#CBD5E1] max-w-xl">
                Veja como a Titan pode transformar suas fotos em conteúdo
                profissional e fazer sua marca dominar o feed.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="final-cta-button"
                  className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-[#09090B] hover:bg-white/90 text-[15px] font-semibold tracking-tight transition-all duration-200 shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
                >
                  Solicitar Demonstração
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#pricing"
                  data-testid="final-cta-secondary"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 text-white text-[15px] font-medium tracking-tight transition-all duration-200 backdrop-blur"
                >
                  Ver planos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
