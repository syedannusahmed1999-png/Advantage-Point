import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-2"
        >
          <button
            onClick={() => setDismissed(true)}
            className="self-end p-1 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            <a
              href="tel:+18005551234"
              className="p-3.5 bg-white rounded-full shadow-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link
              to="/get-started"
              className="px-5 py-3.5 bg-blue-600 text-white font-semibold rounded-full shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center gap-2 min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}