import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";
import Image from "next/image";
import { ASSETS } from "@/constants";

export default function Sector() {
  return (
    <section className="bg-gray-50 px-6 md:py-32 dark:bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="mb-16 space-y-4">
            <h1 className="text-center text-5xl font-bold">
              Extending Across Industries
            </h1>
            <p className="text-center">
              Empowering Diverse Sectors with Aviation Products and Consumables
            </p>
          </div>
          <div className="relative -z-1 grid grid-cols-6 gap-3">
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center">
                  <span className="mx-auto block w-fit text-5xl font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lucide lucide-plane-icon lucide-plane  absolute inset-0 size-full text-[#8b51fe]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                  </span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold">
                  Airlines
                </h2>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-fit w-24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {/* Base shield shape */}
                    <path
                      className="text-zinc-400 dark:text-zinc-600"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      fill="currentColor"
                    />

                    {/* Gradient overlay */}
                    <g
                      className="text-primary-600 dark:text-primary-500"
                      clipPath="url(#shield-ban-clip)"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="url(#shield-ban-gradient)"
                      />
                    </g>

                    {/* Ban slash */}
                    <path
                      d="m4.243 5.21 14.39 12.472"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-primary-600 dark:text-primary-500"
                    />

                    {/* Definitions */}
                    <defs>
                      <linearGradient
                        id="shield-ban-gradient"
                        x1="0"
                        y1="0"
                        x2="24"
                        y2="24"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop
                          offset="1"
                          stopColor="currentColor"
                          stopOpacity="0.6"
                        />
                      </linearGradient>

                      <clipPath id="shield-ban-clip">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative z-1 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Defense & Space
                  </h2>
                  <p className="text-foreground">
                    Trusted sourcing partner delivering certified spares and
                    equipment to defense organizations, ensuring readiness and
                    reliability.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dark:text-muted-foreground w-full text-[#febd59]"
                  >
                    <path d="M12 10.189V14" />
                    <path d="M12 2v3" />
                    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
                    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  </svg>
                </div>
                <div className="relative z-1 mt-14 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">Marine</h2>
                  <p className="text-foreground">
                    Comprehensive marine solutions delivering genuine OEM
                    spares, reliable logistics, and expert engineering support
                    for shipping companies and vessel operators.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-1 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Shield
                      className="m-auto size-5 text-[#8b51fe]"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">
                      Aerospace
                    </h2>
                    <p className="text-foreground">
                      Comprehensive aviation solutions delivering genuine OEM
                      spares, efficient logistics, and engineering support for
                      airlines.
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-fit w-24 text-[#febd59]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {/* Rocket flame */}
                  <path
                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                    className="text-zinc-400 dark:text-zinc-600"
                    fill="currentColor"
                  />

                  {/* Rocket body with gradient overlay */}
                  <g
                    className="text-primary-600 dark:text-primary-500"
                    clipPath="url(#rocket-clip)"
                  >
                    <path
                      d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                      fill="url(#rocket-gradient)"
                    />
                  </g>

                  {/* Rocket fins / outlines */}
                  <path
                    d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-primary-600 dark:text-primary-500"
                  />
                  <path
                    d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-primary-600 dark:text-primary-500"
                  />

                  {/* Gradient + Clip defs */}
                  <defs>
                    <linearGradient
                      id="rocket-gradient"
                      x1="0"
                      y1="0"
                      x2="24"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop
                        offset="1"
                        stopColor="currentColor"
                        stopOpacity="0.6"
                      />
                    </linearGradient>

                    <clipPath id="rocket-clip">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </CardContent>
            </Card>
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-1 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Users className="m-auto size-6" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium transition">
                      Institutional Clients
                    </h2>
                    <p className="text-foreground">
                      Providing specialized aviation and technical spares to
                      institutions, training academies, and large organizations
                      reliably.
                    </p>
                  </div>
                </div>
                <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                        BSF India
                      </span>
                      <div className="ring-background size-7 ring-4">
                        <Image
                          className="object-fit rounded-full"
                          src={ASSETS.BSFLOGO}
                          width={28}
                          height={28}
                          alt="BLUEDART"
                        />
                      </div>
                    </div>
                    <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                      <div className="ring-background size-8 ring-4">
                        <Image
                          className="object-fit rounded-full"
                          src={ASSETS.HAL}
                          alt="HAl"
                          width={80}
                          height={28}
                        />
                      </div>
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                        HAL
                      </span>
                    </div>
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                        Air India
                      </span>
                      <div className="ring-background size-7 ring-4">
                        <Image
                          className="object-fit rounded-full"
                          src={ASSETS.AIR_INDIA}
                          alt="ONGC"
                          width={100}
                          height={28}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
