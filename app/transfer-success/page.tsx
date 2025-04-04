"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import confetti from "canvas-confetti"

export default function TransferSuccessPage() {
  const [amount, setAmount] = useState("0")
  const router = useRouter()

  useEffect(() => {
    const transfer = JSON.parse(localStorage.getItem("lastTransfer") || "{}")
    if (transfer.amount) {
      setAmount(transfer.amount.toString())
    }

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#9333ea", "#7e22ce", "#6b21a8"],
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-purple-600 p-6 animate-bounce">
            <CheckCircle className="h-full w-full text-white" />
          </div>
          <div className="absolute -right-2 -top-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200 animate-pulse">
              <span className="text-lg">✨</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-purple-600">Transfer Successful!</h1>
          <p className="text-xl">
            Your transfer of ₦{Number(amount).toLocaleString()}.00 has been processed successfully.
          </p>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 text-purple-600">
              🎉 Success
            </span>
          </div>
        </div>
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full rounded-xl bg-purple-600 p-4 text-lg font-medium text-white hover:bg-purple-700"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

