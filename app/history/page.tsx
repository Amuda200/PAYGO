"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

type Transaction = {
  type: "withdrawal" | "airtime" | "data"
  amount: number
  date: string
  details: {
    phoneNumber?: string
    data?: string
    duration?: string
    network?: string
    accountName?: string
    accountNumber?: string
    bank?: string
  }
}

export default function HistoryPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions")
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions))
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 border-b p-4">
        <button onClick={() => router.push("/dashboard")} className="text-black">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">Transaction History</h1>
      </header>

      <main className="p-4">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet</p>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium capitalize">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <p className="font-bold text-red-500">-₦{transaction.amount.toLocaleString()}</p>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {transaction.type === "withdrawal" && (
                    <>
                      <p>Account: {transaction.details.accountName}</p>
                      <p>Number: {transaction.details.accountNumber}</p>
                      <p>Bank: {transaction.details.bank}</p>
                    </>
                  )}
                  {(transaction.type === "airtime" || transaction.type === "data") && (
                    <>
                      <p>Phone: {transaction.details.phoneNumber}</p>
                      <p>Network: {transaction.details.network}</p>
                      {transaction.type === "data" && (
                        <>
                          <p>Data: {transaction.details.data}</p>
                          <p>Duration: {transaction.details.duration}</p>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

