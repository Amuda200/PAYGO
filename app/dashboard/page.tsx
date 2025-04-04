import { DashboardContent } from "@/components/dashboard-content"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardContent />
      <Footer />
    </div>
  )
}

