import Link from "next/link";

const faqs = [
  { q: "How can I book an appointment with Dr. Thomas?", a: "You can request an appointment through the contact form on this website or contact the clinic directly." },
  { q: "What conditions do you treat?", a: "I provide internal medicine consultations, chronic disease management and preventive healthcare." },
  { q: "Do you offer online consultations?", a: "Please contact the clinic to confirm the availability of online consultations." },
];

export default function FAQ() {
  return (
    <section className="px-5 py-16 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.7fr_1.3fr]">
      <div><h2 className="text-4xl font-semibold">Any Questions?</h2><p className="mt-3 text-base leading-6 text-[var(--muted)]">Find answers to common questions about consultations and services.</p><Link href="#contact" className="mt-6 inline-flex rounded-lg bg-[var(--primary-dark)] px-5 py-3 text-base text-white">Ask a Question ↗</Link></div>
      <div className="space-y-3">{faqs.map((faq, i) => <details key={faq.q} open={i === 0} className="group rounded-xl border border-[var(--border)] bg-white/30 p-5 open:bg-[var(--primary)] open:text-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">{faq.q}<span className="text-xl">+</span></summary><p className="mt-4 text-base leading-7 opacity-80">{faq.a}</p></details>)}</div>
    </div></section>
  );
}
