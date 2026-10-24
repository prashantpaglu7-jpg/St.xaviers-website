import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import { images } from "@/data/media";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="section-pad bg-cream texture-paper">
      <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal className="relative">
          <span className="absolute -left-3 -top-3 hidden h-full w-full rounded-xl border border-gold/40 md:block" />
          <Image
            src={images.classroom}
            alt="Students at work in a smart classroom at St. Xavier's"
            className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_16px_40px_rgba(30,58,95,0.18)]"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-navy/90 px-4 py-3 text-cream backdrop-blur-sm">
            <p className="font-heading text-[1.35rem] font-bold text-gold">50+</p>
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/70">Years of teaching</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow">Welcome to St. Xavier's</p>
          <SectionTitle title="A Legacy of Academic Excellence" className="mt-3" />
          <p className="mt-5 text-[0.92rem] leading-relaxed text-mutedink">
            Founded in 1976 by the Chandra Children Welfare Society, St. Xavier's has spent five decades
            teaching the children of Muzaffarpur that discipline and curiosity belong together. What began as a
            small neighbourhood school is today a CBSE senior secondary institution of over twelve hundred
            students.
          </p>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-mutedink">
            Our classrooms are deliberately small, our teachers are here for the long term, and our promise has
            not changed since the first morning assembly: every child is known by name, and every child is
            expected to do their best work.
          </p>
          <Link to="/about" className="link-arrow mt-7">
            Read our story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}