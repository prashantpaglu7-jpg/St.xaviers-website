import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import PageHero from "@/components/common/PageHero";
import Lightbox from "@/components/common/Lightbox";
import { galleryCategories, galleryItems } from "@/data/galleryData";
import { images } from "@/data/media";

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category]
  );

  useEffect(() => setOpenIndex(null), [category]);

  return (
    <>
      <PageHero
        image={images.hero}
        title="Gallery"
        current="Gallery"
        subtitle="Classrooms, laboratories, festivals and finals — a school year, in pictures."
        minHeight="min-h-[46vh]"
      />

      <div className="sticky top-[60px] z-30 border-b border-gold-light/70 bg-cream/95 backdrop-blur">
        <div className="container-site flex gap-2 overflow-x-auto py-3.5">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`shrink-0 rounded-full px-4 py-1.5 text-[0.78rem] font-medium transition ${
                category === item
                  ? "bg-gold text-navy-deep"
                  : "bg-white text-mutedink hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filtered.map((item, index) => (
              <motion.figure
                key={`${item.title}-${index}`}
                className="mb-5 break-inside-avoid"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                  aria-label={`Open image: ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={`block w-full transition duration-500 group-hover:scale-[1.04] ${
                      item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  />
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent p-5 text-left opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">{item.category}</span>
                    <span className="mt-1 text-[0.85rem] font-medium text-cream">{item.title}</span>
                  </span>
                </button>
              </motion.figure>
            ))}
          </div>

          <p className="mt-4 text-center text-[0.75rem] text-mutedink">
            {filtered.length} photographs{category !== "All" ? ` in ${category}` : ""}
          </p>
        </div>
      </section>

      <Lightbox
        items={filtered}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(direction) =>
          setOpenIndex((current) => (current + direction + filtered.length) % filtered.length)
        }
      />
    </>
  );
}