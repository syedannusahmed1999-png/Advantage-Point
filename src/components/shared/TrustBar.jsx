import React from "react";
import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const trustItems = [
  { icon: Users, label: "150,000+", sub: "Assessments Completed" },
  { icon: Award, label: "Since 2012", sub: "Trusted Provider" },
  { icon: Shield, label: "HIPAA", sub: "Fully Compliant" },
  { icon: Clock, label: "Fast", sub: "Turnaround Times" },
  { icon: CheckCircle, label: "Nationwide", sub: "Licensed Providers" },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-heading font-bold text-slate-900 text-sm">{item.label}</p>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}