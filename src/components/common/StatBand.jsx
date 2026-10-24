import Counter from "./Counter";
import Reveal from "./Reveal";

export default function StatBand({ items, tone = "navy", className = "" }) {
  const light = tone === "navy";
  return (
    <div className={`${light ? "bg-navy" : "bg-white"} ${className}`}>
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.1} className="text-center">
            <p
              className={`font-heading text-[1.9rem] font-bold leading-none md:text-[2.5rem] ${
                light ? "text-gold" : "text-navy"
              }`}
            >
              <Counter value={item.value} suffix={item.suffix} prefix={item.prefix} />
            </p>
            <p
              className={`mx-auto mt-2 max-w-[160px] text-[0.7rem] uppercase tracking-[0.18em] ${
                light ? "text-cream/60" : "text-mutedink"
              }`}
            >
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}