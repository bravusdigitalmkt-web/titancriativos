import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const BEFORE_AFTER_IMAGE =
  "https://customer-assets.emergentagent.com/job_titan-creator-ai/artifacts/x29dh5ox_image.png";

export default function BeforeAfter() {
  return (
    <section
      id="exemplo"
      data-testid="before-after-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#60A5FA]">
              Antes & Depois
            </div>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.05] text-white">
              Da foto do produto
              <br />
              ao{" "}
              <span className="text-blue-glow text-[#60A5FA]">conteúdo</span>{" "}
              <span className="text-blue-glow text-[#60A5FA]">que vende.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-md">
              Nossa IA transforma fotos simples em imagens profissionais com
              modelos reais e cenários que{" "}
              <span className="text-[#60A5FA]">destacam sua marca.</span>
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 max-w-sm">
              {[
                { k: "Modelo", v: "Hiper-realista" },
                { k: "Cenário", v: "Sob medida" },
                { k: "Entrega", v: "24h" },
                { k: "Edição", v: "Inclusa" },
              ].map((it) => (
                <div
                  key={it.k}
                  className="rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur px-4 py-3"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
                    {it.k}
                  </div>
                  <div className="mt-1 text-sm text-white">{it.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Blue glow halo */}
            <div className="absolute -inset-6 bg-[#2563EB]/20 blur-3xl rounded-3xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden border border-[#2563EB]/30 bg-[#0B1220] border-shine">
              {/* Header labels */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white">
                <span className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-black/40 backdrop-blur border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  Foto do produto
                </span>
                <span className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-[#2563EB]/20 backdrop-blur border border-[#2563EB]/40 text-[#BFDBFE]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
                  Gerado com IA
                </span>
              </div>

              <div className="relative aspect-[16/10]">
                <img
                  src={BEFORE_AFTER_IMAGE}
                  alt="Antes e depois — foto do produto transformada em conteúdo com IA"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Subtle blue glow on right side */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#2563EB]/10 to-transparent" />

                {/* Center chevron animated */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#0B1220] border border-[#2563EB] flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                  >
                    <ChevronRight className="text-[#2563EB]" size={28} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
