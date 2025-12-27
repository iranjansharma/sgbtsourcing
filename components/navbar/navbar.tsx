"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
// import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  NavServices,
  industries,
  quality,
  media,
  about,
  LucideIcon,
} from "@/constants";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-md border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />
        {/* Desktop Menu */}
        <NavigationMenu className="z-20  hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} mr-2`}
                asChild
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <div className="grid grid-cols-3 gap-3 p-4 w-[900px] divide-x">
                  <div className="col-span-2">
                    <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                      Our Services
                    </h6>
                    <ul className="mt-2.5 grid grid-cols-2 gap-3">
                      {NavServices.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          icon={component.icon}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                  <div className="pl-4">
                    <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                      Features Services
                    </h6>
                    <ul className="mt-2.5 grid gap-3">
                      {NavServices.slice(0, 3).map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          icon={component.icon}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Industries */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-6">
                <div className="pl-4">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    Industries
                  </h6>
                  <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {industries.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* quality */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Quality & Compliance
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-6">
                <div className="pl-4">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    Quality & Compliance
                  </h6>
                  <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {quality.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Media */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Media & Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-6">
                <div className="pl-4">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    Media & Resources
                  </h6>
                  <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {media.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* about us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-6">
                <div className="pl-4">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    About Us
                  </h6>
                  <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {about.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                        target={component.target}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Brochure */}
        <div className="flex items-center gap-3">
          <Link href={"/SGTBS.pdf"} target="_blank" rel="noreferrer" passHref>
            <Button
              variant="outline"
              className="hidden sm:inline-flex text-white bg-[#8b51fe] hover:bg-[#7a45e6] border-2 border-[#8b51fe] hover:border-[#7a45e6] hover:text-gray-100"
            >
              Brochure
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button className="hidden xs:inline-flex text-black bg-[#febd59] hover:bg-[#e6ac4b] border-2 border-[#febd59] hover:border-[#e6ac4b]">
              Contact Now
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
