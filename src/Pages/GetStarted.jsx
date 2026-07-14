import React from "react";
import { FunnelProvider, useFunnel, STEPS } from "@/components/funnel/FunnelContext";
import ProgressBar from "@/components/funnel/ProgressBar";
import AssessmentQuiz from "@/components/funnel/AssessmentQuiz";
import ServiceRecommendation from "@/components/funnel/ServiceRecommendation";
import InsuranceVerification from "@/components/funnel/InsuranceVerification";
import AppointmentScheduling from "@/components/funnel/AppointmentScheduling";
import DigitalIntake from "@/components/funnel/DigitalIntake";
import Confirmation from "@/components/funnel/Confirmation";
import { Link } from "react-router-dom";
import { Phone, Lock } from "lucide-react";

function FunnelContent() {
  const { stepIndex } = useFunnel();

  // Confirmation step is full-width without progress bar
  if (stepIndex === STEPS.length - 1) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <Confirmation />
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top bar */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AP</span>
          </div>
          <span className="font-heading font-bold text-slate-900 text-sm hidden sm:block">
            Advantage Point
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="tel:+18005551234"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(800) 555-1234</span>
          </a>
        </div>
      </div>

      <ProgressBar />

      <div className="mt-12">
        {stepIndex === 0 && <AssessmentQuiz />}
        {stepIndex === 1 && <ServiceRecommendation />}
        {stepIndex === 2 && <InsuranceVerification />}
        {stepIndex === 3 && <AppointmentScheduling />}
        {stepIndex === 4 && <DigitalIntake />}
      </div>
    </div>
  );
}

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
      {/* HIPAA badge - fixed */}
      <div className="fixed top-4 right-4 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
        <Lock className="w-3.5 h-3.5 text-emerald-500" />
        <span className="text-xs font-medium text-slate-500">HIPAA Secure</span>
      </div>

      <FunnelProvider>
        <FunnelContent />
      </FunnelProvider>
    </div>
  );
}