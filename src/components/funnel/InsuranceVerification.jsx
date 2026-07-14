import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, CheckCircle, Info } from "lucide-react";
import { useFunnel } from "@/components/funnel/FunnelContext";
import { Input } from "@/components/ui/input";
import TrustFooter from "@/components/funnel/TrustFooter";

const INSURERS = [
  "Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealthcare", "Humana",
  "Medicare", "Medicaid", "Tricare", "Anthem", "Optum", "Magellan",
  "Beacon Health", "Other / Not Listed", "I don't have insurance",
];

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

export default function InsuranceVerification() {
  const { insurance, setInsurance, assessment, nextStep, prevStep } = useFunnel();
  const [errors, setErrors] = useState({});

  // Pre-fill from assessment
  const initial = {
    provider: assessment.insurer || "",
    state: assessment.state || "",
    ...insurance,
  };

  const [form, setForm] = useState(initial);

  const update = (key, value) => {
    setForm({ ...form, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.provider) errs.provider = "Please select your insurance provider";
    if (!form.state) errs.state = "Please select your state";
    if (!form.fullName) errs.fullName = "Your name is required";
    if (!form.email) errs.email = "Email is required";
    if (!form.phone) errs.phone = "Phone number is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email";
    }
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setInsurance(form);
      nextStep();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mb-5">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Verify Your Insurance
        </h2>
        <p className="mt-2 text-slate-500 text-base">
          We'll verify your benefits before your appointment — no surprises, no hidden costs.
        </p>
      </motion.div>

      {/* Reassurance banner */}
      <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-emerald-700">
          <span className="font-semibold">Most major insurance plans accepted.</span> Your information is encrypted and HIPAA-protected.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Insurance Provider */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Insurance Provider *</label>
          <div className="relative">
            <select
              value={form.provider || ""}
              onChange={(e) => update("provider", e.target.value)}
              className={`w-full h-14 px-5 pr-12 rounded-2xl border-2 bg-white appearance-none cursor-pointer text-base text-slate-700 focus:outline-none transition-colors ${
                errors.provider ? "border-red-300" : "border-slate-100 focus:border-blue-500"
              }`}
            >
              <option value="">Select your insurance...</option>
              {INSURERS.map((ins) => (
                <option key={ins} value={ins}>{ins}</option>
              ))}
            </select>
            <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {errors.provider && <p className="mt-1 text-xs text-red-500">{errors.provider}</p>}
        </div>

        {/* Member ID (optional) */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Member ID <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <Input
            value={form.memberId || ""}
            onChange={(e) => update("memberId", e.target.value)}
            placeholder="Found on your insurance card"
            className="h-14 rounded-2xl"
          />
          <p className="mt-1 text-xs text-slate-400 flex items-center gap-1">
            <Info className="w-3 h-3" />
            Providing your Member ID speeds up verification, but isn't required.
          </p>
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">State *</label>
          <div className="relative">
            <select
              value={form.state || ""}
              onChange={(e) => update("state", e.target.value)}
              className={`w-full h-14 px-5 pr-12 rounded-2xl border-2 bg-white appearance-none cursor-pointer text-base text-slate-700 focus:outline-none transition-colors ${
                errors.state ? "border-red-300" : "border-slate-100 focus:border-blue-500"
              }`}
            >
              <option value="">Select your state...</option>
              {STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <Input
            value={form.fullName || ""}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Your full name"
            className={`h-14 rounded-2xl ${errors.fullName ? "border-red-300" : ""}`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
            <Input
              type="email"
              value={form.email || ""}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@email.com"
              className={`h-14 rounded-2xl ${errors.email ? "border-red-300" : ""}`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
            <Input
              type="tel"
              value={form.phone || ""}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="(555) 123-4567"
              className={`h-14 rounded-2xl ${errors.phone ? "border-red-300" : ""}`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[52px]"
          >
            Continue to Scheduling
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center justify-center gap-1.5 px-6 py-4 text-slate-500 font-medium hover:text-slate-700 transition-colors min-h-[52px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </form>

      <TrustFooter />
    </div>
  );
}