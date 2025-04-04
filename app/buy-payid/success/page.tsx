"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, Copy } from "lucide-react"

const PAY_ID = "FA-1976DFPAYGO45BG16EF"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PAY_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Payment Received</h1>
        <p className="text-gray-600">Your payment has been successfully processed. Here's your PAY ID:</p>
        <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow">
          <span className="font-mono text-lg">{PAY_ID}</span>
          <button onClick={copyToClipboard} className="text-purple-600 hover:text-purple-800">
            <Copy className="h-5 w-5" />
          </button>
        </div>
        {copied && <p className="text-green-600 text-sm">Copied to clipboard!</p>}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full rounded-lg bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

