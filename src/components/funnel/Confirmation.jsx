import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, Clock, Video, Mail, Phone, MessageSquare, Download, Bell } from "lucide-react";
import { useFunnel } from "@/components/funnel/FunnelContext";

export default function Confirmation() {
  const { appointment, recommendation, insurance } = useFunnel();

  const formatDate = (date) => {
    if (!date) return "Date TBD";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const checklist = [
    "Find a quiet, private space for your session",
    "Test your camera and microphone beforehand",
    "Have a stable internet connection",
    "Bring a list of current medications",
    "Write down any questions you have",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Success animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
        className="flex justify-center mb-6"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Appointment Confirmed!
        </h2>
        <p className="mt-3 text-slate-500 text-lg">
          We've sent a confirmation to {insurance.email || "your email"} and {insurance.phone || "your phone"}.
        </p>
      </motion.div>

      {/* Appointment details card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-center">
          <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-1">
            Your Appointment
          </p>
          <p className="font-heading font-bold text-xl text-white">
            {recommendation?.service || "Behavioral Health Appointment"}
          </p>
        </div>

        <div className="p-6 space-y-4">
          {/* Date */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Date</p>
              <p className="text-sm font-semibold text-slate-900">{formatDate(appointment.date)}</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Time</p>
              <p className="text-sm font-semibold text-slate-900">
                {appointment.time || "TBD"} ({Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop().replace("_", " ")} time)
              </p>
            </div>
          </div>

          {/* Provider */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-emerald-50 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-blue-600">
                {appointment.providerName?.split(" ").map((n) => n[0]).join("").slice(0, 2) || "DR"}
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-400">Provider</p>
              <p className="text-sm font-semibold text-slate-900">{appointment.providerName || "To be assigned"}</p>
            </div>
          </div>

          {/* Telehealth */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Video className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-emerald-500">Format</p>
              <p className="text-sm font-semibold text-emerald-700">Telehealth — join from anywhere</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Telehealth instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 rounded-3xl bg-white border border-slate-100 p-6"
      >
        <h3 className="font-heading font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-blue-600" />
          Telehealth Instructions
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          You'll receive a secure video link via email 30 minutes before your appointment. Simply click the link to join — no download required.
        </p>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Reminders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-start gap-3"
      >
        <Bell className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-slate-900">Automated reminders</p>
          <p className="text-xs text-slate-500 mt-0.5">
            You'll receive a reminder via text and email 24 hours and 1 hour before your appointment.
          </p>
        </div>
      </motion.div>

      {/* Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 grid sm:grid-cols-2 gap-4"
      >
        <a
          href="tel:+18005551234"
          className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all"
        >
          <Phone className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Need help?</p>
            <p className="text-xs text-slate-500">Call (800) 555-1234</p>
          </div>
        </a>
        <a
          href="mailto:info@advantagepointbehavioral.com"
          className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all"
        >
          <Mail className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Questions?</p>
            <p className="text-xs text-slate-500">Email our team</p>
          </div>
        </a>
      </motion.div>

      {/* Back to home */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 font-medium hover:text-blue-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}