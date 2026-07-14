import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Users, Heart, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCounter from "@/components/shared/StatCounter";
import TrustBar from "@/components/shared/TrustBar";

const ABOUT_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/6e95dea88_generated_dd42b934.png";
const TEAM_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/a242b789b_generated_6733bd7a.png";

const values = [
  { icon: Heart, title: "Compassion First", description: "Every interaction is guided by empathy. We understand that seeking behavioral health support takes courage." },
  { icon: Shield, title: "Clinical Excellence", description: "Our licensed clinicians deliver evidence-based evaluations and therapy backed by the highest professional standards." },
  { icon: Zap, title: "Accessibility", description: "Telehealth removes barriers. No travel, no waiting rooms — just quality care from wherever you are." },
  { icon: Target, title: "Precision", description: "Our assessments are thorough, accurate, and delivered with the speed that medical providers depend on." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">About Us</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Behavioral Health Leadership Since 2012
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Advantage Point Behavioral has been at the forefront of behavioral health assessment and telehealth counseling for over a decade. With more than 150,000 evaluations completed, we are one of the most trusted names in behavioral health across the United States.
              </p>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                What started as a specialized assessment service for physicians and surgical practices has grown into a comprehensive behavioral health platform — now offering direct-to-consumer counseling for individuals seeking support for anxiety, depression, trauma, and more.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <img
                src={ABOUT_IMG}
                alt="A caring counselor and patient in a bright modern office, sharing a moment of trust and understanding"
                className="rounded-3xl shadow-2xl shadow-slate-900/10 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">Our Mission</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight text-balance">
              Making quality behavioral health care accessible to every person and provider who needs it.
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              We believe that geography, schedules, and stigma should never stand between someone and the behavioral health care they need. Through telehealth, we bring licensed clinicians directly to patients — and give healthcare providers the reliable, fast evaluations their work demands.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Every Decision"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-5">
                  <v.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img
                src={TEAM_IMG}
                alt="Diverse team of healthcare professionals collaborating in a modern clinical setting"
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">Our Team</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Licensed Clinicians You Can Trust
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Our nationwide network includes psychologists, licensed clinical social workers, and licensed professional counselors — each credentialed, experienced, and dedicated to providing the highest standard of care.
              </p>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                Every clinician is specially trained in the assessments they conduct, from pre-surgical behavioral evaluations to trauma-informed therapy.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-heading font-extrabold text-3xl text-slate-900">
                    <StatCounter end={50} suffix="+" />
                  </p>
                  <p className="text-sm text-slate-500">Clinicians</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-3xl text-slate-900">
                    <StatCounter end={40} suffix="+" />
                  </p>
                  <p className="text-sm text-slate-500">States Covered</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-3xl text-slate-900">
                    <StatCounter end={12} suffix="+" />
                  </p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[48px]"
              >
                Meet Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}