import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, MessageCircle, Heart, Sun, Shield, Users, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TrustBar from "@/components/shared/TrustBar";

const TELEHEALTH_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/e7e73d236_generated_0f44a7d5.png";

const serviceDetails = [
  {
    id: "assessments",
    icon: Brain,
    title: "Behavioral Health Assessments",
    subtitle: "Comprehensive evaluations for medical providers and patients",
    description: "Our behavioral health assessments are thorough, clinician-led evaluations designed to support informed medical decision-making. We provide pre-surgical psychological evaluations, bariatric assessments, spinal cord stimulator evaluations, and pain management behavioral screenings.",
    features: [
      "Pre-surgical psychological evaluations",
      "Bariatric surgery behavioral assessments",
      "Spinal cord stimulator evaluations",
      "Pain management behavioral screenings",
      "Transplant evaluations",
      "Reports delivered within 48 hours",
    ],
    cta: "Request an Assessment",
  },
  {
    id: "counseling",
    icon: MessageCircle,
    title: "General Counseling",
    subtitle: "Ongoing therapy with licensed clinicians",
    description: "Beyond assessments, our licensed therapists provide compassionate, individualized counseling through telehealth. Whether you're navigating life changes, managing stress, or seeking deeper self-understanding, we're here to help — from wherever you are.",
    features: [
      "Individual therapy sessions",
      "Licensed clinical professionals",
      "Flexible scheduling",
      "Secure telehealth platform",
      "Insurance accepted",
      "Personalized treatment plans",
    ],
    cta: "Start Counseling",
  },
  {
    id: "anxiety",
    icon: Heart,
    title: "Anxiety Therapy",
    subtitle: "Evidence-based treatment for anxiety disorders",
    description: "Anxiety can feel overwhelming, but you don't have to face it alone. Our therapists specialize in evidence-based approaches like Cognitive Behavioral Therapy (CBT) and mindfulness-based interventions to help you regain control and find calm.",
    features: [
      "Generalized Anxiety Disorder (GAD)",
      "Social anxiety and phobias",
      "Panic disorder treatment",
      "CBT and evidence-based approaches",
      "Coping skills development",
      "Ongoing progress monitoring",
    ],
    cta: "Get Anxiety Support",
  },
  {
    id: "depression",
    icon: Sun,
    title: "Depression Counseling",
    subtitle: "Supportive care to help you find your way back",
    description: "Depression affects how you think, feel, and function — but it is treatable. Our clinicians use proven therapeutic methods to help you understand your depression, develop healthier patterns, and rediscover a sense of purpose and connection.",
    features: [
      "Major Depressive Disorder",
      "Situational depression",
      "Postpartum depression",
      "Behavioral activation",
      "Goal-setting and motivation",
      "Medication coordination with your provider",
    ],
    cta: "Start Your Recovery",
  },
  {
    id: "trauma",
    icon: Shield,
    title: "Trauma & PTSD Therapy",
    subtitle: "Specialized care for trauma survivors",
    description: "Trauma changes the brain, but healing is possible. Our trauma-informed clinicians create a safe space where you can process painful experiences at your own pace — using therapies like EMDR, CPT, and somatic approaches.",
    features: [
      "Post-Traumatic Stress Disorder (PTSD)",
      "Complex trauma",
      "Childhood adverse experiences",
      "EMDR and CPT modalities",
      "Trauma-informed care approach",
      "Safe, secure telehealth environment",
    ],
    cta: "Find Trauma Support",
  },
  {
    id: "relationships",
    icon: Users,
    title: "Relationship & Grief Counseling",
    subtitle: "Navigate life's most challenging transitions",
    description: "Whether you're dealing with the pain of loss, navigating a divorce, or struggling in your relationships, our therapists provide compassionate guidance to help you process your emotions and move forward with clarity.",
    features: [
      "Grief and bereavement therapy",
      "Divorce counseling",
      "Relationship conflict resolution",
      "Family transitions",
      "Life adjustment support",
      "Building healthy communication",
    ],
    cta: "Get Support Now",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">Our Services</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Behavioral Health Services That Meet You Where You Are
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                From clinical assessments to ongoing therapy, our licensed clinicians provide comprehensive behavioral health care through secure telehealth — making expert support accessible from anywhere in the country.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services List */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceDetails.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
                  <service.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700">{service.subtitle}</span>
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[48px]"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 p-12 flex items-center justify-center border border-slate-100">
                  <service.icon className="w-32 h-32 text-blue-100" strokeWidth={0.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Our team can help you understand your options and find the right path forward. No pressure, no judgment — just guidance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 min-h-[52px]"
            >
              Speak with Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+18005551234"
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center min-h-[52px]"
            >
              Call (800) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}