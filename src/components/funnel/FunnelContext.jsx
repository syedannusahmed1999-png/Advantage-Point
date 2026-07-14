import React, { createContext, useContext, useState, useCallback } from "react";

const FunnelContext = createContext(null);

export const STEPS = [
  { id: "assessment", label: "Assessment" },
  { id: "recommendation", label: "Recommendation" },
  { id: "insurance", label: "Insurance" },
  { id: "scheduling", label: "Scheduling" },
  { id: "intake", label: "Intake" },
  { id: "confirmation", label: "Confirmed" },
];

export function FunnelProvider({ children }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [assessment, setAssessment] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [insurance, setInsurance] = useState({});
  const [appointment, setAppointment] = useState({});
  const [intake, setIntake] = useState({});

  const goToStep = useCallback((index) => {
    setStepIndex(Math.max(0, Math.min(STEPS.length - 1, index)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const nextStep = useCallback(() => {
    setStepIndex((prev) => {
      const next = Math.min(STEPS.length - 1, prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return next;
    });
  }, []);

  const prevStep = useCallback(() => {
    setStepIndex((prev) => {
      const next = Math.max(0, prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return next;
    });
  }, []);

  const value = {
    stepIndex,
    currentStep: STEPS[stepIndex],
    assessment,
    setAssessment,
    recommendation,
    setRecommendation,
    insurance,
    setInsurance,
    appointment,
    setAppointment,
    intake,
    setIntake,
    nextStep,
    prevStep,
    goToStep,
    totalSteps: STEPS.length,
  };

  return <FunnelContext.Provider value={value}>{children}</FunnelContext.Provider>;
}

export function useFunnel() {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("useFunnel must be used within FunnelProvider");
  return ctx;
}