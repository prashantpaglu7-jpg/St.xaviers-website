import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Facebook, Youtube, Instagram, ArrowRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { school, navLinks } from "@/data/school";
import SchoolLogo from "@/components/common/SchoolLogo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const subscribe = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      await base44.entities.Inquiry.create({ email: email.trim(), source: "newsletter" });
      setState("done");
      setEmail("");
    } catch (error) {
      setState("error");
    }
  };

  return (
    <footer className="bg-navy-deep text-cream">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 md:py-16">
        <div>
          <div className="flex items-center gap-3">
            <SchoolLogo size="md" />
            <div>
              <p className="font-heading text-[1rem] font-semibold leading-tight">{school.name}</p>
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-gold/80">{school.motto}</p>
            </div>
          </div>
          <p className="mt-5 text-[0.82rem] leading-relaxed text-cream/65">{school.address}</p>
          <p className="mt-3 text-[0.75rem] text-cream/50">
            {school.type} · {school.board}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-[0.95rem] text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-[0.82rem]">
            {["Home", "About", "Admissions", "Academics", "Gallery", "Contact"].map((label) => {
              const link = navLinks.find((item) => item.label === label);
              return (
                <li key={label}>
                  <Link to={link.path} className="text-cream/70 transition hover:text-gold">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-[0.95rem] text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-[0.82rem] text-cream/70">
            <li>
              <a href={`tel:${school.phones[0]}`} className="flex items-start gap-2 transition hover:text-gold">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                <span>
                  {school.phones[0]}
                  <br />
                  {school.phones[1]}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${school.email}`} className="flex items-start gap-2 transition hover:text-gold">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
                {school.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
              {school.officeHours} · Sunday closed
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-[0.95rem] text-gold">Stay Connected</h3>
          <div className="mt-4 flex gap-2">
            {[
              { href: school.facebook, icon: Facebook, label: "Facebook" },
              { href: "https://www.youtube.com", icon: Youtube, label: "YouTube" },
              { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <form onSubmit={subscribe} className="mt-5">
            <label htmlFor="footer-email" className="text-[0.75rem] text-cream/60">
              School newsletter
            </label>
            <div className="mt-2 flex overflow-hidden rounded-lg border border-white/15 bg-white/5 focus-within:border-gold">
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (state !== "idle") setState("idle");
                }}
                placeholder="Your email address"
                className="w-full bg-transparent px-3 py-2.5 text-[0.8rem] text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="flex items-center gap-1 bg-gold px-3 text-[0.75rem] font-semibold text-navy-deep transition hover:brightness-110 disabled:opacity-70"
              >
                {state === "done" ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
            {state === "done" && <p className="mt-2 text-[0.72rem] text-gold">Thank you — you're on the list.</p>}
            {state === "error" && <p className="mt-2 text-[0.72rem] text-red-300">Could not subscribe. Please try again.</p>}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-center text-[0.72rem] text-cream/50 md:flex-row md:text-left">
          <p>© 2026 {school.name}. All Rights Reserved. | {school.board}</p>
          <p>Managed by {school.management}</p>
        </div>
      </div>
    </footer>
  );
}