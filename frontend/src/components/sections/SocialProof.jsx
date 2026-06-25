import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { label: "Lojas de moda", value: 15000, suffix: "+", format: (n) => n.toLocaleString("pt-BR") },
  { label: "Entrega média", value: 24, suffix: "h" },
  { label: "Vídeos por mês", value: 12, suffix: "" },
  { label: "Satisfação", value: 98, suffix: "%" },
];

function Counter({ to, format, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {format ? format(val) : val}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section
      data-testid="metrics-section"
      className="relative py-20 lg:py-28 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2563EB]">
            Resultados em escala
          </div>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Confiança de quem realmente vende moda.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              data-testid={`metrics-card-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-[#09090B] p-8 lg:p-10 flex flex-col items-start"
            >
              <div className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-white">
                <Counter to={m.value} format={m.format} suffix={m.suffix} />
              </div>
              <div className="mt-3 text-sm text-[#94A3B8]">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
