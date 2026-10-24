import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import StatBand from "@/components/common/StatBand";
import { faculty, facultyFilterGroups, leadership, staffStats, developmentPrograms } from "@/data/people";
import { images } from "@/data/media";

function initialsOf(name) {
  return name
    .replace(/^(Mrs\.|Mr\.|Ms\.|Dr\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function Faculty() {
  const [group, setGroup] = useState("All");

  const filtered = useMemo(
    () => (group === "All" ? faculty : faculty.filter((member) => member.group === group)),
    [group]
  );

  return (
    <>
      <PageHero
        image={images.facultyCorridor}
        title="Faculty & Staff"
        current="Faculty"
        subtitle="Forty-eight dedicated educators — the largest single reason this school works."
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionTitle eyebrow="Leadership" title="In the Principal's office" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.14}>
                <article className="card-surface card-lift h-full p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <span className="flex h-[120px] w-[120px] shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy font-heading text-[2rem] text-gold">
                      {person.initials}
                    </span>
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold-ink">{person.role}</p>
                      <h3 className="h3-card mt-1 text-navy">{person.name}</h3>
                      <p className="mt-3 text-[0.85rem] leading-relaxed text-mutedink">{person.bio}</p>
                    </div>
                  </div>
                  <p className="mt-5 border-l-2 border-gold pl-4 font-heading text-[0.9rem] italic leading-relaxed text-navy">
                    “{person.quote}”
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="Our Teachers" title="The full faculty" align="center" />

          <div className="mt-9 flex flex-wrap justify-center gap-2">
            {facultyFilterGroups.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGroup(item)}
                aria-pressed={group === item}
                className={`rounded-full border px-4 py-2 text-[0.78rem] font-medium transition ${
                  group === item
                    ? "border-navy bg-navy text-cream"
                    : "border-gold-light bg-white text-mutedink hover:border-gold hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((member) => (
                <motion.article
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="card-surface card-lift flex flex-col items-center p-6 text-center"
                >
                  <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-gold bg-navy/5 font-heading text-[1.15rem] text-navy">
                    {initialsOf(member.name)}
                  </span>
                  <h3 className="mt-4 text-[0.9rem] font-semibold leading-snug text-navy">{member.name}</h3>
                  <p className="mt-1 text-[0.75rem] font-medium text-gold-ink">{member.subject}</p>
                  <p className="mt-2 text-[0.72rem] text-mutedink">{member.qualification}</p>
                  <p className="mt-0.5 text-[0.72rem] text-mutedink">{member.experience} of teaching</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <StatBand items={staffStats} />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Professional Development</p>
            <SectionTitle title="Teachers who keep learning" className="mt-3" />
            <p className="mt-5 text-[0.9rem] leading-relaxed text-mutedink">
              Every teacher completes a minimum of six training days a year. Sessions are run in-house by the
              academic council and through CBSE's centre of excellence programmes, with attendance reviewed by the
              Principal each term.
            </p>
          </div>
          <ul className="space-y-3">
            {developmentPrograms.map((program, index) => (
              <Reveal key={program} delay={index * 0.07}>
                <li className="flex gap-3 rounded-lg border border-gold-light bg-white px-5 py-4 text-[0.85rem] leading-relaxed text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {program}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}