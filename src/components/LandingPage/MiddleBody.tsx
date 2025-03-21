"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import LottieLogo from "./LottieLogo";

const MiddleBody = () => {
  const playAudio = () => {
    const audio = new Audio("/helpAudio.mp3");
    void audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-white via-blue-200 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-4 sm:py-24 lg:grid-cols-2 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <span className="secondaryButtonGradient mb-4 w-fit">
            Beta Out Soon
          </span>
          <h2 className="titleGradient mb-6 text-4xl font-bold leading-tight lg:text-5xl">
            Pathway to Your
            <br />
            Dream Career
          </h2>
          <p className="mb-8 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-lg text-transparent">
            Let our AI-powered platform match you with the perfect
            opportunities. We analyze your skills, experience, and preferences
            to find roles that align with your career goals.
          </p>
          <div className="xs:flex-row flex flex-col flex-wrap gap-4">
            <Button
              size="lg"
              className="primaryButtonGradient group relative rounded-full px-8 text-white"
            >
              Start Matching
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="secondaryButtonGradient rounded-full px-4"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div
            className="relative h-[400px] w-[400px] cursor-pointer lg:h-[500px] lg:w-[500px]"
            onClick={playAudio}
          >
            <LottieLogo />

            <div className="absolute -left-4 -top-4 h-full w-full rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-full bg-gradient-to-l from-indigo-400/20 to-blue-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBody;
