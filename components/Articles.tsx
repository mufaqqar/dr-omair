import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const articles = [
  { title: "Understanding Your Overall Health", image: "article-health.svg", date: "Health & Wellness" },
  { title: "Tips for a Healthier Lifestyle", image: "article-lifestyle.svg", date: "Healthy Living" },
];

export default function Articles() {
  return (
    <section className="px-5 py-16 md:px-10"><div className="mx-auto max-w-7xl">
      <SectionHeading title="Read Articles" description="Helpful health insights, advice and updates." link="#contact" />
      <div className="grid gap-5 md:grid-cols-2">{articles.map((article) => <article key={article.title} className="grid overflow-hidden rounded-2xl bg-[var(--primary)] text-white sm:grid-cols-2">
        <div className="relative min-h-52"><Image src={`/images/${article.image}`} alt={article.title} fill className="object-cover" /></div>
        <div className="flex flex-col justify-between p-5"><div><p className="text-sm text-white/60">{article.date}</p><h3 className="mt-3 text-xl font-semibold">{article.title}</h3></div><Link href="#contact" className="mt-5 text-base">Read Article ↗</Link></div>
      </article>)}</div>
    </div></section>
  );
}
