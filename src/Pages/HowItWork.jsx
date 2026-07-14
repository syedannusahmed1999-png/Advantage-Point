import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, ShieldCheck, Calendar, FileCheck, MessageSquare, Clock, Smartphone, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TrustBar from "@/components/shared/TrustBar";

const TELEHEALTH_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/e7e73d236_generated_0f44a7d5.png";

const patientSteps = [
  {
    icon: Calendar,
    title: "1. Schedule Your Appointment",
    description: "Book online or call us. Most patients are seen within 48 hours. We'll confirm your appointment and send you everything you need to prepare.",
  },
  {
    icon: ShieldCheck,
    title: "2. Insurance Verification",
    description: "Our team verifies your insurance coverage before your appointment. We accept most major carriers and handle all the paperwork for you.",
  },
  {
    icon: FileCheck,
    title: "3. Complete Your Intake",
    description: "Fill out a brief, secure intake form online before your session. This helps your clinician prepare and makes the most of your time together.",
  },
  {
    icon: Monitor,
    title: "4. Attend Your Telehealth Session",
    description: "Join your session from any device with a camera and internet. Our HIPAA-compliant platform ensures your conversation is private and secure.",
  },
  {
    icon: MessageSquare,
    title: "5. Receive Your Results",
    description: "For assessments, your report is delivered to your referring provider within 48 hours. For counseling, you'll discuss next steps and schedule follow-ups.",
  },
];

const telehealthBenefits = [
  { icon: Smartphone, title: "Any Device", description: "Use your phone, tablet, or computer — no special software needed." },
  { icon: Lock, title: "HIPAA Secure", description: "End-to-end encryption protects every session and all patient data." },
  { icon: Clock, title: "Flexible Hours", description: "Morning, evening, and weekend appointments to fit your schedule." },
  { icon: CheckCircle, title: "No Travel", description: "Professional care from your living room, office, or anywhere comfortable." },
];

const insurers = [
  "Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealthcare",
  "Humana", "Medicare", "Tricare", "Anthem",
  "Medicaid (Select States)", "Optum", "Magellan", "Beacon Health",
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">How It Works</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Getting Care Should Be Simple
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                From your first appointment to your results, we've designed every step to be as easy and stress-free as possible. Here's what to expect.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[52px]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img
                src={TELEHEALTH_IMG}
                alt="A person comfortably engaged in a telehealth therapy session from their living room"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Steps */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Journey"
            title="Five Simple Steps to Better Care"
          />
          <div className="mt-16 space-y-0">
            {patientSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {i < patientSteps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-3" />
                  )}
                </div>
                <div className="pt-2 pb-6">
                  <h3 className="font-heading font-bold text-xl text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth Benefits */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Telehealth"
            title="Why Telehealth Works"
            description="Our secure telehealth platform brings the same quality of care you'd receive in-person — without the barriers."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {telehealthBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-5">
                  <b.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insurance Accepted"
            title="We Work with Your Insurance"
            description="We accept most major insurance carriers. Our team verifies your benefits before your appointment — no surprises."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {insurers.map((name) => (
              <div key={name} className="flex items-center gap-3 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Don't see your insurance? Contact us — we accept many additional plans.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[48px]"
            >
              Verify Your Coverage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}