import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, FileText, User, Heart, Phone, Shield } from "lucide-react";
import { useFunnel } from "@/components/funnel/FunnelContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TrustFooter from "@/components/funnel/TrustFooter";

const SECTIONS = [
  {
    key: "personal",
    label: "Personal Information",
    icon: User,
    fields: [
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      { name: "address", label: "Street Address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "zip", label: "ZIP Code", type: "text", required: true },
    ],
  },
  {
    key: "medical",
    label: "Medical History",
    icon: FileText,
    fields: [
      { name: "currentMeds", label: "Current Medications", type: "textarea", required: false, placeholder: "List any medications you're currently taking..." },
      { name: "diagnoses", label: "Previous Diagnoses", type: "textarea", required: false, placeholder: "Any previous mental health diagnoses..." },
      { name: "allergies", label: "Allergies", type: "text", required: false, placeholder: "Any known allergies..." },
    ],
  },
  {
    key: "concerns",
    label: "Current Concerns",
    icon: Heart,
    fields: [
      { name: "primaryConcern", label: "What are you hoping to address?", type: "textarea", required: true, placeholder: "Describe what brings you in today..." },
      { name: "goals", label: "What are your goals for treatment?", type: "textarea", required: false, placeholder: "What would you like to achieve..." },
    ],
  },
  {
    key: "emergency",
    label: "Emergency Contact",
    icon: Phone,
    fields: [
      { name: "emName", label: "Emergency Contact Name", type: "text", required: true },
      { name: "emRelation", label: "Relationship", type: "text", required: true },
      { name: "emPhone", label: "Emergency Contact Phone", type: "tel", required: true },
    ],
  },
];

export default function DigitalIntake() {
  const { intake, setIntake, nextStep, prevStep } = useFunnel();
  const [sectionIndex, setSectionIndex] = useState(0);
  const [data, setData] = useState(intake);
  const [errors, setErrors] = useState({});
  const [consents, setConsents] = useState({
    hipaa: intake.consent_hipaa || false,
    treatment: intake.consent_treatment || false,
    telehealth: intake.consent_telehealth || false,
  });
  const [signature, setSignature] = useState(intake.signature || "");

  const currentSection = SECTIONS[sectionIndex];
  const isLastSection = sectionIndex >= SECTIONS.length - 1;

  const update = (name, value) => {
    setData({ ...data, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateSection = () => {
    const errs = {};
    currentSection.fields.forEach((f) => {
      if (f.required && !data[f.name]) {
        errs[f.name] = `${f.label} is required`;
      }
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (!validateSection()) return;
    if (isLastSection) {
      // Validate consents and signature
      const errs = {};
      if (!consents.hipaa) errs.consent_hipaa = "Please acknowledge the HIPAA notice";
      if (!consents.treatment) errs.consent_treatment = "Please consent to treatment";
      if (!consents.telehealth) errs.consent_telehealth = "Please consent to telehealth";
      if (!signature.trim()) errs.signature = "Please type your full name as a signature";
      setErrors(errs);
      if (Object.keys(errs).length > 0) return;

      setIntake({ ...data, ...consents, signature });
      nextStep();
    } else {
      setSectionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (sectionIndex > 0) {
      setSectionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      prevStep();
    }
  };

  const sectionProgress = ((sectionIndex + 1) / (SECTIONS.length + 1)) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mb-5">
          <FileText className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Complete Your Intake
        </h2>
        <p className="mt-2 text-slate-500 text-base">
          A few details to help your clinician prepare. This takes about 5 minutes.
        </p>
      </motion.div>

      {/* Section progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500">
            {isLastSection ? "Consent & Signature" : currentSection.label}
          </span>
          <span className="text-xs text-slate-400">
            {isLastSection ? `Section ${SECTIONS.length + 1} of ${SECTIONS.length + 1}` : `Section ${sectionIndex + 1} of ${SECTIONS.length + 1}`}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${sectionProgress}%` }}
          />
        </div>
      </div>

      {/* Form sections */}
      {!isLastSection ? (
        <motion.div
          key={currentSection.key}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-white border border-slate-100 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <currentSection.icon className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">{currentSection.label}</h3>
          </div>

          <div className="space-y-5">
            {currentSection.fields.map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {f.label} {f.required && <span className="text-red-400">*</span>}
                </label>
                {f.type === "textarea" ? (
                  <Textarea
                    value={data[f.name] || ""}
                    onChange={(e) => update(f.name, e.target.value)}
                    placeholder={f.placeholder}
                    className={`min-h-[100px] rounded-xl resize-none ${errors[f.name] ? "border-red-300" : ""}`}
                  />
                ) : (
                  <Input
                    type={f.type}
                    value={data[f.name] || ""}
                    onChange={(e) => update(f.name, e.target.value)}
                    placeholder={f.placeholder}
                    className={`h-12 rounded-xl ${errors[f.name] ? "border-red-300" : ""}`}
                  />
                )}
                {errors[f.name] && <p className="mt-1 text-xs text-red-500">{errors[f.name]}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-white border border-slate-100 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">Consent & Signature</h3>
          </div>

          <div className="space-y-4">
            {/* HIPAA */}
            <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${errors.consent_hipaa ? "border-red-300" : "border-slate-100 hover:border-blue-200"}`}>
              <input
                type="checkbox"
                checked={consents.hipaa}
                onChange={(e) => {
                  setConsents({ ...consents, hipaa: e.target.checked });
                  if (errors.consent_hipaa) setErrors({ ...errors, consent_hipaa: null });
                }}
                className="mt-1 w-5 h-5 rounded accent-blue-600 flex-shrink-0"
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">HIPAA Acknowledgement.</span> I acknowledge that I have been informed about how my protected health information may be used and disclosed, in accordance with HIPAA regulations.
              </span>
            </label>
            {errors.consent_hipaa && <p className="text-xs text-red-500 -mt-2">{errors.consent_hipaa}</p>}

            {/* Treatment consent */}
            <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${errors.consent_treatment ? "border-red-300" : "border-slate-100 hover:border-blue-200"}`}>
              <input
                type="checkbox"
                checked={consents.treatment}
                onChange={(e) => {
                  setConsents({ ...consents, treatment: e.target.checked });
                  if (errors.consent_treatment) setErrors({ ...errors, consent_treatment: null });
                }}
                className="mt-1 w-5 h-5 rounded accent-blue-600 flex-shrink-0"
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Consent to Treatment.</span> I consent to participate in behavioral health services provided by Advantage Point Behavioral, including assessment and/or counseling via telehealth.
              </span>
            </label>
            {errors.consent_treatment && <p className="text-xs text-red-500 -mt-2">{errors.consent_treatment}</p>}

            {/* Telehealth consent */}
            <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${errors.consent_telehealth ? "border-red-300" : "border-slate-100 hover:border-blue-200"}`}>
              <input
                type="checkbox"
                checked={consents.telehealth}
                onChange={(e) => {
                  setConsents({ ...consents, telehealth: e.target.checked });
                  if (errors.consent_telehealth) setErrors({ ...errors, consent_telehealth: null });
                }}
                className="mt-1 w-5 h-5 rounded accent-blue-600 flex-shrink-0"
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Telehealth Consent.</span> I understand that my sessions will be conducted via secure video conferencing and I consent to receive services through this medium.
              </span>
            </label>
            {errors.consent_telehealth && <p className="text-xs text-red-500 -mt-2">{errors.consent_telehealth}</p>}

            {/* Signature */}
            <div className="pt-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Electronic Signature <span className="text-red-400">*</span>
              </label>
              <Input
                value={signature}
                onChange={(e) => {
                  setSignature(e.target.value);
                  if (errors.signature) setErrors({ ...errors, signature: null });
                }}
                placeholder="Type your full legal name"
                className={`h-14 rounded-xl font-heading text-lg ${errors.signature ? "border-red-300" : ""}`}
              />
              <p className="mt-1 text-xs text-slate-400">
                By typing your name, you are providing your electronic signature.
              </p>
              {errors.signature && <p className="mt-1 text-xs text-red-500">{errors.signature}</p>}
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 px-6 py-3 text-slate-500 font-medium hover:text-slate-700 transition-colors min-h-[48px]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[48px]"
        >
          {isLastSection ? "Submit & Confirm" : "Continue"}
          {isLastSection ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </button>
      </div>

      <TrustFooter />
    </div>
  );
}