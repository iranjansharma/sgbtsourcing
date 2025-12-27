import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlugZap, BookImage } from "lucide-react";
import Link from "next/link";
import Features06Page from "@/components/features-06/features-06";
import { QualityData } from "@/constants";

export const metadata: Metadata = {
  title: "Quality & Compliance – Certified OEM Aviation Parts | SGTBS Aviation",
  description:
    "SGTBS Aviation ensures strict compliance, traceability, and quality assurance for all OEM aircraft parts and aviation spares. Delivering reliability through global standards and certified vendors.",
  keywords: [],
  openGraph: {
    type: "website",
    siteName: "Quality & Compliance – Certified OEM Aviation Parts | SGTBS Aviation",
    locale: "en_US",
    url: "https://sgtbsourcing.com",
    title: "Quality & Compliance – Certified OEM Aviation Parts | SGTBS Aviation",
    description:
      "SGTBS Aviation ensures strict compliance, traceability, and quality assurance for all OEM aircraft parts and aviation spares. Delivering reliability through global standards and certified vendors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aircraft Parts Supply | SGTBS ",
      },
    ],
  },
  authors: [
    {
      name: "Aircraft Parts Supply | SGTBS",
      url: "https://sgtbsourcing.com",
    },
  ],
  creator: "Aircraft Parts Supply | SGTBS",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

const page = () => {
  return (
    <main className="pt-16 xs:pt-20 sm:pt-24">
      <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/quality.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-1 md:mt-6 flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <Badge className="px-4 bg-[#8b51fe] text-white rounded-full py-1 border-none">
              SGTBS Sourcing Solutions Pvt Ltd 🚀
            </Badge>
            <h1 className="mt-6 max-w-[20ch] text-white drop-shadow-lg text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Quality
            </h1>
            <p className="mt-6 max-w-[60ch] text-gray-200 xs:text-lg leading-relaxed">
              Ensuring excellence through rigorous quality control, certified
              sourcing, and compliance with industry standards for all aviation
              components.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full z sm:w-auto rounded-full text-base shadow-lg hover:scale-103 ease-in-out duration-200 bg-[#febd59] text-black hover:text-white"
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
      </div>

      {/* Features Section */}
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <Features06Page
          HEAD="Quality"
          DESC="Ensuring excellence through rigorous quality control, certified sourcing, and compliance with industry standards for all aviation components."
          features={QualityData}
        />
      </div>
    </main>
  );
};

export default page;
