import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/shared/TrustBar";
import DualPathSection from "@/components/home/DualPathSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InsuranceSection from "@/components/home/InsuranceSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <DualPathSection />
      <ServicesSection />
      <StatsSection />
      <HowItWorksPreview />
      <TestimonialsSection />
      <InsuranceSection />
      <FAQSection />
    </>
  );
}