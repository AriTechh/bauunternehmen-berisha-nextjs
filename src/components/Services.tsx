"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Hochbau",
    desc: "Neubau von Wohn- und Gewerbeimmobilien nach höchsten Qualitätsstandards — termingerecht und im Budget.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect x="8" y="32" width="48" height="24" rx="2" stroke="#C9A84C" strokeWidth="2.5"/>
        <polygon points="32,8 8,32 56,32" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="24" y1="56" x2="24" y2="44" stroke="#C9A84C" strokeWidth="2"/>
        <line x1="40" y1="56" x2="40" y2="44" stroke="#C9A84C" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Tiefbau",
    desc: "Erdarbeiten, Fundamente, Kanal- und Leitungsbau — solide Basis für jedes Projekt, präzise und verlässlich.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect x="4" y="44" width="56" height="8" rx="2" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M12 44 L12 20 M52 44 L52 20" stroke="#C9A84C" strokeWidth="2.5"/>
        <rect x="8" y="16" width="48" height="8" rx="1" stroke="#C9A84C" strokeWidth="2"/>
        <line x1="20" y1="44" x2="20" y2="24" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="44" y1="44" x2="44" y2="24" stroke="#C9A84C" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Innenausbau",
    desc: "Wände, Decken, Böden, Türen und Fenster — wir gestalten Innenräume, die begeistern und überzeugen.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <rect x="10" y="10" width="44" height="44" rx="3" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M10 26 L54 26" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M26 26 L26 54" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M20 18 L44 18" stroke="#C9A84C" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Renovierung & Sanierung",
    desc: "Altbausanierung, energetische Modernisierung und komplette Renovierungen — wir hauchen Ihrem Gebäude neues Leben ein.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="32" cy="32" r="22" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M22 32 Q32 20 42 32 Q32 44 22 32Z" stroke="#C9A84C" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="4" fill="#C9A84C" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Schlüsselfertiges Bauen",
    desc: "Alles aus einer Hand — von der Planung über den Bau bis zur vollständig einzugsfertigen Übergabe.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path d="M32 10 L54 20 L54 44 L32 54 L10 44 L10 20 Z" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M32 10 L32 54" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M10 20 L54 20" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M10 44 L54 44" stroke="#C9A84C" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Außenanlagen",
    desc: "Terrassen, Wege, Mauern und Einfriedungen — wir gestalten Außenbereiche, die Ihr Objekt perfekt abrunden.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path d="M16 52 L16 28 L32 12 L48 28 L48 52" stroke="#C9A84C" strokeWidth="2.5"/>
        <rect x="24" y="38" width="16" height="14" stroke="#C9A84C" strokeWidth="2"/>
        <line x1="8" y1="52" x2="56" y2="52" stroke="#C9A84C" strokeWidth="2"/>
      </svg>
    ),
  },
];

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number], delay: i * 0.08 },
  }),
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Was wir bieten</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-[#1a1a1a] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            Unsere <span className="text-[#C9A84C]">Leistungen</span>
          </h2>
          <p className="text-[#6b6b6b] text-base max-w-xl mx-auto leading-relaxed">
            Von der ersten Skizze bis zur Schlüsselübergabe — wir begleiten Sie durch jeden Schritt Ihres Bauvorhabens.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              variants={card}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="group relative bg-[#f7f5f0] rounded-2xl p-8 border border-transparent hover:border-[#C9A84C]/30 hover:bg-white transition-all duration-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div className="mb-5">{s.icon}</div>
              <h3 className="text-[1.1rem] font-bold text-[#1a1a1a] mb-3">{s.title}</h3>
              <p className="text-[#6b6b6b] text-[0.88rem] leading-relaxed mb-5">{s.desc}</p>
              <a href="#contact"
                className="inline-flex items-center gap-1.5 text-[#a07c30] text-[0.8rem] font-semibold tracking-[1px] uppercase hover:gap-3 transition-all duration-300">
                Mehr erfahren <span>→</span>
              </a>
              <div className="service-number">{s.num}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
