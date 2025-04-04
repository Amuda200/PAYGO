"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Copy } from "lucide-react"

export default function PaymentPage() {
  const [email, setEmail] = useState("")
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds
  const router = useRouter()

  useEffect(() => {
    const storedEmail = localStorage.getItem("bpcUserEmail")
    if (storedEmail) {
      setEmail(storedEmail)
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins} mins ${secs} secs`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="text-gray-500">Super Telecom</div>
          <div className="text-gray-500">{email}</div>
        </div>

        <div className="mt-6 rounded-xl bg-[#F5FBFF] p-4">
          <div className="text-gray-600">Amount to pay</div>
          <div className="text-2xl font-bold">₦5,500.00</div>
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>Amount ₦5,500.00</span>
            <span>Fee ₦0.00</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-[#00C3F7]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5L11 15L9 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 13L11 15L22 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium">Pay with Transfer</span>
            </div>
            <button className="text-[#00C3F7]">SWITCH</button>
          </div>

          <div className="mt-4">
            <div className="text-center">Transfer to account details below</div>
            <div className="mt-4 rounded-xl bg-gray-50 p-4">
              <div className="text-center font-medium">FairMoney MFB</div>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-[#00C3F7]">9347168830</span>
                <button onClick={() => copyToClipboard("9347168830")} className="text-gray-400">
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2 text-center">
                <div className="text-gray-600">Account Name</div>
                <div className="font-medium">Ebuka Nwite</div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                this one-time account expires in {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push("/buy-bpc/confirm")}
          className="mt-6 w-full rounded-xl bg-[#FF6B3D] py-4 text-center font-medium text-white"
        >
          {"I've Transfer The Money"}
        </button>
      </div>
    </div>
  )
}

