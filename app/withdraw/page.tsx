import { WithdrawForm } from "@/components/withdraw-form"

export default function WithdrawPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-purple-600 p-4">
        <h1 className="text-lg font-bold text-white">Transfer To Bank</h1>
      </header>
      <main className="flex-grow p-4">
        <WithdrawForm />
      </main>
    </div>
  )
}

