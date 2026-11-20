const items = [
  ["✚", "Expert Medical Care", "Professional healthcare backed by experience and knowledge."],
  ["♡", "Patient Focused", "Every treatment plan is tailored to individual patient needs."],
  ["✳", "Modern Approach", "Evidence-based methods and modern medical practices."],
  ["◈", "Personal Attention", "Compassionate care and attention at every stage."],
];

export default function WhyChooseMe() {
  return (
    <section className="px-5 py-14 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why Choose Me</h2><p className="mt-2 text-base text-[var(--muted)]">Committed to delivering trusted, personalized healthcare.</p></div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl bg-[var(--primary)] p-6 text-white transition hover:-translate-y-1">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-xl">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
