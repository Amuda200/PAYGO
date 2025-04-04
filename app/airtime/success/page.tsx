"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

export default function AirtimeSuccessPage() {
  const [details, setDetails] = useState<{
    phoneNumber: string
    amount: number
    network: string
  } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedDetails = localStorage.getItem("lastAirtimeTopup")
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails))
      localStorage.removeItem("lastAirtimeTopup")
    }
  }, [])

  if (!details) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#0000FF]">
          <Check className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-black">Airtime Purchase Successful!</h1>
        <div className="rounded-lg bg-gray-50 p-6">
          <p className="mb-4 text-gray-600">Purchase details:</p>
          <div className="space-y-2 text-left">
            <p className="text-gray-700">
              <span className="text-gray-500">Phone Number: </span>
              {details.phoneNumber}
            </p>
            <p className="text-gray-700">
              <span className="text-gray-500">Amount: </span>₦{details.amount.toLocaleString()}
            </p>
            <p className="text-gray-700">
              <span className="text-gray-500">Network: </span>
              {details.network.charAt(0).toUpperCase() + details.network.slice(1)}
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full rounded-lg bg-[#0000FF] p-4 text-base font-medium text-white hover:bg-[#0000FF]/90"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

