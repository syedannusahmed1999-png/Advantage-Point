import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, UserCheck, Video, FileText } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Schedule & Intake",
    description: "Book your appointment online and complete a brief, secure intake form from the comfort of your home.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Insurance Verification",
    description: "We verify your coverage and handle the paperwork so you can focus on your care — not the billing.",
  },
  {
    icon: Video,
    step: "03",
    title: "Telehealth Session",
    description: "Meet with your licensed clinician via secure, HIPAA-compliant video from any device, anywhere.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Results & Next Steps",
    description: "Receive your evaluation or continue with ongoing counseling. Reports delivered to your provider within 48 hours.",
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Getting Started Is Simple"
          description="From scheduling to results, we've designed every step to be as straightforward and stress-free as possible."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-slate-200" />
              )}

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mb-5">
                  <step.icon className="w-7 h-7 text-blue-600" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Learn More About the Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}