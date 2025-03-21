import React from "react";
import { TracingBeamComp } from "~/components/TracingBeam";

const ProductFeatures = () => {
  const allFeatures = [
    {
      title: "Resume AI",
      description:
        "Create professional, ATS-optimized resumes with AI assistance. Our smart resume builder analyzes job descriptions and tailors your resume to highlight relevant skills and experiences, increasing your chances of landing interviews.",
      blogUrl: "/blogs/resume-tips",
      path: "/resume/build",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Job Board AI",
      description:
        "Access personalized job recommendations from multiple job boards in one place. Our AI-powered search intelligently matches your profile with relevant opportunities and provides real-time alerts for your dream jobs.",
      blogUrl: "/blogs/job-search-strategies",
      path: "/jobs/board",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Network AI",
      description:
        "Expand your professional network strategically with AI-driven networking suggestions. Get personalized recommendations for connections, conversation starters, and networking events based on your career goals.",
      blogUrl: "/blogs/networking-tips",
      path: "/networkai",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Job Tracker AI",
      description:
        "Stay organized throughout your job search with our intelligent tracking system. Monitor application statuses, deadlines, and follow-ups while receiving AI-powered insights on your application performance.",
      blogUrl: "/blogs/application-tracking",
      path: "/jobs/track",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Interview AI",
      description:
        "Practice interviews with our AI interviewer that simulates real-world scenarios. Get instant feedback on your responses, body language, and communication skills to ace your next interview.",
      blogUrl: "/blogs/interview-preparation",
      path: "/interviewai",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Cover Letter AI",
      description:
        "Generate compelling, customized cover letters that complement your resume. Our AI analyzes job descriptions and your experience to create persuasive cover letters that showcase your unique value proposition.",
      blogUrl: "/blogs/cover-letter-guide",
      path: "/resume/letter",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Auto Apply AI",
      description:
        "Streamline your job application process with intelligent automation. Our AI assistant helps you apply to multiple positions efficiently while maintaining personalization for each application.",
      blogUrl: "/blogs/application-tips",
      path: "/autoapply",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Learning Hub",
      description:
        "Access curated learning resources and career development materials. Our AI recommends relevant courses, workshops, and skill-building opportunities based on your career trajectory and industry trends.",
      blogUrl: "/blogs/career-development",
      path: "/learninghub",
      image: "https://placehold.co/500x500/png",
    },
    {
      title: "Career Blog",
      description:
        "Stay informed with our comprehensive career blog featuring expert insights, industry trends, and practical advice. Our AI curates personalized content recommendations to support your professional growth.",
      blogUrl: "/blogs",
      path: "/blogs",
      image: "https://placehold.co/500x500/png",
    },
  ];

  return (
    <section className="mt-12">
      <div className="m-auto flex flex-col">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Features</div>
          </div>
          <h2 className="section-title headingGradient my-5 text-4xl font-bold leading-tight lg:text-5xl">
            Our Products
          </h2>
          <p className="section-description descriptionGradient">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id
            est tempore ipsa alias temporibus amet non reiciendis ipsam nemo sit
            accusantium quisquam accusamus fuga, illum dolores expedita
            consequatur? Delectus.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <TracingBeamComp data={allFeatures} origin={"productFeatures"} />
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
