"use client"

import { useState } from "react"
import { RegisterForm } from "@/components/register-form"
import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)
  const telegramLink = "https://t.me/rexnaija"

  return (
    <div className="flex min-h-screen flex-col bg-[#f8ecec]">
      <div className="flex justify-end p-4">
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 font-medium hover:underline"
        >
          Need Help?
        </a>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <div className="relative mx-auto h-24 w-48 animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(1)-k6NpTzoaCnoLJb0FozGSqIo4xMh2gM.jpeg"
                alt="PAYGO Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg text-gray-600">{isLogin ? "Login to continue" : "Register to continue"}</p>
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-purple-600 font-medium hover:underline">
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

