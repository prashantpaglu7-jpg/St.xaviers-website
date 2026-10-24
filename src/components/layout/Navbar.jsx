import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { navLinks, school } from "@/data/school";
import RippleButton from "@/components/common/RippleButton";
import SchoolLogo from "@/components/common/SchoolLogo";

function Monogram({ compact }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label={`${school.name} home`}>
      <SchoolLogo size={compact ? "sm" : "md"} className="transition-all duration-500" />
      <span className="min-w-0 leading-tight">
        <span className="block font-heading text-[0.9rem] font-semibold text-white sm:text-[1rem] md:text-[1.05rem]">
          {school.name}
        </span>
        <span className="hidden text-[0.6rem] uppercase tracking-[0.22em] text-gold/90 sm:block">
          Muzaffarpur · Est. 1976
        </span>
      </span>
    </Link>
  );
}

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-navy shadow-[0_6px_24px_rgba(20,42,69,0.28)]"
            : "bg-gradient-to-b from-navy-deep/85 via-navy-deep/40 to-transparent"
        }`}
      >
        <div
          className={`container-site flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-[60px]" : "h-[76px] md:h-[84px]"
          }`}
        >
          <Monogram compact={scrolled} />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative rounded px-2.5 py-2 text-[0.78rem] font-medium tracking-wide transition-colors ${
                    isActive ? "text-gold" : "text-white/85 hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded bg-gold transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <RippleButton
              as={Link}
              to="/admissions"
              className="btn-gold hidden rounded-full px-5 py-2.5 text-[0.78rem] lg:inline-flex"
            >
              Apply Now
              <ArrowRight className="h-3.5 w-3.5" />
            </RippleButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3.5 py-2 text-white transition hover:border-gold/60 hover:text-gold xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em]">Menu</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-[340px] flex-col bg-navy-deep shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3.5">
                <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
                  <SchoolLogo size="sm" />
                  <span className="min-w-0 leading-tight">
                    <span className="block font-heading text-[0.9rem] text-cream">St. Xavier's</span>
                    <span className="block text-[0.58rem] uppercase tracking-[0.18em] text-gold/80">Jr./Sr. School</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-gold/60 hover:text-gold"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto overscroll-contain py-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.035, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `flex min-h-[46px] items-center justify-between border-l-2 px-4 py-3 text-[0.92rem] transition ${
                          isActive
                            ? "border-gold bg-white/5 font-semibold text-gold"
                            : "border-transparent text-cream/80 hover:border-gold/40 hover:text-cream"
                        }`
                      }
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="border-t border-white/10 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <Link to="/admissions" className="btn-gold w-full rounded-lg py-3">
                  Apply for Admission
                </Link>
                <div className="mt-3 flex flex-col gap-1.5">
                  <a
                    href={`tel:${school.phones[0]}`}
                    className="flex min-h-[42px] items-center gap-2 rounded-md px-1 text-[0.78rem] text-cream/70 transition hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold/80" />
                    {school.phones[0]}
                  </a>
                  <a
                    href={`mailto:${school.email}`}
                    className="flex min-h-[42px] items-center gap-2 truncate rounded-md px-1 text-[0.78rem] text-cream/70 transition hover:text-gold"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-gold/80" />
                    {school.email}
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}