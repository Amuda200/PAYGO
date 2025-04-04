"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

export default function DataSuccessPage() {
  const [details, setDetails] = useState<{
    phoneNumber: string
    data: string
    price: number
    network: string
    duration: string
  } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedDetails = localStorage.getItem("lastDataPurchase")
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails))
      localStorage.removeItem("lastDataPurchase")
    }
  }, [])

  if (!details) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600">
          <CheckCircle2 className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Data Purchase Successful!</h1>
        <div className="rounded-lg bg-gray-50 p-6">
          <p className="mb-4 text-gray-600">Purchase details:</p>
          <div className="space-y-2 text-left">
            <p>
              <span className="text-gray-600">Phone Number:</span> {details.phoneNumber}
            </p>
            <p>
              <span className="text-gray-600">Data Bundle:</span> {details.data}
            </p>
            <p>
              <span className="text-gray-600">Duration:</span> {details.duration}
            </p>
            <p>
              <span className="text-gray-600">Amount:</span> ₦{details.price.toLocaleString()}
            </p>
            <p>
              <span className="text-gray-600">Network:</span>{" "}
              {details.network.charAt(0).toUpperCase() + details.network.slice(1)}
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full rounded-lg bg-blue-600 p-4 text-sm font-medium text-white hover:bg-blue-700"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

