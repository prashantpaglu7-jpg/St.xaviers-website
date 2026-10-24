import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import Icon from "@/components/common/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { academicLevels, subjectTabs, calendarTerms, holidays, methodology, achievements } from "@/data/academics";
import { images } from "@/data/media";

export default function Academics() {
  const [tab, setTab] = useState(subjectTabs[0].key);

  return (
    <>
      <PageHero
        image={images.library}
        title="Curriculum & Academics"
        current="Academics"
        subtitle="A CBSE curriculum taught in English, built from strong foundations upward, and examined honestly three times a year."
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionTitle
            eyebrow="Academic Structure"
            title="Three stages of a single journey"
            align="center"
            description="Each stage has its own rhythm, its own teachers and its own way of measuring progress."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {academicLevels.map((level, index) => (
              <Reveal key={level.title} delay={index * 0.12}>
                <article className="card-surface card-lift h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                    <Icon name={level.icon} className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <p className="mt-5 text-[0.7rem] uppercase tracking-[0.18em] text-gold-ink">{level.range}</p>
                  <h3 className="h3-card mt-1.5 text-navy">{level.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-mutedink">{level.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="Subjects" title="What is taught, by class group" align="center" />

          <Tabs value={tab} onValueChange={setTab} className="mt-10">
            <TabsList className="mx-auto flex w-full max-w-xl flex-wrap justify-center gap-2 bg-transparent p-0">
              {subjectTabs.map((group) => (
                <TabsTrigger
                  key={group.key}
                  value={group.key}
                  className="rounded-full border border-gold-light bg-white px-5 py-2 text-[0.8rem] font-medium text-mutedink data-[state=active]:border-navy data-[state=active]:bg-navy data-[state=active]:text-cream"
                >
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {subjectTabs.map((group) => (
              <TabsContent key={group.key} value={group.key} className="mt-10">
                <motion.div
                  key={group.key}
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {group.subjects.map((subject) => (
                    <div key={subject.name} className="card-surface flex gap-4 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/12 text-gold-ink">
                        <Icon name={subject.icon} className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-[0.95rem] font-semibold text-navy">{subject.name}</h3>
                        <p className="mt-1 text-[0.82rem] leading-relaxed text-mutedink">{subject.text}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">The Year</p>
            <SectionTitle title="Academic calendar" className="mt-3" />
            <div className="mt-7 overflow-x-auto rounded-xl border border-gold-light bg-white">
              <table className="w-full min-w-[520px] text-left text-[0.85rem]">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">Term</th>
                    <th scope="col" className="px-5 py-3 font-medium">Months</th>
                    <th scope="col" className="px-5 py-3 font-medium">Highlights</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarTerms.map((term, index) => (
                    <tr key={term.term} className={index % 2 === 0 ? "bg-white" : "bg-mist/70"}>
                      <td className="px-5 py-3 font-semibold text-navy">{term.term}</td>
                      <td className="px-5 py-3 text-ink">{term.months}</td>
                      <td className="px-5 py-3 text-mutedink">{term.highlights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-mutedink">
              Examinations: half-yearly in October, annual in March. Pre-board examinations for Classes X and XII
              are held in January.
            </p>
          </div>

          <div>
            <p className="eyebrow">Breaks</p>
            <SectionTitle title="Holidays observed" className="mt-3" />
            <div className="mt-7 flex flex-wrap gap-2.5">
              {holidays.map((holiday, index) => (
                <Reveal key={holiday} delay={index * 0.05}>
                  <span className="rounded-full border border-gold-light bg-white px-4 py-2 text-[0.8rem] text-navy">
                    {holiday}
                  </span>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-[0.82rem] leading-relaxed text-mutedink">
              The school also observes the Bihar state holiday list, which is published in the annual planner
              issued at the start of each session.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="Teaching Methodology" title="How a lesson works here" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {methodology.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="card-surface card-lift flex h-full gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-[0.98rem] font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-mutedink">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionTitle eyebrow="Recognition" title="Recent academic achievements" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="card-surface card-lift h-full p-6">
                  <div className="flex items-center justify-between">
                    <Trophy className="h-6 w-6 text-gold" strokeWidth={1.6} />
                    <span className="text-[0.7rem] uppercase tracking-[0.16em] text-mutedink">{item.year}</span>
                  </div>
                  <h3 className="mt-4 text-[0.95rem] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-mutedink">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}