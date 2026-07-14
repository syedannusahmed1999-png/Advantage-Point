import React from "react";
import { motion } from "framer-motion";
import StatCounter from "@/components/shared/StatCounter";

const stats = [
  { value: 150000, suffix: "+", label: "Assessments Completed", description: "Since 2012" },
  { value: 50, suffix: "+", label: "Licensed Clinicians", description: "Nationwide network" },
  { value: 48, suffix: "hr", label: "Average Turnaround", description: "For assessments" },
  { value: 98, suffix: "%", label: "Patient Satisfaction", description: "Based on surveys" },
];

export default function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-400 mb-3">
            By The Numbers
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Trusted Across the Nation
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="font-heading font-extrabold text-4xl lg:text-5xl text-white tracking-tight">
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-semibold text-white text-sm">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}