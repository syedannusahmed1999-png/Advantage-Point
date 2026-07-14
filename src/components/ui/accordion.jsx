import React from 'react'

export function Accordion({ children, className = '' }) {
  return <div className={`space-y-3 ${className}`}>{children}</div>
}

export function AccordionItem({ children }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-5">{children}</div>
}

export function AccordionTrigger({ children, className = '' }) {
  return <button className={`w-full text-left font-semibold ${className}`}>{children}</button>
}

export function AccordionContent({ children, className = '' }) {
  return <div className={`mt-3 text-slate-600 ${className}`}>{children}</div>
}
