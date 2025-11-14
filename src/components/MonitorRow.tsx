"use client";

export function MonitorRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
        <span className="text-lg">🫀</span>
      </div>
      <span className="w-48">{label}</span>
      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
    </div>
  );
}
