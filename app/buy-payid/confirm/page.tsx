"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ConfirmPage() {
  const [email, setEmail] = useState("")
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const storedEmail = localStorage.getItem("payidUserEmail")
    if (storedEmail) {
      setEmail(storedEmail)
    }

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 100) // 10 seconds total duration

    // Redirect after 10 seconds
    const timer = setTimeout(() => {
      router.push("/buy-payid/payment-result")
    }, 10000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="mx-auto max-w-md space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-1 w-6 bg-[#00C3F7]"></div>
            <div className="h-1 w-8 bg-[#00C3F7]"></div>
            <div className="h-1 w-7 bg-[#00C3F7]"></div>
          </div>
          <div className="text-right">
            <div className="text-xs">{email}</div>
            <div className="text-sm">
              Pay <span className="text-green-600">NGN 7,200</span>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className="text-center text-base font-medium">
          We're confirming your payment. This may take a few moments.
        </div>

        {/* Progress Indicator */}
        <div className="relative pt-6">
          <div className="relative z-10 flex justify-between">
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-green-600"></div>
              <span className="mt-1 text-xs">Sent</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
              <span className="mt-1 text-xs">Confirming</span>
            </div>
          </div>
          <div className="absolute top-10 left-0 right-0 h-1 bg-gray-200">
            <div className="h-full bg-green-600 transition-all duration-150" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

