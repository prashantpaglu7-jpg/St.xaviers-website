import { Quote } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";

const testimonials = [
  {
    quote:
      "Both my children have grown up here. What I value most is that the teachers tell me the truth about their progress — good or difficult — and then tell me exactly what to do about it.",
    name: "Mrs. Anupama Singh",
    detail: "Parent, Classes VII and X",
  },
  {
    quote:
      "The school never treated my daughter's interest in science as a hobby. She was in the laboratory after hours, and the teachers stayed with her. That is the whole difference.",
    name: "Mr. Rajesh Kumar Thakur",
    detail: "Parent, Alumna 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-cream texture-paper">
      <div className="container-site">
        <SectionTitle eyebrow="In their words" title="What parents tell us" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.12}>
              <figure className="card-surface h-full p-8">
                <Quote className="h-8 w-8 text-gold" strokeWidth={1.4} />
                <blockquote className="mt-4 font-heading text-[1.05rem] italic leading-relaxed text-navy">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-gold-light pt-4">
                  <p className="text-[0.85rem] font-semibold text-navy">{item.name}</p>
                  <p className="text-[0.75rem] text-mutedink">{item.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}