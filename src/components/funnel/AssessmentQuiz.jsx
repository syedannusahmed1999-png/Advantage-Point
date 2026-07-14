import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Brain, Heart, Shield, Sun, Users, Scissors, Cloud, HelpCircle, Clock, MapPin } from "lucide-react";
import { useFunnel } from "@/components/funnel/FunnelContext";
import TrustFooter from "@/components/funnel/TrustFooter";

const REASONS = [
  { id: "anxiety", label: "Anxiety", icon: Heart },
  { id: "depression", label: "Depression", icon: Sun },
  { id: "trauma", label: "Trauma", icon: Shield },
  { id: "stress", label: "Stress", icon: Brain },
  { id: "divorce", label: "Divorce", icon: Users },
  { id: "grief", label: "Grief", icon: Cloud },
  { id: "adhd", label: "ADHD", icon: Brain },
  { id: "surgery", label: "Surgery Assessment", icon: Scissors },
  { id: "general", label: "General Counseling", icon: Users },
  { id: "unsure", label: "Not Sure", icon: HelpCircle },
];

const DURATION_OPTIONS = [
  { id: "less-month", label: "Less than a month" },
  { id: "1-3-months", label: "1–3 months" },
  { id: "3-6-months", label: "3–6 months" },
  { id: "6-plus-months", label: "More than 6 months" },
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

const INSURERS = [
  "Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealthcare", "Humana",
  "Medicare", "Medicaid", "Tricare", "Anthem", "Optum", "Other / Not Listed",
];

const QUESTIONS = [
  {
    key: "reason",
    title: "What brings you here today?",
    subtitle: "There's no wrong answer — this helps us match you with the right care.",
    type: "grid",
    options: REASONS,
  },
  {
    key: "duration",
    title: "How long have you been experiencing this?",
    subtitle: "This helps us understand the urgency and type of support you may need.",
    type: "list",
    options: DURATION_OPTIONS,
  },
  {
    key: "previousCounseling",
    title: "Have you previously received counseling?",
    subtitle: "Prior experience helps us tailor your treatment approach.",
    type: "choice",
    options: [{ id: "yes", label: "Yes, I have" }, { id: "no", label: "No, this is my first time" }],
  },
  {
    key: "firstAssessment",
    title: "Is this your first behavioral health assessment?",
    subtitle: "We'll guide you through every step either way.",
    type: "choice",
    options: [{ id: "yes", label: "Yes, first time" }, { id: "no", label: "No, I've had one before" }],
  },
  {
    key: "careType",
    title: "Are you looking for ongoing therapy or a one-time assessment?",
    subtitle: "Ongoing therapy means regular sessions. A one-time assessment is a single evaluation.",
    type: "choice",
    options: [
      { id: "ongoing", label: "Ongoing therapy" },
      { id: "onetime", label: "One-time assessment" },
      { id: "unsure", label: "Not sure yet" },
    ],
  },
  {
    key: "state",
    title: "Which state are you located in?",
    subtitle: "We need to match you with a clinician licensed in your state.",
    type: "dropdown",
    options: STATES,
  },
  {
    key: "hasInsurance",
    title: "Do you have health insurance?",
    subtitle: "We accept most major plans. We'll verify your benefits before your appointment.",
    type: "choice",
    options: [
      { id: "yes", label: "Yes, I do" },
      { id: "no", label: "No, I don't" },
      { id: "unsure", label: "I'm not sure" },
    ],
  },
  {
    key: "insurer",
    title: "Which insurance provider do you have?",
    subtitle: "Select your carrier — we'll handle the rest.",
    type: "dropdown",
    options: INSURERS,
    showIf: (a) => a.hasInsurance === "yes",
  },
  {
    key: "virtual",
    title: "Are you interested in virtual appointments?",
    subtitle: "Telehealth sessions are conducted from your phone, tablet, or computer — anywhere private.",
    type: "choice",
    options: [
      { id: "yes", label: "Yes, virtual is perfect" },
      { id: "no", label: "I prefer in-person" },
      { id: "unsure", label: "Tell me more about telehealth" },
    ],
  },
];

function generateRecommendation(assessment) {
  const { reason, careType, firstAssessment } = assessment;

  // Surgery assessment → Behavioral Health Assessment
  if (reason === "surgery" || careType === "onetime") {
    return {
      service: "Behavioral Health Assessment",
      serviceId: "assessment",
      explanation:
        "A comprehensive behavioral health evaluation conducted by a licensed clinician. This is typically required before certain medical procedures, or requested as a one-time evaluation.",
      why: "Based on your responses, you're seeking a structured evaluation rather than ongoing therapy. Our assessment provides thorough clinical documentation — often delivered within 48 hours.",
      duration: "60–90 minutes",
      telehealth: true,
      nextSteps: [
        "Verify your insurance coverage",
        "Select an available appointment time",
        "Complete a brief intake form",
        "Attend your telehealth evaluation",
        "Receive your report within 48 hours",
      ],
    };
  }

  // Specific condition → condition-specific therapy
  const conditionMap = {
    anxiety: { service: "Anxiety Therapy", explanation: "Evidence-based treatment using CBT and mindfulness to help you manage anxiety and regain control." },
    depression: { service: "Depression Counseling", explanation: "Supportive, proven therapy to help you understand your depression and rediscover purpose." },
    trauma: { service: "Trauma & PTSD Therapy", explanation: "Specialized trauma-informed care using EMDR and CPT in a safe, supportive environment." },
    stress: { service: "Stress Management Counseling", explanation: "Practical tools and therapeutic support to manage stress and build resilience." },
    divorce: { service: "Relationship & Divorce Counseling", explanation: "Compassionate guidance through the emotional challenges of relationship transitions." },
    grief: { service: "Grief Counseling", explanation: "Supportive therapy to help you process loss and navigate your grief journey." },
    adhd: { service: "General Counseling", explanation: "Therapy with clinicians experienced in ADHD management and coping strategies." },
    general: { service: "General Counseling", explanation: "Personalized therapy sessions with a licensed clinician, tailored to your unique needs." },
    unsure: { service: "General Counseling", explanation: "Start with a general counseling session — your therapist will help you clarify your needs and create a plan." },
  };

  const mapped = conditionMap[reason] || conditionMap.general;

  return {
    service: mapped.service,
    serviceId: reason || "general",
    explanation: mapped.explanation,
    why:
      firstAssessment === "yes"
        ? "Since this is your first behavioral health appointment, we'll make sure you feel comfortable and supported from day one. Your clinician will take time to understand your situation and build a personalized plan."
        : "Based on your responses and prior experience with counseling, we'll match you with a clinician who can build on your previous progress and tailor treatment to where you are now.",
    duration: "50 minutes per session",
    telehealth: true,
    nextSteps: [
      "Verify your insurance coverage",
      "Select an available appointment time",
      "Complete a brief intake form",
      "Attend your first telehealth session",
      "Continue with ongoing weekly or bi-weekly sessions",
    ],
  };
}

export default function AssessmentQuiz() {
  const { assessment, setAssessment, setRecommendation, nextStep } = useFunnel();
  const [qIndex, setQIndex] = useState(0);

  const question = QUESTIONS[qIndex];

  // Skip questions based on showIf
  const visibleQuestions = QUESTIONS.filter((q) => !q.showIf || q.showIf(assessment));
  const currentQuestion = visibleQuestions[qIndex] || visibleQuestions[0];
  const currentIndex = QUESTIONS.indexOf(currentQuestion);
  const isLast = qIndex >= visibleQuestions.length - 1;

  const handleAnswer = (key, value) => {
    setAssessment({ ...assessment, [key]: value });
    // Auto-advance after a short delay for choice/grid types
    setTimeout(() => {
      if (isLast) {
        const rec = generateRecommendation({ ...assessment, [key]: value });
        setRecommendation(rec);
        nextStep();
      } else {
        setQIndex((prev) => prev + 1);
      }
    }, 250);
  };

  const handleDropdownSelect = (key, value) => {
    setAssessment({ ...assessment, [key]: value });
  };

  const handleDropdownNext = () => {
    if (!assessment[currentQuestion.key]) return;
    if (isLast) {
      const rec = generateRecommendation(assessment);
      setRecommendation(rec);
      nextStep();
    } else {
      setQIndex((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (qIndex > 0) {
      setQIndex((prev) => prev - 1);
    }
  };

  const progress = ((qIndex + 1) / visibleQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Quiz progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500">
            Question {qIndex + 1} of {visibleQuestions.length}
          </span>
          <span className="text-xs text-slate-400">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.key}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {currentQuestion.title}
          </h2>
          <p className="mt-2 text-slate-500 text-base leading-relaxed">
            {currentQuestion.subtitle}
          </p>

          <div className="mt-8">
            {currentQuestion.type === "grid" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentQuestion.options.map((opt) => {
                  const selected = assessment[currentQuestion.key] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleAnswer(currentQuestion.key, opt.id)}
                      className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all min-h-[100px] ${
                        selected
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                      }`}
                    >
                      <opt.icon className={`w-7 h-7 ${selected ? "text-blue-600" : "text-slate-400"}`} />
                      <span className={`text-sm font-medium ${selected ? "text-blue-700" : "text-slate-600"}`}>
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type === "list" && (
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => {
                  const selected = assessment[currentQuestion.key] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleAnswer(currentQuestion.key, opt.id)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left ${
                        selected
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                      }`}
                    >
                      <span className={`text-base font-medium ${selected ? "text-blue-700" : "text-slate-700"}`}>
                        {opt.label}
                      </span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                      }`}>
                        {selected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type === "choice" && (
              <div className="grid sm:grid-cols-1 gap-3">
                {currentQuestion.options.map((opt) => {
                  const selected = assessment[currentQuestion.key] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleAnswer(currentQuestion.key, opt.id)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left min-h-[56px] ${
                        selected
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                      }`}
                    >
                      <span className={`text-base font-medium ${selected ? "text-blue-700" : "text-slate-700"}`}>
                        {opt.label}
                      </span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                      }`}>
                        {selected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type === "dropdown" && (
              <div className="space-y-4">
                <div className="relative">
                  <select
                    value={assessment[currentQuestion.key] || ""}
                    onChange={(e) => handleDropdownSelect(currentQuestion.key, e.target.value)}
                    className="w-full h-14 px-5 pr-12 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:outline-none text-base text-slate-700 bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select an option...</option>
                    {currentQuestion.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <button
                  onClick={handleDropdownNext}
                  disabled={!assessment[currentQuestion.key]}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px]"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Back button */}
      {qIndex > 0 && (
        <button
          onClick={goBack}
          className="mt-8 flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous question
        </button>
      )}

      <TrustFooter />
    </div>
  );
}