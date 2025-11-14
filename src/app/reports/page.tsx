"use client";

import { Sidebar } from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MonitorRow } from "@/components/MonitorRow";

export default function ReportsPage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12">
        <h2 className="text-2xl font-semibold mb-8">My Reports (0)</h2>

        <Card className="w-96 mb-12">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Cancer Risk Assessment
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                Not Completed
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="px-0">
              Start Cancer Risk Assessment
            </Button>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold flex items-center gap-2">
          My Monitor{" "}
          <span className="text-xs ml-1 bg-black text-white px-2 py-0.5 rounded">
            NEW
          </span>
        </h3>

        <p className="text-gray-600 mt-2 mb-6 max-w-xl">
          Ezra Monitor is a comparison of your scans over time and allows you to track
          how your body changes. Each section displays the highest risk score.
        </p>

        <Button>Book Now</Button>

        <div className="mt-10 space-y-8">
          {["Head And Neck", "Spine", "Lung", "Abdomen", "Pelvis"].map(
            (section) => (
              <MonitorRow key={section} label={section} />
            )
          )}
        </div>
      </main>
    </div>
  );
}
