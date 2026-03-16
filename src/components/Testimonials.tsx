"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    initial: "M",
    color: "from-[#8a6020] to-[#c9a84c]",
    name: "Michael Wagner",
    sub: "Einfamilienhausbau · München",
    text: "Bauunternehmen Berisha hat unser Einfamilienhaus schlüsselfertig gebaut — termingerecht und mit einer Qualität, die alle Erwartungen übertroffen hat. Klare Empfehlung!",
  },
  {
    initial: "A",
    color: "from-[#16304a] to-[#1e5080]",
    name: "Arjanit Halili",
    sub: "Altbausanierung · Gerlingsen",
    text: "Die Renovierung unserer Altbauwohnung war ein komplexes Projekt. Bauunternehmen Berisha hat es professionell und mit viel Feingefühl umgesetzt. Tolle Kommunikation während des gesamten Prozesses.",
  },
  {
    initial: "T",
    color: "from-[#2d5016] to-[#4a8a22]",
    name: "Thomas Eckhart",
    sub: "Gewerbeausbau · Nürnberg",
    text: "Als Gewerbetreibender war mir pünktliche Fertigstellung enorm wichtig. Berisha hat geliefert, zwei Wochen früher als geplant. Professioneller geht es nicht.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const startX = useRef(0);

  const goTo = useCallback((next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx((next + testimonials.length) % testimonials.length);
  }, [idx]);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Kundenstimmen</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-[#1a1a1a] mt-3"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            Was unsere Kunden <span className="text-[#C9A84C]">sagen.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card */}
          <div
            className="relative overflow-hidden"
            onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const diff = startX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 50) goTo(diff > 0 ? idx + 1 : idx - 1);
            }}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25,0.46,0.45,0.94] as [number,number,number,number] } }}
                exit={{ opacity: 0, x: dir * -60, transition: { duration: 0.3 } }}
                className="bg-[#f7f5f0] rounded-2xl p-8 sm:p-10"
              >
                <div className="text-[#C9A84C] text-xl mb-5">★★★★★</div>
                <p className="text-[#1a1a1a] text-[1rem] leading-[1.85] mb-8 italic">
                  &ldquo;{testimonials[idx].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[idx].color} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonials[idx].initial}
                  </div>
                  <div>
                    <strong className="text-[#1a1a1a] text-[0.9rem] font-semibold block">{testimonials[idx].name}</strong>
                    <span className="text-[#6b6b6b] text-[0.78rem]">{testimonials[idx].sub}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button onClick={() => goTo(idx - 1)}
              className="w-10 h-10 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center text-[#6b6b6b] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300">
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`dot ${i === idx ? "active" : ""}`}/>
              ))}
            </div>
            <button onClick={() => goTo(idx + 1)}
              className="w-10 h-10 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center text-[#6b6b6b] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
