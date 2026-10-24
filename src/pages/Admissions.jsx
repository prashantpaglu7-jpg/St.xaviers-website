import { Link } from "react-router-dom";
import { Check, Download, Phone, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import AccordionList from "@/components/common/AccordionList";
import RippleButton from "@/components/common/RippleButton";
import { admissionFaqs, admissionSteps, fees, quickFacts, requiredDocuments, school } from "@/data/school";
import { images } from "@/data/media";

export default function Admissions() {
  return (
    <>
      <PageHero
        image={images.gate}
        title="Admissions 2026–27"
        current="Admissions"
        subtitle="Five clear steps, no queues and no guesswork. Here is exactly what to bring and what happens next."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <Reveal>
            <p className="eyebrow">Admissions Overview</p>
            <SectionTitle title="A simple, unhurried process" className="mt-3" />
            <p className="mt-5 text-[0.92rem] leading-relaxed text-mutedink">
              Admission to St. Xavier's is open to all children regardless of background, and is granted on the
              basis of seat availability in the relevant class. Applications for Classes I to IX are accepted
              through the year; admissions to Classes X and XII are considered only against vacancies.
            </p>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-mutedink">
              We ask for a short interaction with the child and a conversation with parents, so that we understand
              the child's previous schooling and any support they may need. There is no entrance test for the
              primary classes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <RippleButton as={Link} to="/contact" className="btn-gold rounded-full px-6 py-3">
                Contact Admissions Office
                <ArrowRight className="h-4 w-4" />
              </RippleButton>
              <a href={`tel:${school.phones[0]}`} className="btn-navy rounded-full px-6 py-3">
                <Phone className="h-4 w-4" />
                {school.phones[0]}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-surface h-full border-l-4 border-l-gold p-7">
              <h3 className="h3-card text-navy">Quick facts</h3>
              <dl className="mt-5 space-y-3.5">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-4 border-b border-mist pb-3 last:border-0">
                    <dt className="text-[0.78rem] uppercase tracking-[0.1em] text-mutedink">{fact.label}</dt>
                    <dd className="text-right text-[0.85rem] font-semibold text-navy">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionTitle eyebrow="How to apply" title="The process, step by step" align="center" />
          <div className="mx-auto mt-12 max-w-3xl">
            {admissionSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="relative flex gap-5 pb-9 last:pb-0">
                <div className="relative flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-[1rem] font-bold text-gold">
                    {index + 1}
                  </span>
                  {index < admissionSteps.length - 1 && <span className="mt-2 w-px flex-1 bg-gold-light" />}
                </div>
                <div className="pb-1">
                  <h3 className="h3-card text-navy">{step.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-mutedink">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Checklist</p>
            <SectionTitle title="Documents to bring" className="mt-3" />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {requiredDocuments.map((doc, index) => (
                <Reveal key={doc} delay={index * 0.06}>
                  <li className="flex items-start gap-2.5 rounded-lg border border-gold-light bg-white px-4 py-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-[0.85rem] text-ink">{doc}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Transparency</p>
            <SectionTitle title="Fee structure" className="mt-3" />
            <div className="mt-7 overflow-x-auto rounded-xl border border-gold-light bg-white">
              <table className="w-full min-w-[420px] text-left text-[0.85rem]">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">Fee head</th>
                    <th scope="col" className="px-5 py-3 text-right font-medium">Amount</th>
                    <th scope="col" className="px-5 py-3 text-right font-medium">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={fee.head} className={index % 2 === 0 ? "bg-white" : "bg-mist/70"}>
                      <td className="px-5 py-3 text-ink">{fee.head}</td>
                      <td className="px-5 py-3 text-right font-semibold text-navy">{fee.amount}</td>
                      <td className="px-5 py-3 text-right text-mutedink">{fee.frequency}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gold-light bg-gold/10">
                    <td className="px-5 py-3.5 font-semibold text-navy">Total (annual)</td>
                    <td className="px-5 py-3.5 text-right font-heading text-[1rem] font-bold text-navy">₹43,550</td>
                    <td className="px-5 py-3.5 text-right text-mutedink">+ one-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[0.75rem] leading-relaxed text-mutedink">
              Indicative figures for Class 10 for the 2026–27 session. Please contact the office for exact,
              class-wise amounts.
            </p>
            <Link to="/parents" className="link-arrow mt-5">
              <Download className="h-4 w-4" />
              Fee structure in the download centre
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="h2-display text-cream">Ready to apply?</h2>
            <p className="mt-2 text-[0.88rem] text-cream/70">
              Collect the form from the school office, or call and we will guide you through it.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <RippleButton as={Link} to="/parents" className="btn-outline-light rounded-full px-6 py-3">
              <Download className="h-4 w-4" />
              Download Form
            </RippleButton>
            <RippleButton as={Link} to="/contact" className="btn-gold rounded-full px-6 py-3">
              Contact Admissions Office
            </RippleButton>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <SectionTitle eyebrow="Questions" title="Admission FAQs" align="center" />
          <div className="mt-8">
            <AccordionList items={admissionFaqs} idPrefix="admission" />
          </div>
        </div>
      </section>
    </>
  );
}