"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"

export default function SupportPage() {
  const router = useRouter()
  const phoneNumber = "+2349113585676"
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`
  const whatsappChannelLink = "https://whatsapp.com/channel/0029VakAHcnEKyZFc7Mc9V06"

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 border-b p-4">
        <button onClick={() => router.push("/dashboard")} className="text-black">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">Contact Support</h1>
      </header>

      <main className="p-4">
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-2">WhatsApp Channel</h2>
            <a
              href={whatsappChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Join our WhatsApp Channel
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-2">Contact Support</h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

