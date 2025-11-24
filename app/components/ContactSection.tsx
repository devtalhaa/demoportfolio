import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#101828]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionHeading
              kicker="Contact"
              title="Book a private tour"
              description="Tell us about your team, expansion plans, or one-off events. We'll curate a workspace plan and schedule an on-site walkthrough."
              align="left"
            />
            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Full name
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none"
                    placeholder="Ayesha Rahman"
                    required
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Company email
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Team size
                  <input
                    type="number"
                    min={1}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none"
                    placeholder="25"
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Preferred location
                  <select
                    className="mt-2 w-full rounded-2xl border cursor-pointer border-white/15  px-4 py-3 text-white focus:border-brand-rose focus:outline-none"
                  >
                    <option className="bg-[#050b14] text-white ">I-10 Markaz</option>
                    <option className="bg-[#050b14] text-white">Gulberg Greens</option>
                    <option className="bg-[#050b14] text-white">Blue Area</option>
                  </select>
                </label>
              </div>
              <label className="text-sm text-slate-200">
                Message
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none"
                  placeholder="Share your move-in timeline, special requirements, or event details."
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-[#E03182] mt-4 cursor-pointer px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-rose/30 transition hover:translate-y-0.5 sm:w-auto"
              >
                Send request
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionHeading
              kicker="Support"
              title="We're one call away"
              description="Talk with our concierge team for white-glove onboarding."
              align="left"
            />
            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-4">
                <Phone className="h-5 w-5 text-brand-emerald" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+92 300 1234567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-4">
                <Mail className="h-5 w-5 text-brand-emerald" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@cowork24.pk</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-4">
                <MapPin className="h-5 w-5 text-brand-emerald" />
                <div>
                  <p className="font-semibold text-white">Head office</p>
                  <p>I-10 Markaz, Islamabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

