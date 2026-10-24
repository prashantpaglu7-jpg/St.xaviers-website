import WordReveal from "./WordReveal";

export default function SectionTitle({ eyebrow, title, description, align = "left", light = false, className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : ""} ${className}`}>
      {eyebrow && <p className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>}
      <h2 className={`h2-display mt-3 ${light ? "text-cream" : "text-navy"}`}>
        <WordReveal text={title} />
      </h2>
      {description && (
        <p className={`mt-4 text-[0.95rem] leading-relaxed ${light ? "text-cream/75" : "text-mutedink"}`}>
          {description}
        </p>
      )}
    </div>
  );
}