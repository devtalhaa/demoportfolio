"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes. Memberships are flexible with only 30 days notice required. Our team will guide you through reconfiguring your office or relocating to another branch.",
  },
  {
    question: "Do you provide IT support and custom network setups?",
    answer:
      "Absolutely. Dedicated VLANs, static IPs, and secure WiFi slices are available. Our on-site specialists coordinate with your IT team for compliance checks.",
  },
  {
    question: "Is parking available for team members and guests?",
    answer:
      "Every location includes reserved member parking along with guest validation and valet support during business hours.",
  },
  {
    question: "What health & safety measures are in place?",
    answer:
      "Daily sanitization, fresh air systems, contactless entry, and onsite first responders ensure a safe workplace experience.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#101828]">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Support"
          title="Answers to common questions"
          description="Our community team is available 24/7 to help with memberships, tours, and enterprise deployments."
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <article key={faq.question} className="rounded-2xl border border-white/10 bg-white/5">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-white"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <span className="text-brand-emerald">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="px-6 pb-6 text-sm text-slate-300">{faq.answer}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

