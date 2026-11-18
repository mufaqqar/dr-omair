
import Image from "next/image";

const doctors = [
  {
    name: "Doctor 1",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Doctor 2",
    image: "/images/doctor-2.jpg",
  },
];

export default function DoctorStats() {
  return (
    <div className="mt-8 flex items-end justify-between gap-3">
      {/* Doctors Statistics */}
      <div className="flex max-w-52 items-center gap-3 rounded-xl bg-white/90 p-3 shadow-sm">
        <div>
          <div className="flex items-center">
            {doctors.map((doctor) => (
              <Image
                key={doctor.name}
                src={doctor.image}
                alt={doctor.name}
                width={32}
                height={32}
                className="-ml-1 h-7 w-7 rounded-full border-2 border-white object-cover first:ml-0"
              />
            ))}

            <span className="-ml-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-secondary text-sm text-primary">
              +
            </span>
          </div>

          <p className="mt-2 text-xs leading-4 text-neutral-800">
            More than 1k+ Doctors in your Doctify
          </p>
        </div>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
          ♟
        </span>
      </div>

      {/* Calling Card */}
      <div className="flex min-w-0 items-center gap-2 rounded-xl bg-white/90 p-3 shadow-sm sm:min-w-44">
        <Image
          src="/images/doctor-1.jpg"
          alt="Doctor"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />

        <p className="flex-1 text-xs text-neutral-800">
          Calling...........
        </p>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-primary">
          ↗
        </span>
      </div>
    </div>
  );
}
