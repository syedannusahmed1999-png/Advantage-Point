import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Clock, Video, Sparkles, ArrowLeft } from "lucide-react";
import { useFunnel } from "@/components/funnel/FunnelContext";
import TrustFooter from "@/components/funnel/TrustFooter";

export default function ServiceRecommendation() {
  const { recommendation, assessment, nextStep, prevStep } = useFunnel();

  if (!recommendation) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 mb-5">
          <Sparkles className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Here's What We Recommend
        </h2>
        <p className="mt-2 text-slate-500 text-base">
          Based on your responses, here's the best path forward.
        </p>
      </motion.div>

      {/* Recommendation Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-3xl bg-white border-2 border-blue-100 shadow-xl shadow-blue-600/5 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-center">
          <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2">
            Recommended Service
          </p>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            {recommendation.service}
          </h3>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div>
            <p className="text-slate-600 leading-relaxed">{recommendation.explanation}</p>
          </div>

          {/* Why recommended */}
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-1">Why this is recommended</p>
                <p className="text-sm text-slate-600 leading-relaxed">{recommendation.why}</p>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Clock className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-xs text-slate-500 mb-0.5">Appointment Length</p>
              <p className="text-sm font-semibold text-slate-900">{recommendation.duration}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Video className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-xs text-slate-500 mb-0.5">Telehealth</p>
              <p className="text-sm font-semibold text-slate-900">Available</p>
            </div>
          </div>

          {/* Next steps */}
          <div>
            <p className="font-semibold text-slate-900 text-sm mb-3">What happens next:</p>
            <ol className="space-y-2.5">
              {recommendation.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={nextStep}
          className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[52px]"
        >
          Schedule Appointment
          <ArrowRight className="w-4 h-4" />
        </button>
        <a
          href="tel:+18005551234"
          className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all min-h-[52px]"
        >
          <Phone className="w-4 h-4" />
          Speak With Our Team
        </a>
      </div>

      <button
        onClick={prevStep}
        className="mt-6 flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Go back and change answers
      </button>

      <TrustFooter />
    </div>
  );
}