import HomeHero from "@/components/home/HomeHero";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChoose from "@/components/home/WhyChoose";
import NewsPreview from "@/components/home/NewsPreview";
import GalleryStrip from "@/components/home/GalleryStrip";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";
import Counter from "@/components/common/Counter";
import Reveal from "@/components/common/Reveal";
import { stats } from "@/data/school";

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="container-site relative z-20 -mt-12 md:-mt-16">
        <Reveal className="card-surface grid grid-cols-2 gap-x-4 gap-y-7 px-6 py-8 md:grid-cols-4 md:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-[1.8rem] font-bold leading-none text-navy md:text-[2.3rem]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[0.66rem] uppercase tracking-[0.18em] text-mutedink md:text-[0.72rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>

      <WelcomeSection />
      <WhyChoose />
      <NewsPreview />
      <GalleryStrip />
      <Testimonials />
      <CtaBanner />
    </>
  );
}