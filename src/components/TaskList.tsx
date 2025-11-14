"use client";

import { useState } from "react";

const defaultTasks = [
  { label: "Agree to Terms of Service", checked: true },
  { label: "Complete your profile", checked: true },
  { label: "Verify contact information", checked: true },
  { label: "Review how you receive your results", checked: false },
  { label: "Review your health summary", checked: false },
];

export function TaskList({ header }: { header?: string }) {
  return (
    <div className="space-y-4">
      {header && (
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{header}</h3>
      )}

      {defaultTasks.map((task, i) => (
        <TaskItem key={i} label={task.label} defaultChecked={task.checked} />
      ))}
    </div>
  );
}

function TaskItem({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div
      className={`p-4 rounded border flex items-center gap-3 cursor-pointer transition
        ${
          checked
            ? "bg-yellow-100 border-yellow-500"
            : "bg-white border-gray-300"
        }
      `}
      onClick={() => setChecked(!checked)}
    >
      <div
        className={`w-6 h-6 rounded flex items-center justify-center border transition
          ${
            checked
              ? "bg-yellow-400 border-yellow-500"
              : "bg-white border-gray-400"
          }
        `}
      >
        {checked && (
          <span className="text-black text-lg leading-none">✔</span>
        )}
      </div>

      <span
        className={`text-gray-700 transition ${
          checked ? "line-through opacity-60" : "opacity-100"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
