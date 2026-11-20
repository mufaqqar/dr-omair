import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-white/70 bg-white/55 px-4 py-3 backdrop-blur-lg md:px-7">
        <Link href="#home" className="text-xl font-bold tracking-tight">
          Dr. <span className="text-[var(--primary)]">Thomas</span>
        </Link>
        <div className="hidden items-center gap-6 text-base font-medium md:flex">
          <Link href="#home" className="hover:text-[var(--primary)]">Home</Link>
          <Link href="#about" className="hover:text-[var(--primary)]">About</Link>
          <Link href="#expertise" className="hover:text-[var(--primary)]">Expertise</Link>
          <Link href="#services" className="hover:text-[var(--primary)]">Services</Link>
          <Link href="#contact" className="hover:text-[var(--primary)]">Contact</Link>
        </div>
        <Link href="#contact" className="rounded-lg bg-[var(--primary-dark)] px-5 py-3 text-base text-white transition hover:bg-[var(--primary)]">
          Book Appointment ↗
        </Link>
      </nav>
    </header>
  );
}
