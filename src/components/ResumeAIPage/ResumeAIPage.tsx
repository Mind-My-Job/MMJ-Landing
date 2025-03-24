import React from "react";
import { FAQSection } from "./FAQSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import { LogoTicker } from "./LogoTicker";
import Newsletter from "./NewsLetter";
import BuilderSection from "./BuilderSection/SectionHeader";
import ScorerSection from "./ScorerSection/SectionHeader";
import BulletPointSection from "./BulletPointSection/SectionHeader"
import { Testimonials } from "./Testimonials";
import CallToActionBanner from "./CTABanner";

const ResumeAIPage = () => {
  return (
    <div>
      <HeroSection />
      <LogoTicker />
      <BuilderSection />
      <ScorerSection />
      <BulletPointSection />
      <Newsletter />
      <Testimonials />
      <FAQSection />
      <CallToActionBanner />
      <FooterSection />
    </div>
  );
};

export default ResumeAIPage;
