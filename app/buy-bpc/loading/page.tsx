"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function LoadingPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/buy-bpc/payment")
    }, 10000)

    return () => clearTimeout(timer)
  }, [router])

  return <LoadingSpinner />
}

