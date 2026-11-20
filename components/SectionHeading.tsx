import Link from "next/link";

type Props = { title: string; description?: string; link?: string };

export default function SectionHeading({ title, description, link }: Props) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {description && <p className="mt-2 max-w-xl text-base text-[var(--muted)]">{description}</p>}
      </div>
      {link && <Link href={link} className="shrink-0 rounded-lg bg-[var(--primary-dark)] px-5 py-3 text-base font-medium text-white transition hover:bg-[var(--primary)]">View All ↗</Link>}
    </div>
  );
}
