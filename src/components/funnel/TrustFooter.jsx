import React from "react";
import { Shield, Lock, CheckCircle } from "lucide-react";

export default function TrustFooter() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-slate-400">
      <span className="flex items-center gap-1.5">
        <Shield className="w-3.5 h-3.5 text-emerald-500" />
        HIPAA Compliant
      </span>
      <span className="flex items-center gap-1.5">
        <Lock className="w-3.5 h-3.5 text-emerald-500" />
        256-bit Encrypted
      </span>
      <span className="flex items-center gap-1.5">
        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
        Licensed Nationwide
      </span>
    </div>
  );
}