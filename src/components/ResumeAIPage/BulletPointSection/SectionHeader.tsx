import React from "react";
import Reveal from "~/components/Reveal";
import { TracingBeam } from "~/components/ui/tracing-beam";
import SectionBody from "./SectionBody";

const SectionHeader = () => {
  const allFeatures = [
    {
      title: "BulletPoint Generator",
      description: "",
      blogUrl: "",
      path: "/",
      points: [
        {
          id: 1,
          text: "Create the best bullet points.",
        },
        {
          id: 2,
          text: "Stop wasting time on all your different resumes.",
        },
        {
          id: 3,
          text: "Use the most successful resume strategies available.",
        },
      ],
      image:
        "https://cdn.prod.website-files.com/63ceaf62f99f0e75abf25e71/63ced214304b1a15dd821ebf_resume-builder-min%2520(1)-p-500.png",
    },
  ];

  return (
    <section className="mt-12">
      <div className="m-auto flex flex-col">
        <Reveal type="top" className="section-heading lg:px-auto px-4">
          <div className="flex justify-center">
            <div className="tag">BulletPoint Generator</div>
          </div>
          <h2 className="section-title headingGradient my-5 text-4xl font-bold leading-tight lg:text-5xl">
            This is how Resume AI creates your bullet points
          </h2>
          <p className="section-description descriptionGradient">
          Easily create a fresh batch of resume bullet points with a click of a button. Be careful though. Some of these bullet points are so good that you might get interviews for jobs you&apos;re not even qualified for.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center gap-6">
          <TracingBeam className="xs:max-w-[80vw] max-w-[90vw] px-6">
            <div className="relative mx-auto max-w-full pt-4 antialiased">
              {allFeatures?.length > 0 &&
                allFeatures.map((item: any, index: any) => (
                  <div key={`content-${index}`} className="mb-10">
                    {"productFeatures" === "productFeatures" && (
                      <SectionBody
                        data={item}
                        className={false ? "direction-rtl" : ""}
                        reverse={"false"}
                      />
                    )}
                  </div>
                ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
