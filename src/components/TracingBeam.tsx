"use client";
// import { calsans } from "~/fonts/calsans";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import ProductItem from "./LandingPage/ProductFeatures/ProductItem";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamComp({ data, origin = "" }: any) {
  return (
    <TracingBeam className="xs:max-w-[80vw] max-w-[90vw] px-6">
      <div className="relative mx-auto max-w-full pt-4 antialiased">
        {data?.length > 0 &&
          data.map((item: any, index: any) => (
            <div key={`content-${index}`} className="mb-10">
              {origin === "productFeatures" && (
                <ProductItem
                  data={item}
                  className={index % 2 !== 0 ? "direction-rtl" : ""}
                  reverse={index % 2 !== 0 ? "true" : "false"}
                />
              )}
            </div>
          ))}
      </div>
    </TracingBeam>
  );
}
