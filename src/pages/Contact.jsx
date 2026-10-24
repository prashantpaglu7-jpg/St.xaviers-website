import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, Send, Check, Navigation } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import { school } from "@/data/school";
import { images } from "@/data/media";

const subjects = ["Admission", "General Inquiry", "Complaint", "Feedback", "Other"];

const emptyForm = { name: "", email: "", phone: "", subject: "Admission", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (form.message.trim().length < 10) next.message = "Please add a little more detail (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await base44.entities.Inquiry.create({ ...form, source: "contact" });
      setStatus("success");
      setForm(emptyForm);
    } catch (error) {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-[0.88rem] text-ink placeholder:text-mutedink/60 transition focus:outline-none focus:ring-2 focus:ring-gold/35 ${
      errors[field] ? "border-red-400" : "border-gold-light focus:border-gold"
    }`;

  return (
    <>
      <PageHero
        image={images.buildingFront}
        title="Contact Us"
        current="Contact"
        subtitle="We'd love to hear from you — whether it's an admission question, a concern, or simply a visit you'd like to arrange."
        minHeight="min-h-[44vh]"
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {[
            { icon: MapPin, label: "Address", lines: [school.address], href: "https://maps.google.com/?q=Goshala+Road+Ramna+Muzaffarpur+Bihar+842002" },
            { icon: Phone, label: "Phone", lines: school.phones, href: `tel:${school.phones[0]}` },
            { icon: Mail, label: "Email", lines: [school.email], href: `mailto:${school.email}` },
          ].map((card, index) => (
            <Reveal key={card.label} delay={index * 0.1}>
              <div className="card-surface card-lift h-full p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <card.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-gold-ink">{card.label}</p>
                {card.lines.map((line) => (
                  <a
                    key={line}
                    href={card.href}
                    className="mt-1 block text-[0.9rem] leading-relaxed text-navy transition hover:text-gold-ink"
                  >
                    {line}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-site py-0">
          <Reveal className="overflow-hidden rounded-xl border border-gold-light bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
            <iframe
              title="St. Xavier's Jr./Sr. School on the map"
              src="https://www.google.com/maps?q=Goshala%20Road%2C%20Ramna%2C%20Muzaffarpur%2C%20Bihar%20842002&output=embed"
              className="block h-[340px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="Send a message" title="Write to the school office" />
            <form onSubmit={submit} className="mt-7 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[0.78rem] font-medium text-navy">
                    Name <span className="text-gold-ink">*</span>
                  </label>
                  <input id="name" value={form.name} onChange={update("name")} className={inputClass("name")} placeholder="Your full name" />
                  {errors.name && <p className="mt-1 text-[0.72rem] text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[0.78rem] font-medium text-navy">
                    Email <span className="text-gold-ink">*</span>
                  </label>
                  <input id="email" type="email" value={form.email} onChange={update("email")} className={inputClass("email")} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1 text-[0.72rem] text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[0.78rem] font-medium text-navy">
                    Phone <span className="text-gold-ink">*</span>
                  </label>
                  <input id="phone" value={form.phone} onChange={update("phone")} className={inputClass("phone")} placeholder="10-digit mobile number" />
                  {errors.phone && <p className="mt-1 text-[0.72rem] text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-[0.78rem] font-medium text-navy">
                    Subject
                  </label>
                  <select id="subject" value={form.subject} onChange={update("subject")} className={inputClass("subject")}>
                    {subjects.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-[0.78rem] font-medium text-navy">
                  Message <span className="text-gold-ink">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className={inputClass("message")}
                  placeholder="How can we help?"
                />
                {errors.message && <p className="mt-1 text-[0.72rem] text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold w-full rounded-lg px-6 py-3 sm:w-auto"
              >
                {status === "loading" ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-deep/30 border-t-navy-deep" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 rounded-lg border border-success/40 bg-success/10 px-4 py-3 text-[0.82rem] text-[#2f6b32]">
                  <Check className="h-4 w-4" />
                  Thank you — your message has reached the school office. We reply within two working days.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-[0.82rem] text-red-700">
                  Something went wrong sending your message. Please call {school.phones[0]} instead.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-4">
            <div className="card-surface p-6">
              <h3 className="flex items-center gap-2 text-[0.95rem] font-semibold text-navy">
                <Clock className="h-4 w-4 text-gold-ink" />
                Office hours
              </h3>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-mutedink">
                Monday to Saturday, 8:00 AM – 2:00 PM.
                <br />
                Sunday closed.
              </p>
            </div>

            <div className="card-surface p-6">
              <h3 className="text-[0.95rem] font-semibold text-navy">Find us</h3>
              <p className="mt-3 flex items-start gap-2 text-[0.85rem] leading-relaxed text-mutedink">
                <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink" />
                500 metres from Ramna Bus Stand, on Goshala Road. Visitor parking is available at the main gate.
              </p>
            </div>

            <div className="card-surface p-6">
              <h3 className="text-[0.95rem] font-semibold text-navy">Follow the school</h3>
              <div className="mt-3 flex gap-2">
                {[
                  { href: school.facebook, icon: Facebook, label: "Facebook" },
                  { href: "https://www.youtube.com", icon: Youtube, label: "YouTube" },
                  { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-light text-navy transition hover:border-gold hover:bg-gold hover:text-navy-deep"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <SectionTitle eyebrow="Quick answers" title="Before you write" align="center" />
          <dl className="mt-8 space-y-4">
            {[
              { q: "Which number should I call for admissions?", a: `Call ${school.phones[0]} or ${school.phones[1]} between 8:00 AM and 2:00 PM on working days.` },
              { q: "What are the office hours?", a: "Monday to Saturday, 8:00 AM to 2:00 PM. The office is closed on Sundays and gazetted holidays." },
              { q: "How do I reach the school?", a: "The campus is on Goshala Road, Ramna — about 500 metres from Ramna Bus Stand. Auto-rickshaws from Muzaffarpur station take roughly fifteen minutes." },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-gold-light bg-white p-5">
                <dt className="text-[0.9rem] font-semibold text-navy">{item.q}</dt>
                <dd className="mt-1.5 text-[0.85rem] leading-relaxed text-mutedink">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}