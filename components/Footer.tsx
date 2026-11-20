import Link from "next/link";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();
  return (
    <footer className="px-5 pb-6 pt-12 md:px-10"><div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[var(--primary)] p-6 text-white md:p-10">
      <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-8 md:flex-row"><div><h2 className="text-4xl font-semibold">Let’s Connect<br />With Me</h2><p className="mt-3 text-base text-white/70">Your health, my priority.</p></div><div className="flex items-center gap-4 text-base"><Link href="#home">Home ↗</Link><Link href="#about">About ↗</Link><Link href="#contact">Contact ↗</Link></div></div>
      <div className="mt-8 grid gap-8 rounded-2xl bg-[var(--background)] p-6 text-[var(--foreground)] sm:grid-cols-2 lg:grid-cols-4">
        <div><h3 className="text-lg font-bold">Dr. Thomas</h3><p className="mt-2 text-sm text-[var(--muted)]">Internal Medicine Specialist</p></div>
        <div><h4 className="text-base font-semibold">Quick Links</h4><div className="mt-3 flex flex-col gap-2 text-sm text-[var(--muted)]"><Link href="#about">About Me</Link><Link href="#expertise">Expertise</Link><Link href="#services">Services</Link></div></div>
        <div><h4 className="text-base font-semibold">Contact</h4><p className="mt-3 text-sm text-[var(--muted)]">Email: info@example.com</p><p className="mt-2 text-sm text-[var(--muted)]">Phone: +1 234 567 890</p></div>
        <div><h4 className="text-base font-semibold">Working Hours</h4><p className="mt-3 text-sm text-[var(--muted)]">Monday - Saturday</p><p className="mt-2 text-sm text-[var(--muted)]">9:00 AM - 5:00 PM</p></div>
      </div>
      <p className="pt-6 text-center text-sm text-white/70">© {year} Dr. Thomas. All rights reserved.</p>
    </div></footer>
  );
}
