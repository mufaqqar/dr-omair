import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "General Consultation", image: "service-consultation.svg", desc: "Professional medical consultation and health assessment." },
  { title: "Chronic Disease Care", image: "service-care.svg", desc: "Ongoing support and treatment for chronic conditions." },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-7 rounded-3xl bg-[var(--primary)] p-6 text-white md:grid-cols-[.8fr_1.2fr] md:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-white/70">What I offer</p><h2 className="mt-3 text-4xl font-semibold md:text-5xl">My Services</h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-white/80">Comprehensive medical services designed to support your health through every stage of life.</p>
          <Link href="#contact" className="mt-7 inline-flex w-fit rounded-lg border border-white/50 px-5 py-3 text-base hover:bg-white/10">Contact Me ↗</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((item) => <article key={item.title} className="overflow-hidden rounded-2xl bg-[var(--background)] text-[var(--foreground)]">
            <div className="relative h-48"><Image src={`/images/${item.image}`} alt={item.title} fill className="object-cover" /></div>
            <div className="p-4"><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.desc}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
