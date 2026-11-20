const reviews = [
  { name: "Michael R.", text: "Dr. Thomas took the time to listen and explain my condition clearly. I felt comfortable and well cared for throughout my treatment.", rating: "5.0" },
  { name: "William K.", text: "A very professional and caring doctor. The consultation was excellent and every detail was explained clearly.", rating: "5.0" },
];

export default function Testimonials() {
  return (
    <section className="px-5 py-16 md:px-10"><div className="mx-auto max-w-7xl rounded-3xl bg-[var(--primary)] p-6 text-white md:p-12">
      <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-center">
        <div><p className="text-sm uppercase tracking-widest text-white/70">Patient experiences</p><h2 className="mt-3 text-4xl font-semibold md:text-5xl">My Patient Reviews</h2><p className="mt-4 text-base text-white/70">Experiences from people who trust my care.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{reviews.map((review) => <article key={review.name} className="rounded-2xl bg-[var(--background)] p-6 text-[var(--foreground)]"><div className="text-2xl text-[var(--primary)]">“</div><p className="text-base leading-7">{review.text}</p><div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4"><span className="text-base font-semibold">{review.name}</span><span className="text-base">★ {review.rating}</span></div></article>)}</div>
      </div>
    </div></section>
  );
}
