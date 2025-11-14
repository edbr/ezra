"use client";

import { Sidebar } from "@/components/Sidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12">
        <h1 className="text-3xl font-semibold mb-6">Welcome</h1>
        <p className="text-gray-700 max-w-xl">
          This is your dashboard. Add widgets, data, or summaries here.
        </p>
      </main>
    </div>
  );
}
