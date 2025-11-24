import { Briefcase, Users, Video, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Briefcase,
    title: "Dedicated desks",
    description:
      "Personal workstations with lockable storage, ergonomic seating, and enterprise-grade connectivity.",
    perks: ["Mail handling", "Unlimited meeting credits", "Personal lockers"],
  },
  {
    icon: Users,
    title: "Private offices",
    description:
      "Sound-treated suites for teams of 2-30 with branded entries, acoustic ceilings, and climate control.",
    perks: ["Custom layouts", "Executive meeting rooms", "On-site parking"],
  },
  {
    icon: Video,
    title: "Conference studios",
    description:
      "Immersive AV experiences equipped with LED displays, broadcast cameras, and concierge support.",
    perks: ["4K conferencing", "Recording tools", "Refreshment service"],
  },
  {
    icon: Calendar,
    title: "Flexible passes",
    description:
      "Daily and weekly passes for hybrid teams who need on-demand workspace and lounge access.",
    perks: ["Credit rollover", "Guest hours", "Community programming"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#101828]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Offerings"
          title={
            <>
              Everything from hot desks to <span className="text-brand-rose">managed suites</span>
            </>
          }
          description="Choose the membership that matches your rhythm. Scale up or down without long-term lock-ins."
          align="left"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-rose/40 hover:bg-white/10"
            >
              <service.icon className="h-8 w-8 text-brand-rose" />
              <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {service.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald"></span>
                    {perk}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

