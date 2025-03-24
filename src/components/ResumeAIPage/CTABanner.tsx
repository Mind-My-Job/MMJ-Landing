"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import Reveal from "../Reveal";

const CallToActionBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-200 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-4 pb-20 sm:py-24 lg:px-8">
        {/* Left content */}
        <Reveal
          type="top"
          className="flex flex-col items-center justify-center text-center lg:items-center"
        >
          <h2 className="titleGradient mb-6 text-4xl font-bold leading-tight lg:text-5xl">
            Your best resume is waiting for you
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
              Get started for free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CallToActionBanner;
