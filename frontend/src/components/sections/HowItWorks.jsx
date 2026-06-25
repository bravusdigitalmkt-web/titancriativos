import { motion } from "framer-motion";
import { Upload, Brain, UserSquare2, Sparkles, PackageCheck } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Upload,
    title: "Envie a foto do produto",
    desc: "Suba uma simples foto da sua peça. Nenhum equipamento, nenhum estúdio.",
  },
  {
    n: "02",
    icon: Brain,
    title: "IA entende a peça",
    desc: "Nosso modelo identifica corte, tecido, cor e estilo da peça com precisão.",
  },
  {
    n: "03",
    icon: UserSquare2,
    title: "Gera modelo vestindo",
    desc: "Modelos hiper-realistas vestindo seu produto, em cenários sob medida.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Gera conteúdo para Instagram",
    desc: "Reels, carrosséis, stories e copywriting prontos para postar.",
  },
  {
    n: "05",
    icon: PackageCheck,
    title: "Receba conteúdo pronto",
    desc: "Pacote completo entregue em até 24h. Pronto para vender.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      data-testid="how-it-works-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      {/* Subtle blueprint texture */}
      <div className="absolute inset-0 bg-dot opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2563EB]">
            Como funciona
          </div>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-white">
            Da foto à venda em <span className="text-gradient">5 etapas.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Um pipeline de IA construído sob medida para o varejo de moda. Sem
            câmera, sem estúdio, sem produção. Apenas resultado.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                data-testid={`how-it-works-step-${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group relative rounded-2xl bg-[#111827] border border-white/8 p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 blur-2xl transition-all duration-500" />
                <div className="relative flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#64748B]">
                    {s.n}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-lg font-medium tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm text-[#94A3B8] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
