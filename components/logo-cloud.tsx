import Image from "next/image";
import { ASSETS } from "@/constants/index";

export default function LogoCloud() {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold py-6 underline  underline-offset-8 decoration-1">
          Our Clients
        </h2>
        <h2 className="text-center text-lg font-normal">
          Driving to success with our honored clients
        </h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="h-20 w-fit"
            src={ASSETS.INDIGO}
            alt="Indigo Logo"
            height="80"
            width="100"
            priority
            draggable="false"
          />
          <Image
            className="h-full w-fit"
            src={ASSETS.AIR_INDIA}
            alt="Air India Logo"
            height="80"
            width="80"
            priority
            draggable="false"
          />
          <Image
            className="h-24 w-fit "
            src={ASSETS.AKASA}
            alt="Akasa Air"
            height="50"
            width="300"
            priority
            draggable="false"
          />
          <Image
            className="h-25 w-fit"
            src={ASSETS.HAL}
            alt="Hail"
            height="50"
            width="200"
            draggable="false"
          />
          <Image
            className="h-25 w-fit"
            src={ASSETS.BSFLOGO}
            alt="BSF Logo"
            height="50"
            width="100"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
