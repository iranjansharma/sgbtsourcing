import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Logo } from "./navbar/logo";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "News and updates",
    href: "#news",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const FooterMenu = () => {
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            <Logo />
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title} |
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          <div className="max-w-xs w-full">
            <h6 className="font-semibold">Subscribe to Our Newsletter</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your full email address "
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="https://sgtbsourcing.com" target="_blank">
              SGTBS Sourcing Solutions Privaet Limited
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
