
import Image from "next/image";
import Link from "next/link";
import DoctorStats from "./DoctorStats";
import CallControls from "./CallControls";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 gap-4 px-4 pb-6 sm:px-6 lg:grid-cols-2"
    >
      {/* Left Hero Content */}
      <div className="flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_90%_5%,var(--hero-purple),transparent_42%),radial-gradient(circle_at_5%_100%,var(--hero-yellow),transparent_55%),linear-gradient(135deg,#f0eaff,#fffde1)] p-6 sm:p-8">
        <div>
          <span className="mb-5 inline-block rounded-full border border-primary px-3 py-1 text-xs font-medium text-primary">
            24/7 Services Available
          </span>

          <h1 className="max-w-xl text-3xl leading-tight font-extrabold tracking-tight text-title sm:text-4xl">
            Your Health, Our Technology. Trusted Doctors at Your Fingertips.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-desc">
            Whether in person or online, Doctify connects you with certified,
            compassionate healthcare professionals — quickly, safely, and
            effortlessly.
          </p>

          {/* Hero Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="#appointments"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-primary-hover"
            >
              <span>▣</span>
              Book Appointment
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-2 rounded-full border border-neutral-900 px-4 py-3 text-sm text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
            >
              See How It Works
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-white">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Floating Cards */}
        <DoctorStats />
      </div>

      {/* Right Doctor Image */}
      <div className="relative min-h-[430px] overflow-hidden rounded-[18px] bg-slate-100">
        <Image
          src="/images/doctor-team.jpg"
          alt="Professional healthcare doctors"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />

        <CallControls />
      </div>
    </section>
  );
}
