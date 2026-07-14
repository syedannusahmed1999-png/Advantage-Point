import React from "react";
import { useFunnel, STEPS } from "@/components/funnel/FunnelContext";
import { Check } from "lucide-react";

export default function ProgressBar() {
  const { stepIndex } = useFunnel();

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Desktop: step labels */}
      <div className="hidden sm:flex items-center justify-between mb-3">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all ${
                i < stepIndex
                  ? "bg-emerald-500 text-white"
                  : i === stepIndex
                  ? "bg-blue-600 text-white ring-4 ring-blue-100"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {i < stepIndex ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span
              className={`text-xs font-semibold transition-colors ${
                i <= stepIndex ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {step.label}
            </span>
            {i < STEPS.length - 1 && (
              <div className={`w-8 sm:w-12 h-px ${i < stepIndex ? "bg-emerald-400" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: progress bar */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-900">
            Step {stepIndex + 1} of {STEPS.length}
          </span>
          <span className="text-xs text-slate-500">{STEPS[stepIndex].label}</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}