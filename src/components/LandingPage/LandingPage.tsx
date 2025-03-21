import React from "react";
import { FAQSection } from "./FAQSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import { LogoTicker } from "./LogoTicker";
import MiddleBody from "./MiddleBody";
import Newsletter from "./NewsLetter";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import { Testimonials } from "./Testimonials";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <LogoTicker />
      <MiddleBody />
      <ProductFeatures />
      <Newsletter />
      <Testimonials />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
