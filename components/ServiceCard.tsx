
import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
};

export default function ServiceCard({
  icon,
  title,
  description,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg ${
        highlighted ? "bg-primary text-white" : "bg-white"
      }`}
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-2xl ${
          highlighted
            ? "bg-white/20 text-white"
            : "bg-secondary text-primary"
        }`}
      >
        {icon}
      </div>

      <h3
        className={`mb-3 text-lg font-bold ${
          highlighted ? "text-white" : "text-title"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm leading-relaxed ${
          highlighted ? "text-white/80" : "text-desc"
        }`}
      >
        {description}
      </p>

      <Link
        href="#appointments"
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
          highlighted ? "text-white" : "text-primary"
        }`}
      >
        Learn More <span>→</span>
      </Link>
    </div>
  );
}
