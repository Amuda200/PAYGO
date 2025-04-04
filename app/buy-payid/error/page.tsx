"use client"

import { useRouter } from "next/navigation"

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="mx-auto h-20 w-20 text-red-500">
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Your payment was denied</h1>
        <p className="text-gray-600">
          Sorry, we weren't able to complete your payment at this time. Please try again later.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/buy-payid/payment")}
            className="w-full rounded-full bg-[#1e3799] py-3 text-lg font-medium text-white hover:bg-[#1e3799]/90"
          >
            Try again
          </button>
          <button onClick={() => router.push("/dashboard")} className="text-[#1e3799] font-medium hover:underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

