import { BookOpen, FlaskConical, Trophy } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    text: "A CBSE curriculum taught at a 1:25 student–teacher ratio, so attention is personal and progress is visible every week.",
  },
  {
    icon: FlaskConical,
    title: "World-Class Infrastructure",
    text: "Smart classrooms, three science laboratories, a computer lab and two shaded acres of campus to learn and play in.",
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    text: "Sports, arts, clubs and community service sit beside the timetable — not after it — for genuinely well-rounded growth.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-site">
        <SectionTitle
          eyebrow="Why St. Xavier's"
          title="Three reasons families stay with us"
          align="center"
          description="Parents choose a school once and live with the choice for a decade. These are the commitments we make to earn it."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.15}>
              <article className="card-surface card-lift h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="h3-card mt-5 text-navy">{pillar.title}</h3>
                <span className="gold-rule mt-4" />
                <p className="mt-4 text-[0.88rem] leading-relaxed text-mutedink">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}