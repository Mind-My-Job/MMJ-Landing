"use client";
import Image from "next/image";
import { StickyScroll } from "~/components/ui/sticky-scroll-reveal";
import { cn } from "~/lib/utils";

interface SectionItemData {
  title: string;
  description: string;
  path: string;
  blogUrl: string;
  image: string;
  points: SectionPointsProps[];
}

interface SectionItemProps {
  data: SectionItemData;
  className?: string;
  reverse?: "true" | "false";
}

interface SectionPointsProps {
  id: number;
  text: string;
}

const SectionBody = ({
  data,
  className,
  reverse = "false",
}: SectionItemProps) => {
  const content = [
    {
      title: "Add your info",
      description:
        "What's your role? What have you done? Give detailed information up front to get powerful results.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="https://cdn.prod.website-files.com/63ceaf62f99f0e75abf25e71/63cfd7e3d193abc9e030f414_bulletpoints%2520resumai-min-p-800.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="add your info"
          />
        </div>
      ),
    },
    {
      title: "Let our AI get to work",
      description:
        "Our AI uses the latest technology in machine learning to serve you incredible resume bullet points.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-blue-900">
          <Image
            src="https://cdn.prod.website-files.com/63ceaf62f99f0e75abf25e71/63cfd7e3d193ab5ac130f401_add%20your%20info-min.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Get your bullet points!",
      description:
        "Pick the best and add them to your resume! Repeat the process until all your bullets are on point.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="https://cdn.prod.website-files.com/63ceaf62f99f0e75abf25e71/63cfd7e3d193abc9e030f414_bulletpoints%2520resumai-min-p-800.png"
            width={300}
            height={300}
            className="h-full w-full object-contain"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <section
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 py-4 sm:py-24 lg:px-8">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default SectionBody;
