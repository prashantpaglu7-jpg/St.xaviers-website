import { Link } from "react-router-dom";
import { Phone, Mail, Facebook } from "lucide-react";
import { school } from "@/data/school";

export default function TopBar({ hidden }) {
  return (
    <div
      className={`hidden overflow-hidden bg-navy text-cream transition-all duration-500 md:block ${
        hidden ? "h-0 opacity-0" : "h-9 opacity-100"
      }`}
    >
      <div className="container-site flex h-9 items-center justify-between text-[0.72rem] tracking-wide">
        <div className="flex items-center gap-5">
          <a href={`tel:${school.phones[0]}`} className="flex items-center gap-1.5 text-cream/80 transition hover:text-gold">
            <Phone className="h-3 w-3" aria-hidden="true" />
            {school.phones[0]}
          </a>
          <a href={`mailto:${school.email}`} className="flex items-center gap-1.5 text-cream/80 transition hover:text-gold">
            <Mail className="h-3 w-3" aria-hidden="true" />
            {school.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/admissions"
            className="rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-deep transition hover:brightness-110"
          >
            Admissions Open 2026–27
          </Link>
          <a
            href={school.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="St. Xavier's School on Facebook"
            className="text-cream/80 transition hover:text-gold"
          >
            <Facebook className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}