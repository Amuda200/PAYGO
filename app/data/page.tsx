import { DataBundleForm } from "@/components/data-bundle-form"

export default function DataPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <a href="/dashboard" className="text-black">
            ← Data
          </a>
        </div>
      </header>
      <main className="flex-grow p-3">
        <div className="mb-4 rounded-xl bg-green-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-base font-bold">Enjoy </span>
              <span className="text-base font-bold text-yellow-300">Glo's </span>
              <span className="text-base font-bold">Amazing </span>
              <span className="text-base font-bold text-yellow-300">5X </span>
              <span className="text-base font-bold">Airtime Bonuses!</span>
            </div>
            <button className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">GO</button>
          </div>
        </div>
        <DataBundleForm />
      </main>
    </div>
  )
}

