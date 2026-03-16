const items = [
  "Hochbau","Tiefbau","Renovierung","Innenausbau","Schlüsselfertig","Sanierung","Rohbau","Qualität",
  "Hochbau","Tiefbau","Renovierung","Innenausbau","Schlüsselfertig","Sanierung","Rohbau","Qualität",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#C9A84C] py-4 select-none">
      <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-gray-900 text-[0.7rem] font-bold tracking-[3px] uppercase px-6">{item}</span>
            <span className="text-gray-900/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
