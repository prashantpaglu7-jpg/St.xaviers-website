import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import HorizontalStrip from "@/components/common/HorizontalStrip";
import SectionTitle from "@/components/common/SectionTitle";
import { galleryItems } from "@/data/galleryData";

export default function GalleryStrip() {
  return (
    <section className="bg-navy py-14 md:py-16">
      <div className="container-site flex flex-wrap items-end justify-between gap-6">
        <SectionTitle
          eyebrow="Life at School"
          title="A campus in motion"
          light
          description="Scroll to move through a year of assemblies, laboratories, matches and festivals."
        />
        <Link to="/gallery" className="link-arrow text-cream hover:text-gold">
          View full gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <HorizontalStrip height="h-[190vh]" shift="-62%">
        {galleryItems.slice(0, 8).map((item) => (
          <figure key={item.title} className="relative w-[260px] shrink-0 md:w-[380px]">
            <Image
              src={item.image}
              alt={item.title}
              className="block aspect-[4/3] w-full overflow-hidden rounded-xl"
            />
            <figcaption className="mt-3 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-cream/60">
              <span className="h-1 w-1 rounded-full bg-gold" />
              {item.category}
            </figcaption>
          </figure>
        ))}
      </HorizontalStrip>
    </section>
  );
}