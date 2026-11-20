
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden sm:min-h-[600px] lg:min-h-[clamp(445px,64vw,720px)]">

      {/* Background Stripes */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(95,129,144,0.12), transparent 70%),
            repeating-linear-gradient(
              90deg,
              rgba(95,129,144,0.07) 0px,
              rgba(95,129,144,0.07) 18px,
              transparent 19px,
              transparent 32px
            )
          `,
        }}
      />

      {/* Hero Heading */}
      <div className="absolute left-0 right-0 top-[19%] z-10 text-center sm:top-[24%]">
        <h1 className="whitespace-nowrap text-6xl font-bold leading-none tracking-[-0.06em] text-[var(--primary)] opacity-70 sm:text-7xl lg:text-8xl">
          Meet Dr.Thomas
        </h1>
      </div>

      {/* Doctor Image */}
      <div className="absolute bottom-[105px] left-1/2 z-20 h-[55%] w-[90%] max-w-[470px] -translate-x-1/2 sm:bottom-0 sm:h-[80%] sm:w-[75%]">
        <Image
          src="/images/doctor.png"
          alt="Dr. Thomas - Professional Doctor"
          fill
          priority
          sizes="(max-width: 640px) 90vw, 470px"
          className="object-contain object-bottom"
        />
      </div>

      {/* Doctor Qualification */}
      <div className="absolute right-5 top-[39%] z-30 sm:right-[5%] sm:top-[48%] lg:right-[5.5%]">
        <p className="text-xs font-normal text-[var(--secondary)] sm:text-sm">
          MBBS, FCPS (Medicine)
        </p>
      </div>

      {/* Appointment Button */}
      <div className="absolute bottom-6 left-5 z-30 sm:bottom-14 sm:left-[5%] lg:bottom-[12%]">
        <Link
          href="/appointment"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-[var(--secondary)]"
        >
          Book Appointment
          <span>↗</span>
        </Link>
      </div>

      {/* Statistics */}
      <div className="absolute bottom-6 right-5 z-30 flex items-center gap-5 sm:bottom-12 sm:right-[5%] sm:gap-10 lg:bottom-[11%]">

        {/* Patients */}
        <div className="text-center">
          <h3 className="text-2xl font-medium tracking-tight text-[var(--primary)] sm:text-4xl">
            10k+
          </h3>
          <p className="mt-1 whitespace-nowrap text-[9px] text-[var(--muted)] sm:text-xs">
            Satisfied Patients
          </p>
        </div>

        {/* Experience */}
        <div className="text-center">
          <h3 className="text-2xl font-medium tracking-tight text-[var(--primary)] sm:text-4xl">
            10+
          </h3>
          <p className="mt-1 whitespace-nowrap text-[9px] text-[var(--muted)] sm:text-xs">
            Years of Experience
          </p>
        </div>

      </div>

    </section>
  );
}
