import { Link } from "react-router-dom";
import { CalendarDays, FileText, Bus, PhoneCall, Download, AlertCircle, Clock } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import AccordionList from "@/components/common/AccordionList";
import { downloads, parentFaqs, school, schoolTimings } from "@/data/school";
import { images } from "@/data/media";

const resources = [
  { icon: CalendarDays, title: "Academic Calendar", text: "Term dates, examinations and holidays for 2026–27.", target: "#timings" },
  { icon: FileText, title: "Download Centre", text: "Forms, fee structure, calendar and uniform guidelines.", target: "#downloads" },
  { icon: Bus, title: "Transport & Timings", text: "School hours, and verified van operators near you.", target: "#timings" },
  { icon: PhoneCall, title: "Communication", text: "How to reach a teacher, the office or the infirmary.", target: "#emergency" },
];

const circulars = [
  {
    q: "12 October 2026 · Half-yearly examination schedule",
    a: "The date sheet for Classes VI to XII has been issued to class teachers. Examinations begin on 5 November. Students must carry their identity cards; no re-examination will be scheduled without a medical certificate.",
  },
  {
    q: "28 September 2026 · Parent–teacher meeting",
    a: "The second PTA meeting of the session will be held on Saturday, 10 October, from 10:00 AM to 12:30 PM. Parents are requested to collect progress reports from the class teacher and meet subject teachers in the allotted slots.",
  },
  {
    q: "15 September 2026 · Winter uniform",
    a: "Winter uniform is compulsory from 1 November. Navy blazers and grey sweaters are available from the authorised vendor near the school gate. Plain navy sweaters without hoods or logos are also acceptable.",
  },
  {
    q: "02 August 2026 · Fee payment reminder",
    a: "Third-quarter fees are due by 15 August at the accounts office. Payments can be made by cash, cheque or UPI between 8:00 AM and 1:30 PM on working days.",
  },
];

export default function Parents() {
  return (
    <>
      <PageHero
        image={images.parentMeeting}
        title="Parents & Students"
        current="Parents"
        subtitle="The practical things — timings, forms, circulars and who to call — kept in one place."
        minHeight="min-h-[46vh]"
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <a
                href={item.target}
                className="card-surface card-lift flex h-full flex-col p-6 transition hover:border-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <item.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-[0.95rem] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-mutedink">{item.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="timings" className="section-pad bg-mist">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle eyebrow="Everyday" title="School timings" />
            <div className="mt-7 overflow-x-auto rounded-xl border border-gold-light bg-white">
              <table className="w-full min-w-[420px] text-left text-[0.85rem]">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">Day</th>
                    <th scope="col" className="px-5 py-3 font-medium">Morning</th>
                    <th scope="col" className="px-5 py-3 font-medium">Afternoon</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolTimings.map((row, index) => (
                    <tr key={row.day} className={index % 2 === 0 ? "bg-white" : "bg-mist/70"}>
                      <td className="px-5 py-3 font-medium text-navy">{row.day}</td>
                      <td className="px-5 py-3 text-ink">{row.morning}</td>
                      <td className="px-5 py-3 text-ink">{row.afternoon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 flex items-center gap-2 text-[0.78rem] text-mutedink">
              <Clock className="h-3.5 w-3.5 text-gold-ink" />
              Office hours: {school.officeHours}
            </p>
          </div>

          <div id="downloads">
            <SectionTitle eyebrow="Download Centre" title="Forms and documents" />
            <ul className="mt-7 space-y-3">
              {downloads.map((file, index) => (
                <Reveal key={file.name} delay={index * 0.06}>
                  <li className="flex items-center justify-between gap-4 rounded-xl border border-gold-light bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 shrink-0 text-navy/70" strokeWidth={1.6} />
                      <div>
                        <p className="text-[0.86rem] font-medium text-navy">{file.name}</p>
                        <p className="text-[0.72rem] text-mutedink">{file.size}</p>
                      </div>
                    </div>
                    <a
                      href={`mailto:${school.email}?subject=${encodeURIComponent(`Request: ${file.name}`)}`}
                      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-gold px-3.5 py-2 text-[0.74rem] font-semibold text-gold-ink transition hover:bg-gold hover:text-navy-deep"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Request
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-3 text-[0.74rem] leading-relaxed text-mutedink">
              Documents are sent as PDF by email from the school office. Please include your child's class in the
              request.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream texture-paper">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle eyebrow="Notices" title="Important circulars" />
            <div className="mt-7">
              <AccordionList items={circulars} idPrefix="circular" />
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Questions" title="Parent FAQs" />
            <div className="mt-7">
              <AccordionList items={parentFaqs} idPrefix="parent" />
            </div>
          </div>
        </div>
      </section>

      <section id="emergency" className="section-pad bg-mist">
        <div className="container-site">
          <div className="rounded-xl border-l-4 border-l-gold bg-white p-7 shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:p-9">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-gold-ink" strokeWidth={1.7} />
              <h2 className="font-heading text-[1.25rem] font-bold text-navy">Emergency contacts</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                { label: "School office", value: school.phones[0], href: `tel:${school.phones[0]}` },
                { label: "Administration", value: school.phones[1], href: `tel:${school.phones[1]}` },
                { label: "Infirmary", value: "On-campus, ground floor", href: null },
              ].map((contact) => (
                <div key={contact.label}>
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-mutedink">{contact.label}</p>
                  {contact.href ? (
                    <a href={contact.href} className="mt-1 block text-[0.95rem] font-semibold text-navy hover:text-gold-ink">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[0.95rem] font-semibold text-navy">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>
            <Link to="/contact" className="link-arrow mt-7">
              Write to the school office
            </Link>
          </div>
          <Image
            src={images.parentMeeting}
            alt="Parents meeting teachers during a parent–teacher meeting"
            className="mt-8 block aspect-[21/9] w-full overflow-hidden rounded-xl"
          />
        </div>
      </section>
    </>
  );
}