import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FeatureItem {
  id: string;
  category?: string;
  title?: string;
  details: string;
  tutorialLink: string;
  image?: string;
}

interface Features06PageProps {
  HEAD: string;
  DESC?: string;
  features: FeatureItem[];
}

const Features06Page = ({ HEAD, DESC, features }: Features06PageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="max-w-(--breakpoint-lg) w-full  my-20 px-6"
        id={features[0]?.id}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center capitalize">
          {HEAD}
        </h2>
        {DESC && (
          <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center capitalize">
            {DESC}
          </p>
        )}

        {/* Features List */}
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border/50 basis-1/2">
                {feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.title || feature.details}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                    draggable={false}
                  />
                ) : (
                  <div className="w-full h-full bg-muted" /> // fallback
                )}
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4
                  className="my-3 text-2xl font-semibold tracking-tight"
                  id={feature.id}
                >
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button
                  asChild
                  size="lg"
                  className=" text-black bg-[#febd59] hover:bg-[#e6ac4b] border-2 border-[#febd59] hover:border-[#e6ac4b] mt-6 rounded-full gap-3"
                >
                  <Link href={"contact#form"}>
                    Contact Us <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;
