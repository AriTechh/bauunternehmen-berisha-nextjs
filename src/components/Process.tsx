"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Erstberatung", desc: "Kostenloses Gespräch, Bedarfsanalyse und Besichtigung Ihres Objekts." },
  { num: "02", title: "Angebot", desc: "Detailliertes, transparentes Angebot mit klarer Kostenkalkulation." },
  { num: "03", title: "Planung", desc: "Gemeinsame Feinabstimmung, Terminplanung und Materialselektion." },
  { num: "04", title: "Ausführung", desc: "Professionelle Umsetzung mit regelmäßigen Fortschrittsberichten." },
  { num: "05", title: "Übergabe", desc: "Abnahme, Dokumentation und persönliche Übergabe — zu Ihrer vollen Zufriedenheit." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-[#1a1612]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag" style={{ color: "#C9A84C" }}>Unser Weg</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-white mt-3"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            So arbeiten <span className="text-[#C9A84C]">wir.</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-white/10"/>

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } } : {}}
              className="relative flex flex-col items-center text-center px-4 pb-10 sm:pb-0"
            >
              {/* Number circle */}
              <div className="w-20 h-20 rounded-full border-2 border-[#C9A84C]/40 flex items-center justify-center mb-5 relative z-10 bg-[#1a1612]">
                <span className="text-[#C9A84C] text-[1.1rem] font-black"
                  style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>{s.num}</span>
              </div>
              <h3 className="text-white text-[0.95rem] font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-[0.8rem] leading-relaxed">{s.desc}</p>
              {/* Connector dot */}
              {i < 4 && (
                <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-white/10"/>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
