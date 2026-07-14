import { useState, useEffect } from 'react'

export function useToast() {
  const [message, setMessage] = useState(null)

  const toast = ({ title, description }) => {
    setMessage({ title, description })
  }

  useEffect(() => {
    if (!message) return
    const timeout = setTimeout(() => setMessage(null), 3000)
    return () => clearTimeout(timeout)
  }, [message])

  return { toast, message }
}
