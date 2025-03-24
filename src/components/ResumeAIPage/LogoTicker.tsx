"use client";

import { motion } from "motion/react";
import Image from "next/image";
import acmeLogo from "~/assets/logo-acme.png";
import apexLogo from "~/assets/logo-apex.png";
import celestialLogo from "~/assets/logo-celestial.png";
import echoLogo from "~/assets/logo-echo.png";
import pulseLogo from "~/assets/logo-pulse.png";
import quantumLogo from "~/assets/logo-quantum.png";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container flex m-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex Logo"
              className="logo-ticker-image"
            />

            {/* second set of logos for animation */}
            <Image
              src={acmeLogo}
              alt="acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
