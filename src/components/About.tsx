"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const team = [
  { initial: "A", name: "Albion Berisha", role: "Bauleiter", color: "from-[#8a6020] to-[#c9a84c]" },
  { initial: "S", name: "Sami Berisha", role: "Geschäftsführer", color: "from-[#2d5016] to-[#4a8a22]" },
  { initial: "A", name: "Arlinda Berisha", role: "Kundenbetreuung", color: "from-[#16304a] to-[#1e5080]" },
];

const certs = [
  { icon: "🏆", text: "Zertifizierter Meisterbetrieb" },
  { icon: "🛡️", text: "Vollversichert & haftpflichtgesichert" },
  { icon: "⚡", text: "Mitglied im Deutschen Baugewerbe" },
];

const tr = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } as never;

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Unser Team</span>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-[#1a1a1a] mt-3"
            style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>
            Über <span className="text-[#C9A84C]">Berisha</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={tr}>
            <p className="text-[1.15rem] font-light text-[#1a1a1a] leading-relaxed mb-5 border-l-2 border-[#C9A84C] pl-5">
              Gegründet mit der Vision, Bauen neu zu denken — persönlich, qualitativ und mit echtem Handwerk.
            </p>
            <p className="text-[#6b6b6b] text-[0.93rem] leading-relaxed mb-4">
              Bauunternehmen Berisha blickt auf über 20 Jahre Erfahrung in der deutschen Baubranche zurück. Was als kleines Familienunternehmen begann, ist heute ein etabliertes Team aus erfahrenen Fachleuten — Bauingenieure, Meister und Handwerker, die für ihre Arbeit brennen.
            </p>
            <p className="text-[#6b6b6b] text-[0.93rem] leading-relaxed mb-8">
              Wir sind nicht einfach nur ein weiteres Bauunternehmen. Wir sind Ihr Partner, der Ihre Ideen versteht, Ihre Ziele kennt und mit Ihnen gemeinsam Außergewöhnliches baut.
            </p>
            <div className="flex flex-col gap-3">
              {certs.map((c) => (
                <div key={c.text} className="flex items-center gap-3 bg-[#f7f5f0] px-4 py-3 rounded-xl">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-[#1a1a1a] text-[0.85rem] font-medium">{c.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – team */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={tr} className="flex flex-col gap-4">
            {team.map((t) => (
              <div key={t.name} className="flex items-center gap-4 bg-[#f7f5f0] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <strong className="text-[#1a1a1a] text-[0.95rem] font-semibold block">{t.name}</strong>
                  <span className="text-[#6b6b6b] text-[0.8rem]">{t.role}</span>
                </div>
              </div>
            ))}
            {/* Quote */}
            <div className="mt-2 bg-[#1a1612] rounded-2xl p-6">
              <blockquote className="text-white/80 text-[0.9rem] leading-relaxed italic mb-3">
                &ldquo;Qualität ist kein Zufall — sie ist das Ergebnis von Können, Engagement und dem Willen, das Beste zu geben.&rdquo;
              </blockquote>
              <cite className="text-[#C9A84C] text-[0.75rem] font-semibold tracking-[1px] not-italic">— Fatos Berisha, Gründer</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
