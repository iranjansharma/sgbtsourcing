import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlugZap, BookImage } from "lucide-react";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative z-1 text-center max-w-3xl">
        <Badge className="px-4 bg-[#8b51fe] text-white rounded-full py-1 border-none">
          SGTBS Sourcing Solutions Pvt Ltd 🚀
        </Badge>
        <h1 className="mt-6 max-w-[20ch] text-white drop-shadow-lg text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Your Trusted Partner in Aircraft Parts Supply Across India
        </h1>
        <p className="px-6 mt-6 max-w-[65ch] text-gray-200 text-base xs:text-lg leading-relaxed">
          SGTBS Sourcing Solutions Pvt Ltd is a reliable partner for the supply
          of aircraft parts in India, serving both private and government
          entities. With over 3 years of proven expertise, we ensure timely
          sourcing, genuine OEM products, and dependable support tailored to
          aviation and defense requirements.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-lg hover:scale-103 ease-in-out duration-200 bg-[#febd59] text-black hover:text-white"
            >
              Connect Now <PlugZap className="ml-2 !h-5 !w-5" />
            </Button>
          </Link>
          <Link href="/SGTBS.pdf">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-md text-black !border-[#8b51fe] bg-[#8b51fe] hover:bg-white/20 hover:text-white ease-in-out duration-200"
            >
              <BookImage className="mr-2 !h-5 !w-5" /> Brochure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
