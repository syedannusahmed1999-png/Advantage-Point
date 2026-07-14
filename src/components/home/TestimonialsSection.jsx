import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    quote: "The assessment process was so smooth and professional. I felt heard and understood from the very first session. The telehealth format made it incredibly convenient.",
    name: "Sarah M.",
    role: "Bariatric Assessment Patient",
    rating: 5,
  },
  {
    quote: "We've been referring patients to Advantage Point for years. Their turnaround time is unmatched, and the quality of their behavioral evaluations gives us complete confidence.",
    name: "Dr. James R.",
    role: "Orthopedic Surgeon",
    rating: 5,
  },
  {
    quote: "Finding a therapist I connected with used to feel impossible. Through Advantage Point, I was matched with an amazing counselor within days. It changed my life.",
    name: "Michael T.",
    role: "Counseling Patient",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient & Provider Voices"
          title="Real Stories, Real Impact"
          description="Hear from patients and healthcare providers who trust Advantage Point Behavioral for their mental health care needs."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-600 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-heading font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}