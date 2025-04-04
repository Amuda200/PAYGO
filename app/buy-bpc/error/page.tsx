"use client"

import { useRouter } from "next/navigation"
import { XCircle } from "lucide-react"

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center">
          <div className="animate-bounce">
            <XCircle className="h-20 w-20 text-red-500" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Payment Not Confirmed</h1>
          <p className="text-gray-600">
            We couldn't confirm your payment. Please try again or contact support if the issue persists.
          </p>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-red-600">📛 Error</span>
          </div>
        </div>
        <button
          onClick={() => router.push("/buy-bpc/payment")}
          className="w-full rounded-xl bg-[#0000FF] p-4 text-base font-medium text-white hover:bg-[#0000FF]/90"
        >
          Retry Payment
        </button>
      </div>
    </div>
  )
}

