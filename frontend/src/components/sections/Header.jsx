import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#09090B]/75 border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-2 group"
        >
          <div className="relative h-8 w-8 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/40 to-transparent" />
            <span className="relative font-display text-sm font-bold tracking-tight">T</span>
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight text-white group-hover:text-white/90">
            {BRAND.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`header-nav-${l.href.replace("#", "")}`}
              className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-cta-button"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium tracking-tight transition-colors duration-200 shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
          >
            Solicitar Demonstração
          </a>
          <button
            data-testid="header-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/10 text-white"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#09090B]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`header-mobile-nav-${l.href.replace("#", "")}`}
                className="text-base text-[#94A3B8] hover:text-white py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-mobile-cta-button"
              className="mt-2 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium"
            >
              Solicitar Demonstração
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
