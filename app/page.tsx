import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
 <main className="min-h-screen bg-[radial-gradient(ellipse_at_5%_20%,#fff0d9,transparent_35%),radial-gradient(ellipse_at_95%_10%,#d9c5ff,transparent_35%),linear-gradient(135deg,#f9e9d8,#f5f0e8_50%,#e8dcff)] px-3 py-5 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-3xl bg-white shadow-sm">
        

        <HeroSection />

        <ServicesSection />
      </div>
    </main>
  );
}
