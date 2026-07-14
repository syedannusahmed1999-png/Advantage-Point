import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";
import { useToast } from "@/components/ui/use-toast";

const contactMethods = [
  { icon: Phone, title: "Call Us", value: "(800) 555-1234", href: "tel:+18005551234", description: "Mon–Fri 8am–7pm EST" },
  { icon: Mail, title: "Email Us", value: "info@advantagepointbehavioral.com", href: "mailto:info@advantagepointbehavioral.com", description: "We respond within 24 hours" },
  { icon: MapPin, title: "Nationwide", value: "Telehealth Services", description: "Licensed in 40+ states" },
  { icon: Clock, title: "Hours", value: "Mon–Fri 8am–7pm EST", description: "Weekend appointments available" },
];

const faqs = [
  { q: "How do I schedule my first appointment?", a: "You can schedule by completing the contact form on this page, calling us directly at (800) 555-1234, or emailing info@advantagepointbehavioral.com. Our scheduling team will confirm your appointment within one business day." },
  { q: "What should I prepare for my first session?", a: "Have your insurance card ready and complete the secure intake form we'll send you via email. Find a quiet, private space with a reliable internet connection. That's it — we handle the rest." },
  { q: "How do I refer a patient as a provider?", a: "Healthcare providers can submit referrals through our contact form by selecting 'Provider Referral' as the inquiry type. You can also call our dedicated provider line for immediate assistance." },
  { q: "Is there a cost if my insurance doesn't cover the visit?", a: "We offer competitive self-pay rates for patients without insurance coverage. Contact us to discuss your options — we believe cost should never be a barrier to care." },
  { q: "Can I choose my therapist?", a: "Yes. While we can match you with a clinician based on your needs, specialty, and preferences, you're welcome to request a specific provider. We want you to feel completely comfortable with your care." },
];

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", type: "", message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast({ title: "Message Sent", description: "Our team will reach out within 24 hours." });
    setFormData({ name: "", email: "", phone: "", type: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 mb-4">Contact Us</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                We're Here to Help
              </h1>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Whether you're a patient seeking support or a provider looking to partner with us, our team is ready to assist. Reach out today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((m) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 mb-4">
                  <m.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900">{m.title}</h3>
                {m.href ? (
                  <a href={m.href} className="block mt-1 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors break-all">
                    {m.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-slate-700 font-medium">{m.value}</p>
                )}
                <p className="mt-1 text-xs text-slate-500">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-slate-500">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">I'm a... *</label>
                    <Select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      required
                      className="h-12 rounded-xl"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <SelectItem value="patient">Patient Seeking Care</SelectItem>
                      <SelectItem value="provider">Healthcare Provider</SelectItem>
                      <SelectItem value="referral">Provider Referral</SelectItem>
                      <SelectItem value="insurance">Insurance Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="min-h-[140px] rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 min-h-[48px]"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-slate-400 text-center">
                  Your information is encrypted and secure. We never share your data.
                </p>
              </form>
            </div>

            {/* FAQ */}
            <div id="faq">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-slate-500">
                Quick answers to the most common questions we receive.
              </p>

              <div className="mt-8">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-slate-100 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-slate-900 hover:text-blue-600 py-5 text-sm">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-500 leading-relaxed pb-5 text-sm">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}