"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ConfirmPage() {
  const [email, setEmail] = useState("")
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const storedEmail = localStorage.getItem("bpcUserEmail")
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
    }, 150) // 15 seconds total duration

    // Redirect after 15 seconds
    const timer = setTimeout(() => {
      router.push("/buy-bpc/error")
    }, 15000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="mx-auto max-w-md space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-2 w-8 bg-[#00C3F7]"></div>
            <div className="h-2 w-12 bg-[#00C3F7]"></div>
            <div className="h-2 w-10 bg-[#00C3F7]"></div>
          </div>
          <div className="text-right">
            <div className="text-sm">{email}</div>
            <div>
              Pay <span className="text-green-600">NGN 5,500</span>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className="text-center text-xl font-medium">
          We're waiting to confirm your transfer this can take a few minutes
        </div>

        {/* Progress Indicator */}
        <div className="relative pt-10">
          <div className="relative z-10 flex justify-between">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full bg-green-600"></div>
              <span className="mt-2 text-sm">Sent</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full border-2 border-gray-300"></div>
              <span className="mt-2 text-sm">Receiving</span>
            </div>
          </div>
          <div className="absolute top-14 left-0 right-0 h-2 bg-gray-200">
            <div className="h-full bg-green-600 transition-all duration-150" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-8">
          <button className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium">
            Change Payment Method
          </button>
          <button className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium">Cancel Payment</button>
        </div>
      </div>
    </div>
  )
}

