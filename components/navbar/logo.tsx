import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link
    href="/"
    className="relative block w-28 h-8 sm:w-36 sm:h-10 md:w-44 md:h-12"
  >
    <Image
      src="/logo.png"
      alt="Company Logo"
      fill
      priority
      className="object-contain"
    />
  </Link>
);
