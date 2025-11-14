"use client";

import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function FattyLiverResultPage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12 max-w-4xl space-y-10">
        {/* PAGE HEADER */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            CT Scan Result: Fatty Liver
          </h1>
          <p className="text-gray-600 mt-2">Completed on June 15, 2024</p>

          <div className="mt-4 inline-flex items-center gap-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-yellow-700 rounded-full" />
            Mild Abnormality Detected
          </div>
        </div>

        {/* IMAGE PREVIEW */}
<div className="bg-white border rounded-lg shadow-sm p-6 flex items-center justify-center h-64 overflow-hidden">
  <Image
    src="/liver.png"
    alt="CT Scan - Fatty Liver"
    width={600}
    height={400}
    className="object-contain rounded"
  />
</div>


        {/* SCAN FINDING */}
        <section className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Finding</h2>

          <div>
            <p className="text-lg font-semibold text-gray-900">
              Non-Alcoholic Fatty Liver (NAFLD)
            </p>

            <p className="text-gray-700 mt-2 leading-relaxed">
              Your CT scan indicates the presence of fat accumulation in the liver.
              This condition can lead to inflammation, fibrosis, cirrhosis, and liver
              cancer over time if not addressed. The good news is that with targeted
              lifestyle changes, NAFLD is often reversible.
            </p>
          </div>
        </section>

        {/* WHAT THIS MEANS */}
        <section className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">What This Means</h2>

          <p className="text-gray-700 leading-relaxed">
            Fatty liver develops when the liver stores more fat than it can process.
            This is commonly linked to insulin resistance, elevated triglycerides,
            central weight gain, and metabolic syndrome. Many patients have no symptoms,
            which makes imaging an essential tool for early detection.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Your result falls into the <strong>mild</strong> category, meaning that
            intervention now can prevent long-term complications.
          </p>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Recommendations</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduce sugar and refined carbohydrates</li>
            <li>Incorporate more vegetables, lean proteins, and high-fiber foods</li>
            <li>Aim for 150 minutes of moderate weekly exercise</li>
            <li>Limit alcohol intake</li>
            <li>Recheck liver imaging in 6–12 months</li>
          </ul>
        </section>

        {/* CTA BUTTON */}
        <div>
          <button className="px-6 py-3 bg-black text-white rounded-md shadow hover:bg-gray-900 transition">
            Book a Follow-Up Consultation
          </button>
        </div>
      </main>
    </div>
  );
}
