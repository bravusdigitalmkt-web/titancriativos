import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_titan-creator-ai/artifacts/4qkgubqz_Brazilian_women%27s_fashion_store._Beautiful_202606251528%20%283%29.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur"
              data-testid="hero-badge"
            >
              <Sparkles size={14} className="text-[#2563EB]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#94A3B8]">
                IA para lojas de moda
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] text-white"
              data-testid="hero-headline"
            >
              Transformamos fotos
              <br />
              dos seus produtos em{" "}
              <span className="text-gradient">conteúdo que vende.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed"
              data-testid="hero-subheadline"
            >
              Envie apenas as fotos da sua coleção. Nossa inteligência artificial
              cria imagens, vídeos, legendas e campanhas prontas para Instagram.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] font-medium tracking-tight transition-all duration-200 shadow-[0_10px_40px_rgba(37,99,235,0.35)] hover:shadow-[0_14px_50px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
              >
                Solicitar Demonstração
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#how"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-white text-[15px] font-medium tracking-tight transition-all duration-200"
              >
                Ver Como Funciona
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-12 flex items-center gap-6 text-xs text-[#64748B]"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                <span className="font-mono uppercase tracking-[0.18em]">
                  Entrega em 24h
                </span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="font-mono uppercase tracking-[0.18em]">
                Goiânia · Região da 44
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#111827]">
              <img
                src={HERO_IMAGE}
                alt="Modelo feminina em boutique brasileira premium"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "60% center" }}
                loading="eager"
              />
              {/* Image fade-out gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/40 via-transparent to-transparent" />

              {/* Floating chip */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                    titan.ai · live
                  </span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1 h-7 px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                    v3.2
                  </span>
                </div>
              </div>

              {/* Bottom card overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
                      Moda feminina · gerado por IA
                    </div>
                    <div className="mt-1 font-display text-xl font-semibold text-white">
                      12 vídeos · 24 stories
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center">
                    <Sparkles size={16} className="text-[#60A5FA]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative side card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden lg:flex absolute -left-10 top-1/3 flex-col gap-2 rounded-2xl bg-[#111827]/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
                IA · provador virtual
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                Renderizando look #41
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
