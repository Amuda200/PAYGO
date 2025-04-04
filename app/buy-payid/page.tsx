import { BuyPayIdForm } from "@/components/buy-payid-form"
import { Footer } from "@/components/footer"

export default function BuyPayIdPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#2D1357] p-4">
        <h1 className="text-lg font-bold text-white">Buy PAY ID</h1>
      </header>
      <main className="flex-grow p-4">
        <BuyPayIdForm />
        <p className="mt-4 text-sm text-gray-600 text-center">
          Your PAY ID will be displayed on the app once your payment is confirmed.
        </p>
      </main>
      <Footer />
    </div>
  )
}

