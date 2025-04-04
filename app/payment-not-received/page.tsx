"use client"

import { useRouter } from "next/navigation"
import { XCircle } from "lucide-react"

export default function PaymentNotReceivedPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <XCircle className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Payment Not Received</h1>
        <p className="text-gray-600">
          We didn't receive any payment from you. Please try again or cancel if you wish to abort the transaction.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.back()}
            className="w-full rounded-lg bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700"
          >
            Retry Payment
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-purple-600 text-sm font-medium hover:underline"
          >
            Cancel and Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

