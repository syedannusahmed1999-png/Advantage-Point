import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const TELEHEALTH_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/e7e73d236_generated_0f44a7d5.png";
const PROVIDER_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/8613617a4_generated_8cb64947.png";

const paths = [
  {
    icon: User,
    eyebrow: "For Patients",
    title: "Start Your Healing Journey",
    description: "Whether you need a behavioral assessment or ongoing counseling, our licensed clinicians are ready to help — from the comfort of your home.",
    features: ["General Counseling", "Anxiety & Depression", "Trauma & PTSD", "Grief & Divorce"],
    cta: "Find Your Therapist",
    ctaLink: "/services",
    image: TELEHEALTH_IMG,
    gradient: "from-blue-600 to-blue-500",
    bgAccent: "bg-blue-50",
    textAccent: "text-blue-600",
  },
  {
    icon: Stethoscope,
    eyebrow: "For Providers",
    title: "Precision Assessments at Scale",
    description: "Fast, reliable behavioral evaluations for surgical candidates, pain management, and bariatric patients. Trusted by hospitals and practices nationwide.",
    features: ["Pre-Surgical Evaluations", "Bariatric Assessments", "Pain Clinic Support", "Fast Report Delivery"],
    cta: "Refer a Patient",
    ctaLink: "/providers",
    image: PROVIDER_IMG,
    gradient: "from-emerald-600 to-emerald-500",
    bgAccent: "bg-emerald-50",
    textAccent: "text-emerald-600",
  },
];

export default function DualPathSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How Can We Help?"
          title="Two Paths, One Mission"
          description="We serve both individuals seeking mental health support and healthcare providers who need clinical evaluations for their patients."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {paths.map((path, i) => (
            <motion.div
              key={path.eyebrow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={path.image}
                  alt={`${path.eyebrow} — ${path.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className={`absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/50`}>
                  <path.icon className={`w-4 h-4 ${path.textAccent}`} />
                  <span className="text-xs font-semibold text-slate-700">{path.eyebrow}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl text-slate-900">{path.title}</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">{path.description}</p>

                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {path.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${path.bgAccent.replace("bg-", "bg-")} ${path.textAccent.replace("text-", "bg-").replace("600", "500")}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={path.ctaLink}
                  className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${path.gradient} hover:opacity-90 transition-all shadow-lg min-h-[48px]`}
                >
                  {path.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}