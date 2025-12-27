"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetOverlay,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { Mservices, Mindustries, Mquality, Mmedia, Mabout } from "@/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const NavigationSheet = () => {
  const [accordionOpen, setAccordionOpen] = useState<string | undefined>(
    undefined
  );
  const controls = useAnimation();

  const handleLinkClick = () => {
    setAccordionOpen(undefined);
  };

  return (
    <Sheet>
      {/* Menu button */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full md:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      {/* Overlay with fade + close on click */}
      <SheetClose asChild>
        <SheetOverlay
          className="
            bg-black/50 fixed inset-0 z-40
            transition-all duration-300 ease-in-out
            data-[state=closed]:opacity-0 
            data-[state=open]:opacity-100
          "
        />
      </SheetClose>

      {/* Swipeable Drawer */}
      <SheetContent
        side="right"
        className="w-3/4 sm:max-w-xs p-0 z-50 overflow-hidden bg-white"
      >
        <motion.div
          className="h-full p-6"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={controls}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100 || info.velocity.x > 500) {
              // Close if dragged enough or fast swipe
              document
                .querySelector<HTMLElement>("[data-radix-sheet-close]")
                ?.click();
            } else {
              // Snap back (rubber band effect)
              controls.start({
                x: 0,
                transition: { type: "spring", stiffness: 300 },
              });
            }
          }}
        >
          {/* Accessible hidden title */}
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          </SheetHeader>

          {/* Logo */}
          <div className="mb-6">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={accordionOpen}
              onValueChange={setAccordionOpen}
            >
              {/* Services */}
              <AccordionItem value="services">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                  {Mservices.map((c) => (
                    <SheetClose asChild key={c.title}>
                      <Link
                        href={c.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        <c.icon className="w-5 h-5 inline-block mr-2" />
                        {c.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Industries */}
              <AccordionItem value="industries">
                <AccordionTrigger>Industries</AccordionTrigger>
                <AccordionContent>
                  {Mindustries.map((c) => (
                    <SheetClose asChild key={c.title}>
                      <Link
                        href={c.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        <c.icon className="w-5 h-5 inline-block mr-2" />
                        {c.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Quality */}
              <AccordionItem value="quality">
                <AccordionTrigger>Quality and Compliance</AccordionTrigger>
                <AccordionContent>
                  {Mquality.slice(0, 3).map((c) => (
                    <SheetClose asChild key={c.title}>
                      <Link
                        href={c.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        <c.icon className="w-5 h-5 inline-block mr-2" />
                        {c.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Media */}
              <AccordionItem value="media">
                <AccordionTrigger>Media and Resources</AccordionTrigger>
                <AccordionContent>
                  {Mmedia.slice(0, 3).map((c) => (
                    <SheetClose asChild key={c.title}>
                      <Link
                        href={c.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        <c.icon className="w-5 h-5 inline-block mr-2" />
                        {c.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* About */}
              <AccordionItem value="about">
                <AccordionTrigger>About Us</AccordionTrigger>
                <AccordionContent>
                  {Mabout.slice(0, 3).map((c) => (
                    <SheetClose asChild key={c.title}>
                      <Link
                        href={c.href}
                        className="block py-2 text-sm text-muted-foreground"
                        onClick={handleLinkClick}
                      >
                        <c.icon className="w-5 h-5 inline-block mr-2" />
                        {c.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <SheetClose asChild>
              <Link href={"/SGTBS.pdf"} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="w-full text-white bg-[#8b51fe] hover:bg-[#7a45e6] border-2 border-[#8b51fe] hover:border-[#7a45e6] hover:text-gray-100"
                  onClick={handleLinkClick}
                >
                  Brochure
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/contact">
                <Button
                  className="w-full text-black bg-[#febd59] hover:bg-[#e6ac4b] border-2 border-[#febd59] hover:border-[#e6ac4b]"
                  onClick={handleLinkClick}
                >
                  Contact Now
                </Button>
              </Link>
            </SheetClose>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};
