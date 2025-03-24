"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "~/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        return Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
    //   animate={{
    //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
    //   }}
      className="h-[30rem] overflow-y-auto flex justify-around relative space-x-10 rounded-md  w-full custom-scrollbar transition-all duration-700 ease-in-out"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className={`my-20 xl:my-40 ${index === 2 ? 'xl:mb-0' : ''}`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-6xl font-extrabold mb-6 text-blue-900"
              >
                {index + 1}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-blue-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-blue-700 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Smooth transition for the right image */}
      <div className="hidden lg:block h-full w-full rounded-md sticky top-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard} // Ensures re-render on activeCard change
            // style={{ background: backgroundGradient }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
              "absolute inset-0 rounded-md bg-white",
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
