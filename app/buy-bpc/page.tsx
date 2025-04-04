import { BuyBPCForm } from "@/components/buy-bpc-form"

export default function BuyBPCPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0000FF] p-4">
        <h1 className="text-lg font-bold text-white">Buy BPC</h1>
      </header>
      <main className="p-4">
        <BuyBPCForm />
      </main>
    </div>
  )
}

