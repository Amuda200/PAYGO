"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { NotificationSettings } from "@/components/notification-settings"

export default function SettingsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 border-b p-4">
        <button onClick={() => router.push("/dashboard")} className="text-black">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">Settings</h1>
      </header>

      <main className="p-4">
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Notifications</h2>
            <NotificationSettings />
          </section>
        </div>
      </main>
    </div>
  )
}

