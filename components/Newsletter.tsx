export default function Newsletter() {
  return (
    <section className="px-5 py-16 md:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-3xl border border-white bg-white/30 p-8 md:flex-row md:p-14">
      <div><h2 className="text-3xl font-semibold md:text-4xl">Get in touch with me</h2><p className="mt-2 text-base text-[var(--muted)]">Subscribe for health updates and useful articles.</p></div>
      <form action="mailto:info@example.com" method="post" encType="text/plain" className="flex w-full max-w-md gap-2"><input name="email" type="email" required placeholder="Your email address" className="min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-base outline-none" /><button className="rounded-lg bg-[var(--primary-dark)] px-5 py-3 text-base text-white">Send ↗</button></form>
    </div></section>
  );
}
