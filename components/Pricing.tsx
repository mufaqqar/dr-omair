import Link from "next/link";

const plans = [
  { name: "Basic Consultation", price: "$30", features: ["Initial health assessment", "Medical advice", "Basic examination"] },
  { name: "Standard Checkup", price: "$60", features: ["Complete health checkup", "Detailed consultation", "Treatment plan"], featured: true },
  { name: "Comprehensive Care", price: "$100", features: ["Full medical evaluation", "Priority consultation", "Follow-up support"] },
];

export default function Pricing() {
  return (
    <section className="px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-xl text-center"><h2 className="text-4xl font-semibold md:text-5xl">Consultation Fees</h2><p className="mt-3 text-base text-[var(--muted)]">Transparent pricing for quality healthcare services.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => <div key={plan.name} className={`rounded-2xl border border-[var(--border)] p-7 ${plan.featured ? "bg-[var(--primary)] text-white shadow-xl" : "bg-white/30"}`}>
            <h3 className="text-xl font-semibold">{plan.name}</h3><h4 className="mt-5 text-5xl font-bold">{plan.price}</h4><p className={`mt-1 text-base ${plan.featured ? "text-white/70" : "text-[var(--muted)]"}`}>Per consultation</p>
            <div className="my-6 h-px bg-current opacity-20" /><ul className="space-y-4 text-base">{plan.features.map((feature) => <li key={feature}>✓ &nbsp; {feature}</li>)}</ul>
            <Link href="#contact" className={`mt-8 block rounded-lg px-4 py-3 text-center text-base ${plan.featured ? "bg-white text-[var(--primary-dark)]" : "bg-[var(--primary-dark)] text-white"}`}>Book Now ↗</Link>
          </div>)}
        </div>
      </div>
    </section>
  );
}
