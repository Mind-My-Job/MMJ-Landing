"use client";
import React from "react";
import SectionBody from "./BuilderSection/SectionBody";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamComp({ data, origin = "", reverse= false }: any) {
  return (
    <TracingBeam className="xs:max-w-[80vw] max-w-[90vw] px-6">
      <div className="relative mx-auto max-w-full pt-4 antialiased">
        {data?.length > 0 &&
          data.map((item: any, index: any) => (
            <div key={`content-${index}`} className="mb-10">
              {origin === "productFeatures" && (
                <SectionBody
                  data={item}
                  className={reverse ? "direction-rtl" : ""}
                  reverse={reverse}
                />
              )}
            </div>
          ))}
      </div>
    </TracingBeam>
  );
}
