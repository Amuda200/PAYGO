"use client"

import { useRouter } from "next/navigation"
import { XCircle } from "lucide-react"

export default function PaymentResultPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <XCircle className="h-8 w-8 text-red-600" />
        </div>
        <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">Failed</div>
        <h1 className="text-xl font-bold text-gray-900">Payment Failed</h1>
        <p className="text-sm text-gray-600">
          Payment Not received. Retry your payment for your code and make sure you pay the exact amount.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/buy-payid/payment")}
            className="w-full rounded-lg bg-purple-600 py-2 text-xs font-medium text-white hover:bg-purple-700"
          >
            Retry Payment
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-purple-600 text-xs font-medium hover:underline"
          >
            Cancel and Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

