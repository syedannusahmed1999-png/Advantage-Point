import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock, Shield, BarChart3, CheckCircle, Send, ClipboardList, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCounter from "@/components/shared/StatCounter";

const PROVIDER_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/8613617a4_generated_8cb64947.png";

const benefits = [
  { icon: Clock, title: "48-Hour Turnaround", description: "Comprehensive evaluation reports delivered to your practice within two business days." },
  { icon: Shield, title: "HIPAA-Compliant", description: "All patient data transmitted and stored through fully encrypted, HIPAA-compliant systems." },
  { icon: FileText, title: "Detailed Reports", description: "Thorough clinical documentation that meets insurance requirements and supports your clinical decisions." },
  { icon: BarChart3, title: "Volume Scalable", description: "From one referral a month to hundreds — our nationwide network scales to match your practice needs." },
  { icon: Users, title: "Dedicated Support", description: "A dedicated account manager for your practice, ensuring seamless communication and coordination." },
  { icon: CheckCircle, title: "Insurance Handled", description: "We manage insurance verification and billing, reducing administrative burden on your staff." },
];

const referralSteps = [
  { step: "01", title: "Submit Referral", description: "Send us your patient's information through our secure referral form or call our provider line." },
  { step: "02", title: "Patient Scheduling", description: "We contact the patient directly and schedule their telehealth assessment within 48 hours." },
  { step: "03", title: "Evaluation", description: "A licensed clinician conducts a comprehensive behavioral evaluation via secure video." },
  { step: "04", title: "Report Delivery", description: "You receive a detailed clinical report — typically within 48 hours of the evaluation." },
];

const assessmentTypes = [
  "Pre-Surgical Psychological Evaluations",
  "Bariatric Surgery Assessments",
  "Spinal Cord Stimulator Evaluations",
  "Pain Management Behavioral Screenings",
  "Transplant Evaluations",
  "Chronic Pain Assessments",
  "Substance Use Evaluations",
  "Fitness-for-Duty Assessments",
];

export default function Providers() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">For Healthcare Providers</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Behavioral Evaluations Your Practice Can Rely On
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Physicians, surgeons, hospitals, and clinics across the country trust Advantage Point to deliver fast, thorough behavioral assessments that support informed medical decisions.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 min-h-[52px]"
                >
                  Refer a Patient
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+18005551234"
                  className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center min-h-[52px]"
                >
                  Call Provider Line
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-heading font-extrabold text-3xl text-slate-900">
                    <StatCounter end={150} suffix="K+" />
                  </p>
                  <p className="text-sm text-slate-500">Evaluations</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-3xl text-slate-900">
                    <StatCounter end={48} suffix="hr" />
                  </p>
                  <p className="text-sm text-slate-500">Turnaround</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-3xl text-slate-900">
                    <StatCounter end={40} suffix="+" />
                  </p>
                  <p className="text-sm text-slate-500">States</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img
                src={PROVIDER_IMG}
                alt="Healthcare professional reviewing clinical data on a tablet, representing precision and technology in behavioral assessments"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Advantage Point"
            title="Built for Medical Practices"
            description="We understand the unique demands of healthcare providers. Our service is designed to integrate seamlessly into your workflow."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Process */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Referral Process"
            title="Simple, Efficient, Reliable"
            description="From referral to report, we've streamlined every step so your team can focus on patient care."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {referralSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center p-8 rounded-2xl bg-white border border-slate-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-sm mb-5">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Assessment Types"
                title="Evaluations We Provide"
                centered={false}
              />
              <ul className="mt-8 space-y-3">
                {assessmentTypes.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-base">{t}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[48px]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-slate-50 p-12 border border-slate-100">
              <div className="space-y-6">
                {[
                  { label: "Assessment Scheduled", color: "bg-blue-500" },
                  { label: "Evaluation In Progress", color: "bg-amber-500" },
                  { label: "Report Under Review", color: "bg-purple-500" },
                  { label: "Report Sent to Provider", color: "bg-emerald-500" },
                ].map((status, i) => (
                  <div key={status.label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className={`w-3 h-3 rounded-full ${status.color}`} />
                    <span className="text-sm font-medium text-slate-700">{status.label}</span>
                    {i < 3 && <div className="ml-auto text-xs text-slate-400">Tracking</div>}
                    {i === 3 && <div className="ml-auto text-xs text-emerald-600 font-semibold">Complete</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}