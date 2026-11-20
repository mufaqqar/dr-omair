import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-9 md:grid-cols-2">
        <div className="relative h-[280px] overflow-hidden rounded-2xl md:h-[370px]">
          <Image src="/images/about-consultation.svg" alt="Doctor consulting a patient" fill className="object-cover" />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">Get to know me</p>
          <h2 className="text-4xl font-semibold md:text-5xl">About Me</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">Dr. Thomas is an Internal Medicine specialist skilled in diagnosing, treating, and preventing chronic diseases. My goal is to provide personalized care and help every patient achieve better long-term health.</p>
          <Link href="#contact" className="mt-6 inline-flex rounded-lg bg-[var(--primary-dark)] px-5 py-3 text-base text-white">Know More ↗</Link>
        </div>
      </div>
    </section>
  );
}
