import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, Clock, Video, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useFunnel } from "@/components/funnel/FunnelContext";
import TrustFooter from "@/components/funnel/TrustFooter";

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM",
];

const PROVIDERS = [
  { id: "any", name: "No preference", credential: "First available clinician", specialty: "All specialties" },
  { id: "p1", name: "Dr. Sarah Mitchell", credential: "PhD, Licensed Psychologist", specialty: "Anxiety & Depression" },
  { id: "p2", name: "Dr. James Chen", credential: "PsyD, Licensed Psychologist", specialty: "Trauma & PTSD" },
  { id: "p3", name: "Maria Rodriguez", credential: "LCSW, Licensed Therapist", specialty: "Grief & Relationships" },
  { id: "p4", name: "Dr. Emily Carter", credential: "PhD, Licensed Psychologist", specialty: "Behavioral Assessments" },
];

function getDaysArray(monthOffset = 0) {
  const today = new Date();
  today.setMonth(today.getMonth() + monthOffset);
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];

  // Add empty cells for days before the 1st
  const startDayOfWeek = firstDay.getDay();
  for (let i = 0; i < startDayOfWeek; i++) {
    days.push(null);
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    const date = new Date(year, month, d);
    // Only future dates, skip Sundays
    if (date >= new Date(new Date().setHours(0, 0, 0, 0)) && date.getDay() !== 0) {
      days.push(date);
    } else {
      days.push(null);
    }
  }
  return days;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AppointmentScheduling() {
  const { appointment, setAppointment, nextStep, prevStep } = useFunnel();
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(appointment.date || null);
  const [selectedTime, setSelectedTime] = useState(appointment.time || null);
  const [selectedProvider, setSelectedProvider] = useState(appointment.providerId || "any");

  const days = getDaysArray(monthOffset);
  const today = new Date();
  const displayMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const monthLabel = `${MONTH_NAMES[displayMonth.getMonth()]} ${displayMonth.getFullYear()}`;

  const handleDateSelect = (date) => {
    if (!date) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    const provider = PROVIDERS.find((p) => p.id === selectedProvider);
    setAppointment({
      date: selectedDate,
      time: selectedTime,
      providerId: selectedProvider,
      providerName: provider.name,
      providerCredential: provider.credential,
      providerSpecialty: provider.specialty,
      telehealth: true,
    });
    nextStep();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 mb-5">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Schedule Your Appointment
        </h2>
        <p className="mt-2 text-slate-500 text-base">
          Most patients are seen within 48 hours. Choose a time that works for you.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setMonthOffset((prev) => Math.max(0, prev - 1))}
              disabled={monthOffset === 0}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <h3 className="font-heading font-bold text-slate-900 text-sm">{monthLabel}</h3>
            <button
              onClick={() => setMonthOffset((prev) => prev + 1)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAY_NAMES.map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-slate-400 py-1">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((date, i) => {
              if (!date) return <div key={i} />;
              const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <button
                  key={i}
                  onClick={() => handleDateSelect(date)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : isToday
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots + Provider */}
        <div className="space-y-6">
          {/* Time slots */}
          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-slate-400" />
              <h3 className="font-heading font-bold text-slate-900 text-sm">
                {selectedDate ? `Available times — ${formatDate(selectedDate)}` : "Select a date first"}
              </h3>
            </div>
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-32 text-sm text-slate-300">
                Pick a date to see times
              </div>
            )}
          </div>

          {/* Provider selection */}
          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-sm">
            <h3 className="font-heading font-bold text-slate-900 text-sm mb-4">Choose Your Provider</h3>
            <div className="space-y-2">
              {PROVIDERS.map((p) => {
                const isSelected = selectedProvider === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProvider(p.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                      isSelected ? "border-blue-600 bg-blue-50" : "border-slate-100 hover:border-blue-200"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-emerald-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">
                        {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${isSelected ? "text-blue-700" : "text-slate-700"}`}>
                        {p.name}
                      </p>
                      <p className="text-xs text-slate-400 truncate">{p.credential} · {p.specialty}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                    }`}>
                      {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Summary + CTA */}
      <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Video className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {selectedDate && selectedTime
                  ? `${formatDate(selectedDate)} at ${selectedTime}`
                  : "Select date and time"}
              </p>
              <p className="text-xs text-slate-500">
                Telehealth · {PROVIDERS.find((p) => p.id === selectedProvider)?.name}
              </p>
            </div>
          </div>
          <button
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTime}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] w-full sm:w-auto"
          >
            Confirm Appointment
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <button
        onClick={prevStep}
        className="mt-6 flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <TrustFooter />
    </div>
  );
}