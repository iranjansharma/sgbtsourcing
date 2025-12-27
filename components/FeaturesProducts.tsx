"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ASSETS } from "@/constants";

export default function FeaturesProducts() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: `${ASSETS.PARTS}`,
      alt: "Air Craft parts",
    },
    "item-2": {
      image: `${ASSETS.TYRES}`,
      alt: "Aircraft Tyres",
    },
    "item-3": {
      image: `${ASSETS.OIL}`,
      alt: "Aircraft Turbine oil",
    },
    "item-4": {
      image: `${ASSETS.GREASE}`,
      alt: "Aircraft Grease",
    },
    "item-5": {
      image: `${ASSETS.FLUID}`,
      alt: "Aircraft Hydraulic fluid",
    },
    "item-6": {
      image: `${ASSETS.SEALANT}`,
      alt: "Aircraft Sealants & Adhesives",
    },
    "item-7": {
      image: `${ASSETS.CLEANER}`,
      alt: "Aircraft Cleaner",
    },
    "item-8": {
      image: `${ASSETS.TAPE}`,
      alt: "Aircraft Tape",
    },
    "item-9": {
      image: `${ASSETS.TOOLS}`,
      alt: "Aircraft Tools & Equipment",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-1 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Our Comprehensive Product Offerings
          </h2>
          <p>Elevate Aircraft Maintenance with Our Premium Products</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Aircraft Parts
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Aircraft maintenance demands absolute precision, and the right
                components are vital to ensure both safety and performance. We
                supply a comprehensive range of aircraft parts from trusted,
                industry-leading manufacturers—guaranteeing compatibility,
                durability, and adherence to strict aviation standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Tyres
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Reliability, durability, and performance SGTBS delivers premium
                Goodyear aviation tires, a brand trusted worldwide for nearly a
                century. Designed for general aviation, commercial fleets, and
                military aircraft alike, Goodyear tires are engineered to
                perform under extreme conditions, ensuring maximum safety and
                efficiency from takeoff to landing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Turbine oil
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Turbine oil is the lifeblood of jet engines—ensuring smooth
                operation, minimizing wear, and delivering superior thermal
                stability. By preventing harmful deposits and sustaining peak
                efficiency in extreme conditions, it remains essential for
                commercial, military, and industrial aviation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Grease
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Aircraft grease is vital to ensuring the performance,
                reliability, and longevity of critical aviation systems.
                Engineered to withstand the toughest operating conditions, it
                offers exceptional protection against temperature extremes,
                corrosion, and wear. From landing gear and control mechanisms to
                engines, aviation-grade greases deliver smooth operation,
                enhanced safety, and reduced maintenance costs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Hydraulic fluid
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Precision is the cornerstone of aircraft maintenance, and having
                the right components is essential for safety and optimal
                performance. We provide a wide range of aircraft parts sourced
                from leading manufacturers, ensuring reliability, durability,
                and full compliance with aviation industry standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Sealants & Adhesives
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Aircraft sealants and adhesives are critical to maintaining
                structural integrity, preventing leaks, and ensuring long-term
                durability. Specially formulated to endure extreme temperatures,
                pressure variations, and chemical exposure, they play an
                indispensable role in safeguarding aircraft safety and
                optimizing performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Cleaner
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Cee-Bee military cleaners are engineered to meet the stringent
                demands of military aviation maintenance, ensuring optimal
                performance and longevity of aircraft components. These advanced
                cleaning solutions are specifically formulated to remove tough
                contaminants like grease, hydraulic fluids, carbon buildup, and
                corrosion while maintaining the integrity of delicate aviation
                materials.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Tape
                </div>
              </AccordionTrigger>
              <AccordionContent>
                supplies high-performance tapes from leading OEM 3M, designed to
                meet the demanding requirements of aerospace applications. These
                tapes provide superior protection, bonding, and fastening
                solutions for various aircraft components, ensuring durability
                and efficiency in extreme environments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Tools & Equipment
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Aircraft maintenance demands specialized tools that offer
                precision, strength, and compliance with industry standards. Our
                selection of aircraft tools is designed for mechanics,
                technicians, and engineers to ensure seamless servicing and
                repairs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-center-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={"2000"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
