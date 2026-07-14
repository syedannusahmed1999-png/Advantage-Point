import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button className={`px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold transition hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  )
}
