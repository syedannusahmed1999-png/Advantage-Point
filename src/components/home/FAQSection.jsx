import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    q: "What is a behavioral health assessment?",
    a: "A behavioral health assessment is a comprehensive evaluation conducted by a licensed clinician to evaluate your psychological and emotional well-being. These assessments are often required before certain medical procedures — like bariatric surgery or spinal cord stimulator implants — and help your medical team understand your mental health needs."
  },
  {
    q: "How does telehealth work?",
    a: "Our telehealth sessions are conducted via secure, HIPAA-compliant video conferencing. You simply need a smartphone, tablet, or computer with a camera and internet connection. You'll receive a private link before your appointment — just click to join from anywhere."
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, Medicare, Tricare, and Anthem. Contact us to verify your specific coverage — our team handles the paperwork so you don't have to."
  },
  {
    q: "How quickly can I get an appointment?",
    a: "Most patients can be seen within 48 hours. We understand that timely access to care is critical, especially when a medical procedure is pending. Our scheduling team works to accommodate urgent needs."
  },
  {
    q: "Are your clinicians licensed?",
    a: "Yes. Every clinician in our network is a licensed behavioral health professional — including psychologists, licensed clinical social workers, and licensed professional counselors. All providers are credentialed and experienced in the specific assessments they conduct."
  },
  {
    q: "Can I use Advantage Point for ongoing therapy?",
    a: "Absolutely. Beyond behavioral assessments, we offer general counseling services for anxiety, depression, trauma, PTSD, grief, relationship issues, and more. Our therapists provide ongoing, personalized care through regular telehealth sessions."
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Quick answers to help you feel confident about your care."
        />

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-slate-100 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-blue-600 py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}