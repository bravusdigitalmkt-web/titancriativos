import { Instagram, MessageCircle, Mail } from "lucide-react";
import {
  BRAND,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  EMAIL,
  EMAIL_HREF,
  NAV_LINKS,
  LOGO_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/5 pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src={LOGO_URL}
                alt="Titan Criativos"
                className="h-10 w-10 rounded-full ring-1 ring-[#2563EB]/40 shadow-[0_0_20px_rgba(37,99,235,0.35)]"
              />
              <span className="font-display text-[15px] font-semibold tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-5 text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Plataforma de IA para lojas de moda. Transformamos fotos em
              conteúdo profissional que vende — Goiânia · Região da 44.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                aria-label="WhatsApp"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href={EMAIL_HREF}
                data-testid="footer-email"
                aria-label="Email"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
              >
                <Mail size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#64748B]">
              Navegar
            </div>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-nav-${l.href.replace("#", "")}`}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#64748B]">
              Contato
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[#94A3B8]">
              <li>
                <a
                  href={EMAIL_HREF}
                  data-testid="footer-email-link"
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp-link"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp · Atendimento
                </a>
              </li>
              <li>Goiânia · Região da 44, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <a
              href="#"
              data-testid="footer-privacy"
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              data-testid="footer-terms"
              className="hover:text-white transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
