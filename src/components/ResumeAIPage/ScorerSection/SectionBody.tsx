"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "~/components/Reveal";
import { Button } from "~/components/ui/button";
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
}: SectionItemProps) => {
  return (
    <section
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 py-4 sm:py-24 lg:py-0 lg:grid-cols-3 lg:px-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "order-2 flex flex-col items-end justify-center text-end sm:order-1 lg:col-span-1 lg:items-end lg:text-left",
          )}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="titleGradient mb-6 text-4xl font-bold leading-tight lg:text-5xl"
          >
            {data?.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="descriptionGradient mb-8 text-lg"
          >
            {data?.description}
          </motion.p>
          {data?.points?.map((item: SectionPointsProps) => (
            <motion.div
              key={item.id}
              className="mb-8 flex items-start justify-center gap-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="descriptionGradient text-wrap"
              >
                {item?.text}
              </motion.p>
              <Image
                src={"/check-mark.png"}
                width={30}
                height={30}
                alt="check-points"
                className="object-contain"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 sm:flex-row"
          >
            <Link href={data?.path}>
              <Button
                size="lg"
                className="primaryButtonGradient group relative rounded-full px-8 text-white"
              >
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Get started for free
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <Reveal type="right" className="col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative order-1 flex h-full w-full items-center justify-center sm:order-2 lg:justify-end"
          >
            <div className="relative h-[400px] w-[600px] lg:h-[600px] lg:w-[800px]">
              <Image
                src={data?.image}
                width={500}
                height={500}
                alt="Career Growth Illustration"
                className="h-full w-full object-contain"
              />
              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -left-4 -top-4 h-full w-full rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -right-4 h-full w-full rounded-full"
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionBody;
