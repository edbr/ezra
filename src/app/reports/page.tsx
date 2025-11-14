"use client";

import { Sidebar } from "@/components/Sidebar";
import { ResultCard } from "@/components/ResultsCard";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12 space-y-12 max-w-4xl">
        <h1 className="text-3xl font-semibold">Results</h1>

        {/* IMAGING RESULTS SECTION */}
        <SectionHeader title="Imaging Results" />
            <Link href="/reports/fatty-liver">
            <ResultCard
                title="CT Scan Review"
                date="June 15, 2024"
                description="Your recent CT scan is ready to view. This includes risk scoring, structural reviews, and comparisons with your previous scans."
                status="ready"
            />
            </Link>

        <ResultCard
          title="MRI Full Body Scan"
          date="February 3, 2024"
          description="Your full-body MRI scan is processing."
          status="processing"
        showClinicalReview={false}
        />

        {/* DIVIDER */}
        <div className="h-12"></div>

        {/* LAB RESULTS SECTION */}
        <SectionHeader title="Lab Results" />

        <ResultCard
          title="Blood Panel Results"
          date="January 12, 2024"
          description="Your complete blood panel, including metabolic, inflammatory, and nutrient markers."
          status="done"
        showClinicalReview={false}
        />

        <ResultCard
          title="Genetic Risk Report"
          date="December 4, 2023"
          description="Your genetic screening results including insights for long-term health risk prevention were submitted."
          status="submitted"
          showClinicalReview={false}
/>
      </main>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
  );
}
