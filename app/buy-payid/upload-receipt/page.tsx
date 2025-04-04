"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UploadReceiptPage() {
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically upload the file to your server
    // For now, we'll just simulate a successful upload
    router.push("/buy-payid/confirm")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Payment Receipt</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="receipt" className="block text-sm font-medium text-gray-700">
              Payment Receipt
            </label>
            <input
              type="file"
              id="receipt"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-purple-700
                hover:file:bg-purple-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-xl py-2 px-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Upload and Continue
          </button>
        </form>
      </div>
    </div>
  )
}

