import About from "@/components/About";
import Appointment from "@/components/Appointment";
import Articles from "@/components/Articles";
import CaseStudies from "@/components/CaseStudies";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseMe from "@/components/WhyChooseMe";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <About />
      <WhyChooseMe />
      <Expertise />
      <Services />
      <Pricing />
      <Appointment />
      <CaseStudies />
      <FAQ />
      <Testimonials />
      <Articles />
      <Newsletter />
    </main>
  );
}
