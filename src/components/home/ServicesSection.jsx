import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Shield, MessageCircle, Sun, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import Img1 from "@/assets/images/20.png";
import Img2 from "@/assets/images/21.png";
import Img3 from "@/assets/images/22.png";
import Img4 from "@/assets/images/23.png";
import Img5 from "@/assets/images/24.png";
import Img6 from "@/assets/images/25.png";


const services = [
  {
    image: Img1,
    title: "Behavioral Assessments",
    description: "Comprehensive psychological evaluations for surgical, bariatric, and pain management patients.",
    link: "/services#assessments",
  },
  {
    image: Img2,
    title: "General Counseling",
    description: "Individual therapy sessions with licensed clinicians for a wide range of mental health concerns.",
    link: "/services#counseling",
  },
  {
    image: Img3,
    title: "Anxiety Therapy",
    description: "Evidence-based treatment for generalized anxiety, social anxiety, and panic disorders.",
    link: "/services#anxiety",
  },
  {
    image: Img4,
    title: "Depression Counseling",
    description: "Supportive therapy to help you navigate depression and rediscover joy and purpose.",
    link: "/services#depression",
  },
  {
    image: Img5,
    title: "Trauma & PTSD",
    description: "Specialized trauma-focused therapy to process and heal from difficult life experiences.",
    link: "/services#trauma",
  },
  {
    image: Img6,
    title: "Relationship Counseling",
    description: "Guidance for navigating relationship challenges, divorce, and family transitions.",
    link: "/services#relationships",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Behavioral Health Care"
          description="From clinical assessments to ongoing counseling, we provide the full spectrum of behavioral health services through secure telehealth."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={service.link}
                className="group block h-full p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
              >
                {/* <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                  <img src={service.image} alt={service.title} className="w-6 h-6 text-blue-600" />
                </div> */}
                 <img src={service.image} alt={service.title} className="w-6 h-6 text-blue-600" />
                <h3 className="mt-5 font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}