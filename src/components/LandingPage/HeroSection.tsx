"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { SearchBar } from "../SearchBar";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-l from-indigo-200/20 to-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-t from-blue-100/30 to-sky-100/30 blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative mx-auto h-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-full pt-24 sm:pt-32">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block cursor-pointer rounded-full border-2 border-blue-300 bg-gradient-to-r from-blue-100/80 to-blue-50/80 px-4 py-2 text-sm font-medium text-blue-900 backdrop-blur-sm transition-all hover:border-blue-500">
                Revolutionizing Job Search
              </span>
            </div>
            <h1
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
              style={{
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
              }}
            >
              Your Dream Career
              <br /> Starts Here
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-700">
              Discover and apply to your perfect job with our AI-powered
              platform. Auto-apply to matching positions and get expert career
              guidance.
            </p>
            <div className="xs:flex-row mt-10 flex flex-col items-center justify-center gap-4">
              <Button
                size="lg"
                className="primaryButtonGradient group relative rounded-full px-8 text-white"
              >
                Find Jobs Now
                <span>
                  <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="secondaryButtonGradient rounded-full"
              >
                Upload Resume
              </Button>
            </div>
          </div>

          <div className="perspective-1000 mx-auto my-12">
            <SearchBar />
          </div>

          {/* 3D-like floating card */}
          <div className="perspective-1000 mx-auto my-16 max-w-2xl">
            <div
              className="relative rounded-2xl backdrop-blur-sm"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative rounded-2xl border border-blue-100 bg-gradient-to-br from-white/80 to-blue-50/80 p-8 shadow-lg backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="text-center">
                    <p className="text-sm font-medium text-blue-600">
                      Jobs Available
                    </p>
                    <p className="mt-2 text-3xl font-bold text-blue-900">
                      100K+
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-blue-600">
                      Success Rate
                    </p>
                    <p className="mt-2 text-3xl font-bold text-blue-900">94%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
