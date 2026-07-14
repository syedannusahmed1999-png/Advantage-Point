import React from 'react'

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Account setup needed</h1>
        <p className="mt-4 text-slate-600">
          Your account is not registered yet. Please contact support or complete registration to continue.
        </p>
      </div>
    </div>
  )
}
