"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Start" },
  { href: "#services", label: "Leistungen" },
  { href: "#about", label: "Über uns" },
  { href: "#projects", label: "Projekte" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll("section[id]");
      const pos = window.scrollY + 120;
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(el.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkColor = scrolled ? "text-gray-500 hover:text-gray-900" : "text-white/75 hover:text-white";
  const logoColor = scrolled ? "text-gray-900" : "text-white";
  const subColor = scrolled ? "text-[#a07c30]" : "text-[#C9A84C]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
      scrolled ? "bg-white/97 backdrop-blur-xl border-b border-black/8 shadow-sm py-3.5" : "py-6"
    }`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
            <polygon points="18,2 34,32 2,32" fill="none" stroke="#C9A84C" strokeWidth="2.5"/>
            <line x1="18" y1="12" x2="18" y2="32" stroke="#C9A84C" strokeWidth="1.5"/>
          </svg>
          <div className="flex flex-col">
            <span className={`text-[1.1rem] font-black tracking-[4px] leading-none transition-colors duration-400 ${logoColor}`}>
              BERISHA
            </span>
            <span className={`text-[0.55rem] tracking-[2px] uppercase transition-colors duration-400 ${subColor}`}>
              Bauunternehmen
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className={`text-[0.78rem] font-semibold tracking-[1.5px] uppercase transition-colors relative group ${navLinkColor} ${
                  activeSection === l.href.slice(1) ? (scrolled ? "text-gray-900" : "text-white") : ""
                }`}>
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#C9A84C] transition-all duration-400 ${
                  activeSection === l.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}/>
              </a>
            </li>
          ))}
          <li>
            <a href="#contact"
              className={`text-[0.78rem] font-semibold tracking-[1.5px] uppercase px-5 py-2 rounded border transition-all duration-200 ${
                scrolled
                  ? "text-[#a07c30] border-[#C9A84C]/30 hover:bg-[#C9A84C] hover:text-gray-900 hover:border-[#C9A84C]"
                  : "text-[#C9A84C] border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-gray-900"
              }`}>
              Kontakt
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
          <span className={`block w-6 h-0.5 transition-all duration-400 ${scrolled ? "bg-gray-900" : "bg-white"} ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}/>
          <span className={`block w-6 h-0.5 transition-all duration-400 ${scrolled ? "bg-gray-900" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 transition-all duration-400 ${scrolled ? "bg-gray-900" : "bg-white"} ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-b border-black/8 shadow-lg">
            <ul className="flex flex-col">
              {[...links, { href: "#contact", label: "Kontakt" }].map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-8 py-4 text-[0.85rem] font-semibold tracking-[1.5px] uppercase text-gray-500 hover:text-[#a07c30] hover:pl-12 border-b border-black/4 transition-all duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
//