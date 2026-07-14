import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/6a4fdb63a7c153c9ebd03dcb/97d183542_generated_8e2e5d7a.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                150,000+ Assessments Completed Nationwide
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] text-balance">
              Your Mind Deserves{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Expert Care
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl">
              Behavioral health assessments and counseling from licensed clinicians — available nationwide through secure telehealth. Insurance accepted.
            </p>

            {/* Dual CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-started"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 flex items-center justify-center gap-2 min-h-[52px] text-base"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 min-h-[52px] text-base"
              >
                <Play className="w-4 h-4" />
                How It Works
              </Link>
            </div>

            {/* Quick Trust Points */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Insurance Accepted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Licensed Nationwide
              </span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <img
                src={HERO_IMG}
                alt="A person gazing out a sunlit window, feeling calm and hopeful after a behavioral health consultation"
                className="w-full h-auto object-cover aspect-video"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 max-w-[240px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-900 text-sm">Get Started</p>
                  <p className="text-xs text-slate-500">Takes 3 minutes</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}