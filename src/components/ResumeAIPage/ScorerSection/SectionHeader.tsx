import React from "react";
import Reveal from "~/components/Reveal";
import { TracingBeam } from "~/components/ui/tracing-beam";
import SectionBody from "./SectionBody";

const SectionHeader = () => {
  const allFeatures = [
    {
      title: "Free Resume Scorer",
      description: "",
      blogUrl: "",
      path: "/",
      points: [
        {
          id: 1,
          text: "Real-time evaluations of your resume's strengths and areas for improvement",
        },
        {
          id: 2,
          text: "Get tailored suggestions to enhance content, format, and structure",
        },
        {
          id: 3,
          text: "Ensure your resume is aligned with job descriptions by highlighting relevant keywords",
        },
      ],
      image:
        "https://cdn.prod.website-files.com/63ceaf62f99f0e75abf25e71/64d3bb421fcd1ebb3aa4d7af_resume-scorer-mockup-min-p-500.png",
    },
  ];

  return (
    <section className="mt-12">
      <div className="m-auto flex flex-col">
        <Reveal type="top" className="section-heading lg:px-auto px-4">
          <div className="flex justify-center">
            <div className="tag">Free Resume Scorer</div>
          </div>
          <h2 className="section-title headingGradient my-5 text-4xl font-bold leading-tight lg:text-5xl">
            Maximize your resume impact.
          </h2>
          <p className="section-description descriptionGradient">
            Elevate your job hunt with our AI resume scorer. Upload your resume,
            get instant feedback, personalized insights, and maximize your
            chances in the job market.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center gap-6">
          <div className="xs:max-w-[80vw] max-w-[90vw] px-6">
            <div className="relative mx-auto max-w-full pt-4 antialiased">
              {allFeatures?.length > 0 &&
                allFeatures.map((item: any, index: any) => (
                  <div key={`content-${index}`} className="mb-10">
                    {'productFeatures' === "productFeatures" && (
                      <SectionBody
                        data={item}
                        className={true ? "direction-rtl" : ""}
                        reverse={"true"}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
