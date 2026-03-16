export default function Footer() {
  return (
    <footer className="bg-[#0d0b08] text-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#home" className="flex items-center gap-3 mb-5 group">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
              <polygon points="18,2 34,32 2,32" fill="none" stroke="#C9A84C" strokeWidth="2.5"/>
              <line x1="18" y1="12" x2="18" y2="32" stroke="#C9A84C" strokeWidth="1.5"/>
            </svg>
            <div>
              <span className="block text-white font-black tracking-[3px] text-[0.85rem] uppercase"
                style={{ fontFamily: "var(--font-playfair),'Playfair Display',serif" }}>BERISHA</span>
              <span className="block text-white/40 text-[0.65rem] tracking-[2px] uppercase">Bauunternehmen</span>
            </div>
          </a>
          <p className="text-white/45 text-[0.83rem] leading-relaxed mb-6">
            Ihr zuverlässiger Partner für alle Bauleistungen, von der Planung bis zur Schlüsselübergabe.
          </p>
          <div className="flex gap-2">
            {["f", "ig", "in"].map((s) => (
              <a key={s} href="#"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-[0.7rem] font-bold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Leistungen */}
        <div>
          <h4 className="text-white text-[0.78rem] font-bold tracking-[2px] uppercase mb-5">Leistungen</h4>
          <ul className="flex flex-col gap-2.5">
            {["Hochbau","Tiefbau","Innenausbau","Renovierung","Schlüsselfertig"].map((l) => (
              <li key={l}>
                <a href="#services" className="text-white/45 text-[0.83rem] hover:text-[#C9A84C] transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Unternehmen */}
        <div>
          <h4 className="text-white text-[0.78rem] font-bold tracking-[2px] uppercase mb-5">Unternehmen</h4>
          <ul className="flex flex-col gap-2.5">
            {[["Über uns","#about"],["Projekte","#projects"],["Kontakt","#contact"],["Impressum","#"],["Datenschutz","#"]].map(([l,h]) => (
              <li key={l}>
                <a href={h} className="text-white/45 text-[0.83rem] hover:text-[#C9A84C] transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-white text-[0.78rem] font-bold tracking-[2px] uppercase mb-5">Kontakt</h4>
          <div className="flex flex-col gap-3 text-white/45 text-[0.83rem]">
            <p>📍 abcStraße 42<br/>58638 Iserlohn</p>
            <p>📞 <a href="tel:+4917612345678" className="hover:text-[#C9A84C] transition-colors">+49 176 123 456 78</a></p>
            <p>✉️ <a href="mailto:info@berisha-bau.de" className="hover:text-[#C9A84C] transition-colors">info@berisha-bau.de</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-[0.75rem]">
          <p>© 2025 Bauunternehmen Berisha. Alle Rechte vorbehalten.</p>
          <p>Gemacht mit ♦ und Präzision.</p>
        </div>
      </div>
    </footer>
  );
}
