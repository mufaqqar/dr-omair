import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const cases = [
  { title: "Comprehensive Heart Health", image: "case-heart.svg", category: "Patient Success Story" },
  { title: "Managing Chronic Conditions", image: "case-checkup.svg", category: "Medical Case Study" },
];

export default function CaseStudies() {
  return (
    <section className="px-5 py-16 md:px-10"><div className="mx-auto max-w-7xl">
      <SectionHeading title="Case Studies" description="A closer look at patient care and medical experiences." link="#contact" />
      <div className="grid gap-5 md:grid-cols-2">
        {cases.map((item) => <article key={item.title} className="grid overflow-hidden rounded-2xl bg-white/50 sm:grid-cols-2">
          <div className="relative min-h-56"><Image src={`/images/${item.image}`} alt={item.title} fill className="object-cover" /></div>
          <div className="flex flex-col justify-between bg-[var(--primary)] p-5 text-white"><div><p className="text-base text-white/70">{item.category}</p><h3 className="mt-3 text-2xl font-semibold">{item.title}</h3></div><Link href="#contact" className="mt-6 inline-flex text-base">Read Case Study ↗</Link></div>
        </article>)}
      </div>
    </div></section>
  );
}
