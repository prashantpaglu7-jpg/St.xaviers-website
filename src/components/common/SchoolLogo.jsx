import { Image } from "@/components/ui/image";
import { school } from "@/data/school";

const sizes = {
  sm: "h-10 w-10 p-[3px]",
  md: "h-12 w-12 p-1",
  lg: "h-16 w-16 p-1.5",
};

export default function SchoolLogo({ size = "md", className = "", framed = true }) {
  const crest = <Image src={school.logo} alt={`${school.name} crest`} fittingType="fit" className="h-full w-full" />;

  if (!framed) return <span className={`block shrink-0 ${sizes[size]} ${className}`}>{crest}</span>;

  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_2px_10px_rgba(20,42,69,0.22)] ring-1 ring-gold/50 ${sizes[size]} ${className}`}
    >
      {crest}
    </span>
  );
}