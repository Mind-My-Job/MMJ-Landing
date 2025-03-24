"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface ProductItemData {
  title: string;
  description: string;
  path: string;
  blogUrl: string;
  image: string;
}

interface ProductItemProps {
  data: ProductItemData;
  className?: string;
  reverse?: "true" | "false";
}

const ProductItem = ({
  data,
  className,
  reverse = "false",
}: ProductItemProps) => {
  return (
    <section
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 lg:grid-cols-2 lg:px-8 py-4 sm:py-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "flex flex-col justify-center text-center items-center lg:items-start lg:text-left order-2 sm:order-1",
            reverse === "true" && "lg:text-right",
          )}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-4xl font-bold leading-tight titleGradient lg:text-5xl"
          >
            {data?.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8 text-lg descriptionGradient"
          >
            {data?.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={data?.path}>
              <Button
                size="lg"
                className="group relative rounded-full px-8 text-white primaryButtonGradient"
              >
                Start Matching
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={data?.blogUrl}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full secondaryButtonGradient bg-white px-4"
              >
                Learn more
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative flex items-center justify-center lg:justify-end order-1 sm:order-2"
        >
          <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
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
              className="absolute -left-4 -top-4 h-full w-full rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
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
              className="absolute -bottom-4 -right-4 h-full w-full rounded-full bg-gradient-to-l from-indigo-400/20 to-blue-400/20 blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductItem;

