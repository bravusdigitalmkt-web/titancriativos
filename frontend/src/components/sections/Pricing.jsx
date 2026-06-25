import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const TIERS = [
  {
    name: "START",
    price: "R$497",
    desc: "Para lojas que estão começando online.",
    videos: "8 vídeos",
    features: [
      "8 vídeos no mês",
      "12 imagens IA",
      "Copywriting incluso",
      "Entrega em 24h",
    ],
    highlight: false,
  },
  {
    name: "TITAN",
    price: "R$697",
    desc: "Nosso plano mais popular. Equilíbrio perfeito.",
    videos: "12 vídeos",
    features: [
      "12 vídeos no mês",
      "24 imagens IA",
      "Stories + Carrosséis",
      "Copywriting + Voice Over",
      "Calendário de conteúdo",
      "Entrega em 24h",
    ],
    highlight: true,
    badge: "Mais popular",
  },
  {
    name: "SCALE",
    price: "R$997",
    desc: "Para marcas que querem dominar o feed.",
    videos: "20 vídeos",
    features: [
      "20 vídeos no mês",
      "40 imagens IA",
      "Stories + Carrosséis ilimitados",
      "Estratégia + Calendário",
      "Atendimento prioritário",
      "Entrega em 24h",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2563EB]">
            Planos
          </div>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-white">
            Investimento que <span className="text-gradient">paga em uma venda.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#94A3B8]">
            Sem fidelidade. Sem complicação. Cancele quando quiser.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              data-testid={`pricing-tier-${t.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                t.highlight
                  ? "bg-gradient-to-b from-[#111827] to-[#0B1220] border border-[#2563EB]/50 lg:scale-[1.03] glow-pulse"
                  : "bg-[#111827] border border-white/8 hover:border-white/20"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-[#2563EB] text-white font-mono text-[10px] uppercase tracking-[0.2em] shadow-[0_8px_30px_rgba(37,99,235,0.4)]">
                    {t.badge}
                  </span>
                </div>
              )}

              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#94A3B8]">
                {t.name}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold tracking-[-0.035em] text-white">
                  {t.price}
                </span>
                <span className="text-sm text-[#64748B]">/mês</span>
              </div>
              <p className="mt-3 text-sm text-[#94A3B8] min-h-[3rem]">
                {t.desc}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                className={`mt-8 inline-flex w-full items-center justify-center h-12 px-6 rounded-full text-[15px] font-medium tracking-tight transition-all duration-200 ${
                  t.highlight
                    ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)]"
                    : "bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white"
                }`}
              >
                Solicitar Demonstração
              </a>

              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <span
                      className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                        t.highlight ? "bg-[#2563EB]/20" : "bg-white/[0.06]"
                      }`}
                    >
                      <Check
                        size={11}
                        className={t.highlight ? "text-[#60A5FA]" : "text-white"}
                      />
                    </span>
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
