"use client";

import { Sidebar } from "@/components/Sidebar";
import { TaskList } from "@/components/TaskList";
import { ResultCard } from "@/components/ResultsCard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12 space-y-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome</h1>
        <ResultCard
          title="CT Scan Results - June 2024"
          date="June 15, 2024"
          description="Your recent CT scan has been processed and is ready for review. Click below to view detailed results and insights."
        />
        <TaskList header="Your progress:" />
      </main>
    </div>
  );
}
