import ContactSection from "@/components/contact-02/contactSection";
import Service from "@/components/features";
import FeaturesProducts from "@/components/FeaturesProducts";
import Hero from "@/components/hero";
import Sector from "@/components/sector";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <>
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <LogoCloud />
        <Service />
        <Sector />
        <FeaturesProducts />
        <ContactSection />
      </main>
    </>
  );
}
