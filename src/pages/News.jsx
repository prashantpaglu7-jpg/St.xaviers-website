import { useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Clock, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { base44 } from "@/api/base44Client";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import HorizontalStrip from "@/components/common/HorizontalStrip";
import { featuredNews, newsItems, upcomingEvents, pastEvents } from "@/data/news";
import { images } from "@/data/media";

function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const subscribe = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      await base44.entities.Inquiry.create({ email: email.trim(), source: "newsletter" });
      setState("done");
      setEmail("");
    } catch (error) {
      setState("error");
    }
  };

  return (
    <section className="bg-mist py-12">
      <div className="container-site flex flex-col items-start justify-between gap-6 rounded-xl border border-gold-light bg-white px-6 py-8 md:flex-row md:items-center md:px-10">
        <div>
          <p className="eyebrow">Stay informed</p>
          <h2 className="mt-2 font-heading text-[1.35rem] font-bold text-navy">School newsletter</h2>
          <p className="mt-1.5 text-[0.85rem] text-mutedink">
            Circulars, results and event notices — a short email each month.
          </p>
        </div>
        <form onSubmit={subscribe} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="news-email" className="sr-only">
            Email address
          </label>
          <input
            id="news-email"
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (state !== "idle") setState("idle");
            }}
            placeholder="Your email address"
            className="w-full rounded-lg border border-gold-light bg-cream px-4 py-2.5 text-[0.85rem] text-ink placeholder:text-mutedink/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="btn-gold shrink-0 rounded-lg px-6 py-2.5"
          >
            {state === "done" ? <Check className="h-4 w-4" /> : null}
            {state === "loading" ? "Sending…" : state === "done" ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
      {state === "error" && (
        <p className="container-site mt-2 text-[0.78rem] text-red-600">
          That didn't go through. Please try again.
        </p>
      )}
    </section>
  );
}

export default function News() {
  return (
    <>
      <PageHero
        image={images.annualDay}
        title="News & Events"
        current="News"
        subtitle="What has happened, what is coming, and what parents need to know this month."
        minHeight="min-h-[46vh]"
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <Reveal>
            <article className="card-surface grid overflow-hidden md:grid-cols-[3fr_2fr]">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                className="block h-full min-h-[240px] w-full"
              />
              <div className="p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded bg-navy px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    {featuredNews.category}
                  </span>
                  <span className="text-[0.72rem] uppercase tracking-[0.16em] text-mutedink">
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="h2-display mt-4 text-navy">{featuredNews.title}</h2>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-mutedink">{featuredNews.excerpt}</p>
                <button type="button" className="link-arrow mt-6">
                  Read full story
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 0.1}>
                <article className="card-surface card-lift group h-full overflow-hidden">
                  <Image src={item.image} alt={item.title} className="block aspect-[16/9] w-full" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-gold-ink">
                      {item.category}
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      <span className="text-mutedink">{item.date}</span>
                    </div>
                    <h3 className="h3-card mt-2.5 text-navy">{item.title}</h3>
                    <p className="mt-2.5 text-[0.84rem] leading-relaxed text-mutedink">{item.excerpt}</p>
                    <button type="button" className="link-arrow mt-5">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="Upcoming" title="On the calendar" />
            <ul className="mt-8 space-y-4">
              {upcomingEvents.map((event, index) => (
                <Reveal key={event.title} delay={index * 0.08}>
                  <li className="flex gap-5 rounded-xl border border-gold-light bg-white p-5">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border border-gold bg-cream">
                      <span className="font-heading text-[1.25rem] font-bold leading-none text-navy">{event.day}</span>
                      <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.14em] text-gold-ink">
                        {event.month}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[0.97rem] font-semibold text-navy">{event.title}</h3>
                      <p className="mt-1 text-[0.83rem] leading-relaxed text-mutedink">{event.detail}</p>
                      <p className="mt-2 flex items-center gap-3 text-[0.74rem] text-mutedink">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gold-ink" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-gold-ink" />
                          School campus
                        </span>
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle eyebrow="Archive" title="Past events" />
            <p className="mt-5 text-[0.88rem] leading-relaxed text-mutedink">
              Scroll through a few afternoons from the last year — exhibitions, matches, assemblies and the annual
              day that closes the session.
            </p>
            <div className="mt-6 rounded-xl border border-gold-light bg-white p-6">
              <p className="flex items-center gap-2 text-[0.8rem] text-navy">
                <CalendarDays className="h-4 w-4 text-gold-ink" />
                Academic session 2026–27
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-mutedink">
                For anything older than a year, please write to the school office and we will share the relevant
                circulars.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-site">
          <SectionTitle eyebrow="Looking back" title="A year in afternoons" light />
        </div>
        <HorizontalStrip height="h-[165vh]" shift="-52%">
          {pastEvents.map((event) => (
            <figure key={event.title} className="w-[250px] shrink-0 md:w-[320px]">
              <Image
                src={event.image}
                alt={event.title}
                className="block aspect-[4/3] w-full overflow-hidden rounded-xl"
              />
              <figcaption className="mt-3">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-gold">{event.date}</p>
                <p className="mt-1 text-[0.88rem] text-cream/85">{event.title}</p>
              </figcaption>
            </figure>
          ))}
        </HorizontalStrip>
      </section>

      <NewsletterBanner />
    </>
  );
}