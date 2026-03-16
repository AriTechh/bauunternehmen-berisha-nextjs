"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Filter = "all" | "hochbau" | "innenausbau" | "sanierung";

const projects = [
  {
    cat: "hochbau" as Filter,
    label: "Hochbau",
    title: "Mehrfamilienhaus München",
    sub: "12 Wohneinheiten · 2023",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  },
  {
    cat: "innenausbau" as Filter,
    label: "Innenausbau",
    title: "Penthouse Augsburg",
    sub: "Luxus-Renovierung · 2023",
    bg: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
  },
  {
    cat: "sanierung" as Filter,
    label: "Sanierung",
    title: "Altbausanierung Nürnberg",
    sub: "Kernsanierung · 2022",
    bg: "linear-gradient(135deg, #2d1b00 0%, #4a2800 100%)",
  },
  {
    cat: "hochbau" as Filter,
    label: "Hochbau",
    title: "Gewerbepark Ingolstadt",
    sub: "8.500 m² · 2022",
    bg: "linear-gradient(135deg, #0a2e1a 0%, #1a3a2a 100%)",
  },
  {
    cat: "innenausbau" as Filter,
    label: "Innenausbau",
    title: "Bürokomplex Regensburg",
    sub: "Komplettausbau · 2024",
    bg: "linear-gradient(135deg, #1e0a3a 0%, #3a1260 100%)",
  },
  {
    cat: "sanierung" as Filter,
    label: "Sanierung",
    title: "Denkmalschutz Bamberg",
    sub: "Fassade & Innen · 2024",
    bg: "linear-gradient(135deg, #2e1a00 0%, #1a1000 100%)",
  },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Alle" },
  { key: "hochbau", label: "Hochbau" },
  { key: "innenausbau", label: "Innenausbau" },
  { key: "sanierung", label: "Sanierung" },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const visible = projects.filter((p) => active === "all" || p.cat === active);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#f7f5f0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Referenzen</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-[#1a1a1a] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            Abgeschlossene <span className="text-[#C9A84C]">Projekte</span>
          </h2>
          <p className="text-[#6b6b6b] text-base max-w-md mx-auto">Qualität, die man sieht. Ergebnisse, die überzeugen.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button key={f.key} onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-[0.78rem] font-semibold tracking-[1px] uppercase border transition-all duration-300 ${
                active === f.key
                  ? "bg-[#C9A84C] border-[#C9A84C] text-gray-900"
                  : "bg-transparent border-[#1a1a1a]/15 text-[#6b6b6b] hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.06 } }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                style={{ background: p.bg }}
              >
                {/* Placeholder SVG icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg viewBox="0 0 120 80" fill="none" className="w-3/4">
                    <rect x="10" y="20" width="100" height="50" rx="2" stroke="#C9A84C" strokeWidth="1.5"/>
                    <polygon points="60,5 10,20 110,20" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
                    <rect x="40" y="40" width="20" height="30" stroke="#C9A84C" strokeWidth="1"/>
                  </svg>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400"/>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-[#C9A84C] text-[0.65rem] font-bold tracking-[2px] uppercase mb-1 block">{p.label}</span>
                  <h3 className="text-white text-[1.05rem] font-bold">{p.title}</h3>
                  <p className="text-white/60 text-[0.78rem] mt-0.5">{p.sub}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
