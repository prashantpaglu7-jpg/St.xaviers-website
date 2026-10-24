import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Images } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import Icon from "@/components/common/Icon";
import Lightbox from "@/components/common/Lightbox";
import RippleButton from "@/components/common/RippleButton";
import { facilities, hotspots } from "@/data/facilities";
import { galleryItems } from "@/data/galleryData";
import { images } from "@/data/media";

const miniGallery = galleryItems.slice(0, 6);

export default function Facilities() {
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const jumpTo = (id) => {
    setActive(id);
    document.getElementById(`facility-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <PageHero
        image={images.campusAerial}
        title="Infrastructure & Facilities"
        current="Facilities"
        subtitle="A two-acre campus for learning, growth and play — planned so that a child never has to leave it to find a laboratory, a book or a field."
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionTitle
            eyebrow="Campus Map"
            title="Find your way around"
            align="center"
            description="Tap a gold marker to jump to that part of the campus."
          />

          <Reveal className="relative mt-10 overflow-hidden rounded-xl shadow-[0_16px_44px_rgba(30,58,95,0.18)]">
            <Image
              src={images.campusAerial}
              alt="Aerial view of the St. Xavier's campus showing the buildings, grounds and gardens"
              className="block aspect-[16/9] w-full"
            />
            <div className="absolute inset-0 bg-navy-deep/12" />
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                onClick={() => jumpTo(spot.id)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={`Show ${spot.label}`}
              >
                <span className="hotspot-pulse block h-3.5 w-3.5 rounded-full border-2 border-white bg-gold" />
                <span className="pointer-events-none absolute left-1/2 top-6 w-max -translate-x-1/2 rounded bg-navy-deep/95 px-2.5 py-1 text-[0.68rem] text-cream opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {spot.label}
                </span>
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="Facilities" title="Everything under one roof" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <Reveal key={facility.id} delay={(index % 3) * 0.1}>
                <article
                  id={`facility-${facility.id}`}
                  className={`card-surface card-lift h-full overflow-hidden transition-shadow ${
                    active === facility.id ? "ring-2 ring-gold" : ""
                  }`}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    className="block aspect-[16/9] w-full overflow-hidden"
                  />
                  <div className="p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy">
                      <Icon name={facility.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 text-[1rem] font-semibold text-navy">{facility.title}</h3>
                    <p className="mt-2 text-[0.84rem] leading-relaxed text-mutedink">{facility.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-site flex flex-col items-center gap-5 text-center">
          <Images className="h-7 w-7 text-gold" strokeWidth={1.5} />
          <h2 className="h2-display max-w-2xl text-cream">See the campus for yourself</h2>
          <p className="max-w-xl text-[0.88rem] leading-relaxed text-cream/70">
            A full gallery of classrooms, laboratories, grounds and celebrations — or simply visit us on Goshala
            Road on any working day.
          </p>
          <RippleButton as={Link} to="/gallery" className="btn-gold breathe rounded-full px-8 py-3.5">
            Explore the Campus Gallery
            <ArrowRight className="h-4 w-4" />
          </RippleButton>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionTitle eyebrow="Glimpses" title="Around the campus" align="center" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {miniGallery.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  className="group block w-full overflow-hidden rounded-lg"
                  aria-label={`Open image: ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="block aspect-[4/3] w-full transition duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={miniGallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={(direction) =>
          setLightbox((current) => (current + direction + miniGallery.length) % miniGallery.length)
        }
      />
    </>
  );
}