import { Image } from "@/components/ui/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import Icon from "@/components/common/Icon";
import HorizontalStrip from "@/components/common/HorizontalStrip";
import { activities, clubs, activityAchievements, eventsCalendar } from "@/data/activitiesData";
import { images } from "@/data/media";

export default function Activities() {
  return (
    <>
      <PageHero
        image={images.cultural}
        title="Extra-Curricular Activities"
        current="Activities"
        subtitle="Beyond the classroom — sport, stage, club and community, because character is built in the hours after lessons."
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionTitle eyebrow="Where to begin" title="Four ways to grow here" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {activities.map((activity, index) => (
              <Reveal key={activity.title} delay={index * 0.12}>
                <article className="card-surface card-lift group h-full overflow-hidden">
                  <Image src={activity.image} alt={activity.title} className="block aspect-[16/9] w-full" />
                  <div className="p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold-ink">
                      <Icon name={activity.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="h3-card mt-4 text-navy">{activity.title}</h3>
                    <p className="mt-2.5 text-[0.87rem] leading-relaxed text-mutedink">{activity.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <Image
              src={images.sportsGround}
              alt="The school sports ground with running track and cricket nets"
              className="block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_16px_40px_rgba(30,58,95,0.16)]"
            />
          </Reveal>
          <Reveal delay={0.14}>
            <p className="eyebrow">On the field</p>
            <SectionTitle title="Sport is part of the timetable" className="mt-3" />
            <p className="mt-5 text-[0.9rem] leading-relaxed text-mutedink">
              Every class has two supervised games periods a week, and the school fields teams in cricket,
              football, kho-kho, volleyball and athletics. Inter-house competitions run through the year and the
              annual athletics meet closes the winter term.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-[0.84rem] text-ink">
              {["Cricket", "Football", "Kho-Kho", "Volleyball", "Athletics", "Table Tennis", "Chess", "Badminton"].map(
                (sport) => (
                  <li key={sport} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {sport}
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream texture-paper">
        <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="md:order-2">
            <Image
              src={images.art}
              alt="Students painting at easels in the school art room"
              className="block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_16px_40px_rgba(30,58,95,0.16)]"
            />
          </Reveal>
          <Reveal delay={0.14} className="md:order-1">
            <p className="eyebrow">On the stage</p>
            <SectionTitle title="Arts and culture, all year" className="mt-3" />
            <p className="mt-5 text-[0.9rem] leading-relaxed text-mutedink">
              Music, dance, theatre and visual art are taught as timetabled subjects up to Class VIII, and continue
              as clubs and production rehearsals afterwards. The annual cultural fest, Utsav, is written, designed
              and performed almost entirely by students.
            </p>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-mutedink">
              The school choir leads the morning assembly each week, and the art room stays open after class for
              students preparing for district competitions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="Clubs & Societies" title="Six clubs, twice a week" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, index) => (
              <Reveal key={club.name} delay={(index % 3) * 0.08}>
                <article className="card-surface card-lift h-full p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Icon name={club.icon} className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 text-[0.97rem] font-semibold text-navy">{club.name}</h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-mutedink">{club.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-site">
          <SectionTitle eyebrow="Recent wins" title="What our students brought home" light />
        </div>
        <HorizontalStrip height="h-[170vh]" shift="-56%">
          {activityAchievements.map((item) => (
            <figure key={item.title} className="w-[280px] shrink-0 md:w-[340px]">
              <Image
                src={item.image}
                alt={item.title}
                className="block aspect-[4/3] w-full overflow-hidden rounded-xl"
              />
              <figcaption className="mt-4">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-gold">{item.year}</p>
                <p className="mt-1 font-heading text-[1rem] text-cream">{item.title}</p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-cream/60">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </HorizontalStrip>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <SectionTitle eyebrow="Save the dates" title="Annual events calendar" align="center" />
          <div className="mt-9 overflow-x-auto rounded-xl border border-gold-light bg-white">
            <table className="w-full min-w-[480px] text-left text-[0.87rem]">
              <thead className="bg-navy text-cream">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">Event</th>
                  <th scope="col" className="px-5 py-3 text-right font-medium">When</th>
                </tr>
              </thead>
              <tbody>
                {eventsCalendar.map((row, index) => (
                  <tr key={row.event} className={index % 2 === 0 ? "bg-white" : "bg-mist/70"}>
                    <td className="px-5 py-3 text-ink">{row.event}</td>
                    <td className="px-5 py-3 text-right font-semibold text-navy">{row.month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}