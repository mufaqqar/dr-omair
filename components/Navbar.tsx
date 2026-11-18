
import Link from "next/link";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Appointments", href: "#appointments" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-7">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-extrabold text-primary"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
          ✚
        </span>
        Doctify
      </Link>

      {/* Navigation */}
      <nav className="order-3 w-full overflow-x-auto lg:order-none lg:w-auto">
        <ul className="flex min-w-max items-center gap-5 text-sm">
          {navigation.map((item, index) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-primary ${
                  index === 0
                    ? "font-semibold text-primary"
                    : "text-neutral-800"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        <Link
          href="#signup"
          className="rounded-full border border-neutral-800 px-4 py-2 text-sm transition hover:border-primary hover:bg-primary hover:text-white sm:px-5"
        >
          Sign up
        </Link>

        <Link
          href="#login"
          className="rounded-full bg-neutral-950 px-5 py-2 text-sm text-white transition hover:bg-primary"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
