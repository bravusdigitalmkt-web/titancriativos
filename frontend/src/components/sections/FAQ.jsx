import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Como funciona o Titan Criativos?",
    a: "Você envia fotos simples das peças da sua coleção. Nossa IA identifica cada produto e gera modelos hiper-realistas vestindo as peças, junto com vídeos, stories e legendas prontas para postar no Instagram.",
  },
  {
    q: "Preciso gravar vídeos ou contratar modelos?",
    a: "Não. Você não precisa de câmera, estúdio, modelo nem equipe. A inteligência artificial cuida de tudo, do shooting virtual até a edição final do conteúdo.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Entregamos o pacote completo em até 24 horas após o recebimento das fotos da sua coleção. Para projetos maiores, definimos um cronograma sob medida.",
  },
  {
    q: "Posso solicitar alterações no conteúdo?",
    a: "Sim. Todos os planos incluem ajustes de cenário, modelo, copy e cortes de vídeo. Trabalhamos até o conteúdo ficar exatamente do jeito que sua marca precisa.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#2563EB]">
            Perguntas frequentes
          </div>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-white">
            Tudo o que você precisa saber.
          </h2>
        </motion.div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map((it, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="font-display text-left text-base sm:text-lg font-medium text-white hover:no-underline py-6"
                >
                  {it.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="text-[#94A3B8] text-[15px] leading-relaxed pb-6"
                >
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
