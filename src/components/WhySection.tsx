"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  { title: "Termingarantie", desc: "Wir liefern pünktlich — oder erklären Ihnen frühzeitig warum." },
  { title: "Transparente Kalkulation", desc: "Keine versteckten Kosten. Klare Angebote, faire Preise." },
  { title: "Eigenes Fachpersonal", desc: "Geprüfte Handwerker und Bauleiter aus unserem Team." },
  { title: "Ganzheitliche Betreuung", desc: "Ein Ansprechpartner für alles — von der Planung bis zur Abnahme." },
];

const tr = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } as never;

export default function WhySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-[#f7f5f0]">
      <div ref={ref} className="max-w-[1280px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={tr} className="relative">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1612] to-[#0d0b08] aspect-[4/3] flex items-center justify-center">
            {/* Placeholder construction graphic */}
            <svg viewBox="0 0 240 180" fill="none" className="w-3/4 opacity-30">
              <rect x="20" y="80" width="200" height="90" rx="4" stroke="#C9A84C" strokeWidth="2"/>
              <polygon points="120,10 20,80 220,80" stroke="#C9A84C" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="60" y="110" width="40" height="60" stroke="#C9A84C" strokeWidth="1.5"/>
              <rect x="140" y="110" width="40" height="60" stroke="#C9A84C" strokeWidth="1.5"/>
              <line x1="120" y1="40" x2="120" y2="80" stroke="#C9A84C" strokeWidth="1.5"/>
              <rect x="90" y="130" width="60" height="40" stroke="#C9A84C" strokeWidth="1.5"/>
            </svg>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(201,168,76,0.1) 0%, transparent 60%)" }}/>
          </div>
          {/* Badge float */}
          <div className="absolute -bottom-5 -right-5 sm:right-8 bg-[#C9A84C] rounded-2xl px-6 py-5 shadow-xl">
            <div className="text-[2rem] font-black text-gray-900 leading-none"
              style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>20+</div>
            <div className="text-gray-900/80 text-[0.7rem] font-semibold tracking-[1.5px] uppercase mt-1">Jahre<br/>Erfahrung</div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number], delay: 0.1 }}>
          <span className="section-tag">Warum Berisha?</span>
          <h2 className="text-[2rem] sm:text-[2.6rem] font-black text-[#1a1a1a] mt-3 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            Ihr Vertrauen ist<br/><span className="text-[#C9A84C]">unser Fundament.</span>
          </h2>
          <p className="text-[#6b6b6b] text-[0.95rem] leading-relaxed mb-8">
            Seit mehr als zwei Jahrzehnten steht der Name Berisha in der Baubranche für Verlässlichkeit, handwerkliche Exzellenz und einen service-orientierten Ansatz. Jedes Projekt ist für uns ein persönliches Engagement.
          </p>
          <div className="flex flex-col gap-5 mb-9">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#a07c30] text-[0.75rem] font-bold">✓</span>
                </div>
                <div>
                  <strong className="text-[#1a1a1a] text-[0.95rem] font-semibold">{p.title}</strong>
                  <p className="text-[#6b6b6b] text-[0.85rem] mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A84C] text-gray-900 text-[0.82rem] font-semibold tracking-[1.5px] uppercase rounded hover:bg-[#e8c96a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,168,76,0.35)]">
            Mehr über uns
          </a>
        </motion.div>
      </div>
    </section>
  );
}
