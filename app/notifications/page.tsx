"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bell, CheckCircle2, XCircle } from "lucide-react"
import { getNotifications, markAllAsRead, type Notification } from "@/lib/notifications"

export default function NotificationsPage() {
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const notifs = getNotifications()
    setNotifications(notifs)
    markAllAsRead()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 border-b p-4">
        <button onClick={() => router.push("/dashboard")} className="text-black">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">Notifications</h1>
      </header>

      <main className="p-4">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Bell className="h-12 w-12 text-gray-400" />
            <p className="mt-2 text-gray-500">No notifications yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-lg border p-4 ${notification.type === "success" ? "bg-green-50" : "bg-red-50"}`}
              >
                <div className="flex items-start gap-3">
                  {notification.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="mt-1 text-xs text-gray-400">{new Date(notification.date).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

