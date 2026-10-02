import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "new contact"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    e.currentTarget.reset();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section-wrap pb-24">
      <SectionTitle
        eyebrow="07 / Contact"
        title="Have an ML problem worth exploring?"
        text="I’m open to collaborations, freelance work, product ideas, and full-time opportunities. Reach out directly by email, LinkedIn, or use the form below to draft a message instantly."
      />
      <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
        <div className="glass-panel p-7">
          <div className="space-y-5">
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <Mail size={18} /> <span>{profile.email}</span>
            </a>
            <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> <span>linkedin.com</span>
            </a>
            <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> <span>github.com</span>
            </a>
            <a className="contact-row" href={`tel:${profile.phone.replace(/\D/g, "")}`}>
              <Phone size={18} /> <span>{profile.phone}</span>
            </a>
            <div className="contact-row"><MapPin size={18} /> <span>{profile.location}</span></div>
          </div>
        </div>

        <form onSubmit={submit} className="glass-panel p-7 sm:p-9">
          {sent && (
            <div className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-sm text-emerald-300">
              <CheckCircle2 size={17} /> Your email app should open with a pre-filled message. You can also write directly to {profile.email}.
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className="field-label">Name</span>
              <input required name="name" className="field" placeholder="Your name" />
            </label>
            <label>
              <span className="field-label">Email</span>
              <input required type="email" name="email" className="field" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="field-label">Message</span>
            <textarea required name="message" rows={6} className="field resize-none" placeholder="Tell me what you're building..." />
          </label>
          <button type="submit" className="cta-primary mt-5">
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
