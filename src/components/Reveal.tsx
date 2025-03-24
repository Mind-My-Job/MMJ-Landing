"use client"

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    once ?: boolean;
    type?: "left" | "right" | "top" | "bottom";
};

function Reveal({ children, type = "bottom", className, once = true }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: once });

    function getVariant() {
        switch (type) {
            case "left":
                return {
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                };
            case "right":
                return {
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                };
            case "top":
                return {
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, y: 0 },
                };
            default:
                return {
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                };
        }
    }

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={getVariant()}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
