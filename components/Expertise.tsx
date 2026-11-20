import Image from "next/image";
import SectionHeading from "./SectionHeading";

const expertise = [
  { title: "Internal Medicine", image: "expertise-internal.svg", desc: "Comprehensive diagnosis and treatment." },
  { title: "Diagnostic Services", image: "expertise-diagnostics.svg", desc: "Advanced diagnostics and personalized care." },
  { title: "Preventive Healthcare", image: "expertise-preventive.svg", desc: "Preventive care for a healthier life." },
];

export default function Expertise() {
  return (
    <section id="expertise" className="px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Areas of Expertise" description="Specialized medical services for your health and wellbeing." link="#services" />
        <div className="grid gap-5 md:grid-cols-3">
          {expertise.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl">
              <div className="relative h-64 overflow-hidden rounded-2xl"><Image src={`/images/${item.image}`} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="-mt-1 flex items-center justify-between rounded-xl bg-[var(--primary)] px-4 py-4 text-white">
                <div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-1 text-base text-white/75">{item.desc}</p></div><span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
