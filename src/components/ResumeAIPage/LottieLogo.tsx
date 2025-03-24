"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Lottie component with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import type { AnimationItem } from "lottie-web";

const LottieLogo = () => {
  const [animationData, setAnimationData] = React.useState<unknown>(null); // Using any temporarily, ideally should use proper Lottie types

  React.useEffect(() => {
    void import("~/assets/logoLottie.json")
      .then((data) => {
        setAnimationData(data.default);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  if (!animationData) {
    return null; // or a loading spinner
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ pointerEvents: "none" }} // allow clicks to pass through
    />
  );
};

export default LottieLogo;
