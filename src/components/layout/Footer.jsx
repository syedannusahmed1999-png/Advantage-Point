import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const footerLinks = {
  Services: [
    { label: "Behavioral Assessments", path: "/services#assessments" },
    { label: "General Counseling", path: "/services#counseling" },
    { label: "Anxiety Therapy", path: "/services#anxiety" },
    { label: "Depression Counseling", path: "/services#depression" },
    { label: "Trauma & PTSD", path: "/services#trauma" },
    { label: "Telehealth", path: "/how-it-works" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "For Providers", path: "/providers" },
    { label: "Contact", path: "/contact" },
  ],
  Resources: [
    { label: "FAQ", path: "/contact#faq" },
    { label: "Insurance Accepted", path: "/how-it-works#insurance" },
    { label: "Patient Resources", path: "/how-it-works" },
    { label: "Privacy Policy", path: "/contact" },
    { label: "Terms of Service", path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-balance">
                Ready to take the first step?
              </h2>
              <p className="mt-2 text-slate-400 text-lg max-w-lg">
                Schedule a confidential telehealth appointment today. Most insurances accepted.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/get-started"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 min-h-[48px]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+18005551234"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all text-center border border-slate-700 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Advantage Point logo" className="h-10 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              National leader in behavioral health assessments and telehealth counseling since 2012.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (800) 555-1234
              </a>
              <a
                href="mailto:info@advantagepointbehavioral.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@advantagepointbehavioral.com
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Nationwide Telehealth
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Advantage Point Behavioral. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                HIPAA Compliant
              </div>
              <span className="text-slate-700">·</span>
              <span className="text-xs text-slate-500">Telehealth Provider</span>
              <span className="text-slate-700">·</span>
              <span className="text-xs text-slate-500">Licensed Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}