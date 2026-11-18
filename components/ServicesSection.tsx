
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "✚",
    title: "General Consultation",
    description:
      "Get professional medical advice and personalized healthcare support from experienced doctors.",
  },
  {
    icon: "♡",
    title: "Heart & Cardiology",
    description:
      "Comprehensive heart health services, diagnosis, and preventive care for a healthier life.",
  },
  {
    icon: "✿",
    title: "Mental Health",
    description:
      "Access compassionate mental health professionals and personalized wellness guidance.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#fafafa] px-4 py-6 sm:px-6 sm:py-8"
    >
      <div className="rounded-[20px] bg-white px-5 py-10 sm:px-8 lg:py-12">
        {/* Section Heading */}
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-title sm:text-4xl">
            Medical Support for
            <br />
            Every Need
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-desc">
            Comprehensive healthcare services designed to meet all your
            medical needs with convenience and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              highlighted={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
