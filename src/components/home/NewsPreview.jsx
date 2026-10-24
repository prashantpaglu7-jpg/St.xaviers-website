import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import { newsItems } from "@/data/news";

export default function NewsPreview() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Latest" title="News & Events" />
          <Link to="/news" className="link-arrow">
            All news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {newsItems.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="card-surface card-lift group h-full overflow-hidden">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="block aspect-[16/9] w-full overflow-hidden"
                  />
                  <span className="absolute left-4 top-4 rounded bg-navy/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mutedink">{item.date}</p>
                  <h3 className="h3-card mt-2 text-navy transition group-hover:text-gold-ink">{item.title}</h3>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-mutedink">{item.excerpt}</p>
                  <Link to="/news" className="link-arrow mt-5">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}