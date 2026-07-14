import React from 'react'

export function Input(props) {
  return (
    <input
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      {...props}
    />
  )
}
