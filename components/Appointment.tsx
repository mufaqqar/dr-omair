import Image from "next/image";

export default function Appointment() {
  return (
    <section id="contact" className="px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-[var(--primary)] text-white">
          <div className="relative h-72"><Image src="/images/appointment-consultation.svg" alt="Doctor meeting with patient" fill className="object-cover" /></div>
          <div className="grid grid-cols-3 gap-4 p-6 text-sm">
            <div><p className="text-white/60">Location</p><p className="mt-2 font-medium">Medical Center</p></div>
            <div><p className="text-white/60">Availability</p><p className="mt-2 font-medium">Mon - Sat</p></div>
            <div><p className="text-white/60">Working Hours</p><p className="mt-2 font-medium">9 AM - 5 PM</p></div>
          </div>
        </div>
        <div className="rounded-2xl bg-[var(--primary)] p-7 text-white md:p-9">
          <h2 className="text-3xl font-semibold">Contact Info</h2><p className="mt-2 text-base text-white/70">Send a message to schedule your consultation.</p>
          <form action="mailto:info@example.com" method="post" encType="text/plain" className="mt-7 space-y-4">
            <input required name="name" placeholder="Your Name" className="w-full rounded-lg border border-white/40 bg-transparent px-4 py-3 text-base outline-none placeholder:text-white/60" />
            <input required name="email" type="email" placeholder="Email Address" className="w-full rounded-lg border border-white/40 bg-transparent px-4 py-3 text-base outline-none placeholder:text-white/60" />
            <input name="phone" type="tel" placeholder="Phone Number" className="w-full rounded-lg border border-white/40 bg-transparent px-4 py-3 text-base outline-none placeholder:text-white/60" />
            <select name="service" defaultValue="" required className="w-full rounded-lg border border-white/40 bg-[var(--primary)] px-4 py-3 text-base text-white outline-none"><option value="" disabled>Select a Service</option><option>General Consultation</option><option>Chronic Disease Care</option><option>Preventive Healthcare</option></select>
            <textarea name="message" required placeholder="Your Message" rows={4} className="w-full resize-none rounded-lg border border-white/40 bg-transparent px-4 py-3 text-base outline-none placeholder:text-white/60" />
            <button type="submit" className="w-full rounded-lg bg-[var(--primary-dark)] px-5 py-3 text-base font-medium hover:bg-white hover:text-[var(--primary-dark)]">Send Message ↗</button>
          </form>
          <p className="mt-3 text-sm text-white/60">Demo form: replace the email address or connect your preferred form backend.</p>
        </div>
      </div>
    </section>
  );
}
