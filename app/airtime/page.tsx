import { AirtimeForm } from "@/components/airtime-form"

export default function AirtimePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <a href="/dashboard" className="text-black">
            ← Airtime
          </a>
        </div>
      </header>
      <main className="flex-grow p-3">
        <div className="mb-4 rounded-xl bg-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-base font-bold">Enjoy </span>
              <span className="text-base font-bold text-yellow-300">Airtime </span>
              <span className="text-base font-bold">Bonuses!</span>
            </div>
            <button className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">GO</button>
          </div>
        </div>
        <AirtimeForm />
      </main>
    </div>
  )
}

