"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25,0.46,0.45,0.94] as [number,number,number,number], delay: i * 0.12 } }),
};

export default function Hero() {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const els = e.target.querySelectorAll<HTMLElement>("[data-target]");
        els.forEach((el) => {
          const target = parseInt(el.dataset.target || "0");
          const start = Date.now();
          const run = () => {
            const p = Math.min((Date.now() - start) / 2000, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(run);
          };
          run();
        });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.5 });
    if (countersRef.current) obs.observe(countersRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), linear-gradient(160deg,#1a1612 0%,#0d0b08 60%,#1c1a14 100%)" }}/>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }}/>
      {/* Animated grid */}
      <div className="hero-grid absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)", backgroundSize: "80px 80px" }}/>

      {/* Floating shapes */}
      <div className="shape-float-1 absolute top-[10%] right-[5%] w-80 h-80 rounded-full border border-[#C9A84C]/5 pointer-events-none"/>
      <div className="shape-float-2 absolute top-[60%] right-[15%] w-40 h-40 border border-[#C9A84C]/5 rotate-45 pointer-events-none"/>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 pt-28 pb-20 w-full">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show"
          className="inline-flex items-center gap-2.5 bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#e8c96a] text-[0.72rem] font-semibold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8">
          <span className="badge-pulse w-1.5 h-1.5 bg-[#C9A84C] rounded-full"/>
          Über 20 Jahre Erfahrung
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show"
          className="mb-6"
          style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif", fontSize: "clamp(3.5rem,8vw,7rem)", fontWeight: 900, lineHeight: 1.05, color: "#fff" }}>
          <span className="block">Wir bauen</span>
          <span className="relative inline-block text-[#C9A84C]">
            Ihre Vision.
            <span className="absolute -bottom-2 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg,#C9A84C,transparent)" }}/>
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} initial="hidden" animate="show"
          className="text-white/65 text-[1.05rem] leading-[1.9] mb-10 max-w-2xl font-light">
          Bauunternehmen Berisha steht für höchste Qualität, termingerechte Ausführung
          und persönliche Betreuung — von der Planung bis zur Übergabe.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show"
          className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#contact"
            className="inline-flex items-center justify-center px-9 py-4 bg-[#C9A84C] text-gray-900 text-[0.85rem] font-semibold tracking-[1.5px] uppercase rounded hover:bg-[#e8c96a] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,168,76,0.35)]">
            Kostenloses Angebot
          </a>
          <a href="#projects"
            className="inline-flex items-center justify-center px-9 py-4 bg-transparent text-white text-[0.85rem] font-semibold tracking-[1.5px] uppercase rounded border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-400 hover:-translate-y-0.5">
            Unsere Projekte
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div ref={countersRef} variants={fadeUp} custom={4} initial="hidden" animate="show"
          className="flex items-center flex-wrap gap-0">
          {[
            { target: 340, suffix: "+", label: "Projekte" },
            { target: 20, suffix: "+", label: "Jahre Erfahrung" },
            { target: 98, suffix: "%", label: "Zufriedenheit" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="text-center px-6 sm:px-8 first:pl-0">
                <div className="flex items-end justify-center">
                  <span data-target={s.target}
                    className="text-[2.8rem] font-black text-[#C9A84C] leading-none"
                    style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
                    0
                  </span>
                  <span className="text-[1.8rem] font-bold text-[#C9A84C]">{s.suffix}</span>
                </div>
                <span className="block text-[0.72rem] text-white/45 tracking-[1.5px] uppercase mt-1">{s.label}</span>
              </div>
              {i < 2 && <div className="w-px h-14 bg-white/12 hidden sm:block"/>}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/35 text-[0.65rem] tracking-[2px] uppercase z-10">
        <div className="scroll-line w-px h-12" style={{ background: "linear-gradient(180deg,#C9A84C,transparent)" }}/>
        <span>Scrollen</span>
      </div>
    </section>
  );
}
