import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const insurers = [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Medicare",
  "Tricare",
  "Anthem",
];

export default function InsuranceSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insurance"
          title="Most Major Insurance Plans Accepted"
          description="We work with the top insurance carriers nationwide. Don't see yours? Contact us — we accept many additional plans."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {insurers.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 p-5 rounded-xl bg-white border border-slate-100 shadow-sm"
            >
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">{name}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 min-h-[48px]"
          >
            Verify Your Insurance
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}