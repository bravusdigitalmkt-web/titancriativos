import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  Film,
  CircleDot,
  GalleryHorizontalEnd,
  Type,
  Mic2,
  Compass,
  CalendarRange,
} from "lucide-react";

const SERVICES = [
  { icon: ImageIcon, title: "Imagens IA", desc: "Fotos profissionais geradas por IA com seus produtos." },
  { icon: Film, title: "Reels para Instagram", desc: "Vídeos verticais editados, prontos para viralizar." },
  { icon: CircleDot, title: "Stories", desc: "Pacotes diários de stories que convertem em vendas." },
  { icon: GalleryHorizontalEnd, title: "Carrosséis", desc: "Carrosséis editoriais com storytelling de marca." },
  { icon: Type, title: "Copywriting", desc: "Legendas, hooks e CTAs escritos para o seu público." },
  { icon: Mic2, title: "Voice Over", desc: "Narrações com vozes premium em PT-BR." },
  { icon: Compass, title: "Estratégia de conteúdo", desc: "Pilares de marca, posicionamento e funil." },
  { icon: CalendarRange, title: "Calendário de conteúdo", desc: "Planejamento mensal entregue por escrito." },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2563EB]">
              Serviços
            </div>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-white">
              Tudo o que sua loja precisa para vender online.
            </h2>
          </div>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-md">
            Um único pacote, oito serviços. Produzimos um mês inteiro de
            conteúdo enquanto você foca em vender.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const highlight = i === 0 || i === 3;
            return (
              <motion.div
                key={s.title}
                data-testid={`services-card-${i}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  highlight
                    ? "bg-gradient-to-br from-[#111827] to-[#0B1220] border-white/10 hover:border-[#2563EB]/40"
                    : "bg-[#111827] border-white/8 hover:border-white/20"
                }`}
              >
                <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#2563EB]/40 transition-colors">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="mt-6 font-display text-base font-medium tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
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
