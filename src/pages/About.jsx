import { Target, Eye, Gem } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import Counter from "@/components/common/Counter";
import { leadership } from "@/data/people";
import { campusStats, school } from "@/data/school";
import { images } from "@/data/media";

const timeline = [
  { year: "1976", text: "Established by the Chandra Children Welfare Society as a neighbourhood school on Goshala Road." },
  { year: "1980s", text: "Affiliated to the Central Board of Secondary Education and expanded to the middle wing." },
  { year: "2000s", text: "Senior secondary classes introduced, with Science, Commerce and Humanities streams." },
  { year: "2010s", text: "Smart classrooms, upgraded science laboratories and a new computer laboratory." },
  { year: "2020s", text: "More than 1,200 students, digital classrooms throughout and a two-acre green campus." },
];

const values = [
  { icon: Target, title: "Mission", text: "To provide quality education that nurtures the intellectual, moral and physical development of every student." },
  { icon: Eye, title: "Vision", text: "To be a leading institution in Bihar, producing confident and compassionate citizens for a changing world." },
  { icon: Gem, title: "Core Values", text: "Discipline · Integrity · Excellence · Service · Respect — lived daily, not framed on a wall." },
];

const governance = [
  { level: "Chandra Children Welfare Society", role: "Founding body" },
  { level: "Chairman", role: "Mr. Amitabh Chandra" },
  { level: "Principal", role: "Mrs. Asha Kiran Sinha" },
  { level: "Academic Council", role: "Heads of department" },
  { level: "Administrative Office", role: "Accounts, admissions, records" },
];

export default function About() {
  return (
    <>
      <PageHero
        image={images.buildingFront}
        title="About St. Xavier's Jr./Sr. School"
        current="About"
        subtitle="Five decades of steady, patient teaching on Goshala Road — and a community that still believes good schooling changes a life."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Our Story</p>
            <SectionTitle title="From one classroom to a full campus" className="mt-3" />
          </div>

          <div className="relative border-l border-gold-light pl-8 md:pl-10">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.1} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-cream md:-left-[49px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <p className="font-heading text-[1.2rem] font-bold text-navy">{item.year}</p>
                <p className="mt-1.5 max-w-xl text-[0.9rem] leading-relaxed text-mutedink">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="What guides us" title="Mission, Vision & Values" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.12}>
                <article className="card-surface card-lift h-full p-7 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/12 text-gold-ink">
                    <item.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="h3-card mt-4 text-navy">{item.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-mutedink">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream texture-paper">
        <div className="container-site">
          <SectionTitle eyebrow="Leadership" title="The people who hold the school steady" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.15}>
                <article className="card-surface card-lift h-full p-8">
                  <div className="flex items-center gap-5">
                    <span className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy font-heading text-[1.6rem] text-gold">
                      {person.initials}
                    </span>
                    <div>
                      <h3 className="h3-card text-navy">{person.name}</h3>
                      <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-gold-ink">{person.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[0.88rem] leading-relaxed text-mutedink">{person.bio}</p>
                  <p className="mt-5 border-l-2 border-gold pl-4 font-heading text-[0.92rem] italic leading-relaxed text-navy">
                    “{person.quote}”
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Management & Governance</p>
            <SectionTitle title="A society, not a company" className="mt-3" />
            <p className="mt-5 text-[0.92rem] leading-relaxed text-mutedink">
              The school is owned and governed by the {school.management}, a charitable society formed in 1976 to
              bring affordable English medium schooling to Muzaffarpur. The society appoints the Chairman and the
              Principal, approves the annual academic plan and reviews results, infrastructure and fee policy each
              year.
            </p>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-mutedink">
              Day-to-day academic decisions sit with the Principal and the heads of department, while the
              administrative office handles admissions, records and accounts. Parents are represented through the
              Parent–Teacher Association, which meets every second Saturday.
            </p>
          </div>

          <div className="space-y-3">
            {governance.map((node, index) => (
              <Reveal key={node.level} delay={index * 0.08}>
                <div className="flex items-center justify-between gap-4 rounded-lg border border-gold-light bg-mist px-5 py-4">
                  <p className="text-[0.88rem] font-semibold text-navy">{node.level}</p>
                  <p className="text-right text-[0.75rem] text-mutedink">{node.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[120vh] bg-navy md:h-[140vh]">
        <div className="sticky top-[60px] flex h-[calc(100vh-60px)] items-center">
          <div className="container-site w-full">
            <SectionTitle eyebrow="By the numbers" title="Five decades, counted honestly" align="center" light />
            <div className="mt-10 grid grid-cols-2 gap-y-9 md:mt-14 md:grid-cols-4">
              {campusStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.1} className="text-center">
                  <p className="font-heading text-[2rem] font-bold leading-none text-gold md:text-[2.8rem]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mx-auto mt-2 max-w-[150px] text-[0.68rem] uppercase tracking-[0.18em] text-cream/60">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}