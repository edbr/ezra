"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function AccountPage() {
  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <Sidebar />

      <main className="flex-1 p-12 max-w-3xl">
        <h1 className="text-3xl font-semibold mb-10">Account Settings</h1>

        <AccountForm />

        <div className="h-12" />

        <Preferences />
      </main>
    </div>
  );
}

/* ---------------------------------------------------
   PERSONAL INFORMATION (Baked-In / View Only)
--------------------------------------------------- */

function AccountForm() {
  const personalInfo = {
    name: "Eduardo Belluti",
    address: "Truckee, California",
    dob: "2025-03-12",
  };

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>

      <div className="space-y-4">
        <InfoRow label="Full Name" value={personalInfo.name} />
        <InfoRow label="Address" value={personalInfo.address} />
        <InfoRow
          label="Date of Birth"
          value={new Date(personalInfo.dob).toLocaleDateString()}
        />
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-lg font-medium text-gray-900">{value}</span>
    </div>
  );
}

/* ---------------------------------------------------
   PREFERENCES SECTION
--------------------------------------------------- */

function Preferences() {
  const [preference, setPreference] = useState("immediate");

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>

      <p className="text-gray-600 leading-relaxed">
        You are always in control of how you receive your scan results.
      </p>

      <div className="space-y-3">
        <RadioOption
          label="Receive results immediately"
          value="immediate"
          selected={preference}
          onChange={setPreference}
        />
        <RadioOption
          label="Receive results after clinical review"
          value="delayed"
          selected={preference}
          onChange={setPreference}
        />
      </div>
    </div>
  );
}

function RadioOption({
  label,
  value,
  selected,
  onChange,
}: {
  label: string;
  value: string;
  selected: string;
  onChange: (v: string) => void;
}) {
  const active = selected === value;

  return (
    <label
      onClick={() => onChange(value)}
      className="flex items-center gap-3 cursor-pointer"
    >
      <div
        className={`w-5 h-5 rounded-full border flex items-center justify-center transition
          ${active ? "border-black" : "border-gray-400"}
        `}
      >
        {active && <div className="w-3 h-3 rounded-full bg-black"></div>}
      </div>

      <span className="text-gray-800">{label}</span>
    </label>
  );
}
