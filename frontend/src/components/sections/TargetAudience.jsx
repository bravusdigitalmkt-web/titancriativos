import { motion } from "framer-motion";
import { Shirt, ShoppingBag, Footprints, Briefcase, Store, User } from "lucide-react";

const SEGMENTS = [
  { icon: User, label: "Moda Feminina" },
  { icon: Shirt, label: "Moda Masculina" },
  { icon: Footprints, label: "Calçados" },
  { icon: ShoppingBag, label: "Acessórios" },
  { icon: Briefcase, label: "Atacado" },
  { icon: Store, label: "Varejo" },
];

export default function TargetAudience() {
  return (
    <section
      data-testid="audience-section"
      className="relative py-20 lg:py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#60A5FA]">
            Para quem é
          </div>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
            Ideal para lojas de:
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 lg:gap-4">
          {SEGMENTS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                data-testid={`audience-card-${i}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-white/8 bg-[#0B1220]/60 backdrop-blur px-4 py-6 lg:py-8 flex flex-col items-center text-center hover:border-[#2563EB]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -inset-x-10 -top-10 h-24 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/15 blur-2xl transition-all duration-500" />
                <div className="relative h-12 w-12 rounded-xl border border-[#2563EB]/30 bg-[#2563EB]/10 flex items-center justify-center">
                  <Icon size={22} className="text-[#60A5FA]" strokeWidth={1.5} />
                </div>
                <div className="relative mt-4 font-display text-xs sm:text-sm font-medium tracking-tight text-white uppercase">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
