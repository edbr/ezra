"use client";

import { Sidebar } from "@/components/Sidebar";
import { TaskList } from "@/components/TaskList";
import { ResultCard } from "@/components/ResultsCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12 space-y-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome</h1>
            <Link href="/reports/fatty-liver">
            <ResultCard
                title="CT Scan Review"
                date="June 15, 2024"
                description="Your recent CT scan is ready for viewing. This includes risk scoring, structural reviews, and comparisons with your previous scans."
                status="ready"
            />
            </Link>

        <TaskList header="Your progress:" />
      </main>
    </div>
  );
}
