import React from "react";

export default function SectionHeading({ eyebrow, title, description, centered = true, light = false }) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.1em] mb-3 ${light ? "text-blue-300" : "text-blue-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}