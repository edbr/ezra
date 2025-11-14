"use client";

export function ResultCard({
  title,
  date,
  description,
  status = "ready",
  showClinicalReview = true,
}: {
  title: string;
  date: string;
  description?: string;
  status?: "submitted" | "processing" | "ready" | "done";
  showClinicalReview?: boolean;
}) {

  const statusStyles = {
    submitted: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      dot: "bg-yellow-600",
      label: "Submitted",
    },
    processing: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      dot: "bg-orange-600",
      label: "Processing",
    },
    ready: {
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-500",
      label: "Ready for Review",
    },
    done: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-500",
      label: "Reviewed",
    },
  }[status];

  return (
    <div className="w-full bg-white border rounded-lg p-6 shadow-sm space-y-4">
      {/* Top Row */}
      <div className="flex justify-between items-start">

        {/* ICON */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500 705.5"
            className="h-8 w-auto fill-black opacity-80"
          >
            <g fill="currentColor">
              <path d="M1500 352.8C1500 157.9 1342.1 0 1147.2 0S794.5 157.9 794.5 352.8s157.9 352.8 352.8 352.8c97.4 0 185.6-39.5 249.4-103.3l-56.3-56.5c-49.4 49.5-117.7 80.1-193.2 80.1-150.8 0-273-122.2-273-273s122.2-273 273-273 273 122.2 273 273h79.8z"></path>
              <path d="M1260.4 352.8h80.1c0-106.7-86.5-193.2-193.2-193.2-106.7 0-193.2 86.5-193.2 193.2h80.1c0-48.8 30.9-90.4 74.3-106.3-15.7 11.8-25.9 30.6-25.9 51.8 0 35.8 29 64.7 64.7 64.7 35.8 0 64.7-29 64.7-64.7 0-21.2-10.2-40-25.9-51.8 43.3 15.8 74.3 57.4 74.3 106.3m-900.8 70.6V299.1c0-42.5-4.1-73.7-55.2-73.7-40.9 0-62.4 26.1-62.4 67.5v130.4h-62V299.1c0-42.5-4.6-73.7-55.2-73.7-40.9 0-62.9 26.1-62.9 67.5v130.4H0V179.9h61.9v33.8h.5c13.8-21 42.5-39.9 87.5-39.9 35.3 0 64.5 11.8 81.3 39.9 16.9-17.9 43.5-39.9 95.1-39.9 61.4 0 95.7 21 95.7 106.9v142.7h-62.4zm292.1-243.5v130.4c0 41.4-21.9 67.4-62.7 67.5-50.8-.1-54.9-31.3-54.9-73.7V179.9h-62.4v142.7c0 84.2 32.9 106 92 106.9h3.6v-.1c42.9-1 70.4-19.4 83.8-39.8h.5v33.8c0 38.5-31.4 69.9-70 69.9-15 0-28.9-4.7-40.2-12.8l-44.2 44.2c22.9 19.1 52.3 30.6 84.4 30.6 72.8 0 131.9-59 131.9-131.9V179.9h-61.8z"></path>
            </g>
          </svg>
        </div>

        {/* STATUS + DATE */}
        <div className="flex flex-row items-end gap-2">
          <div
            className={`flex items-center gap-2 ${statusStyles.bg} ${statusStyles.text} text-xs font-semibold px-3 py-1 rounded-full`}
          >
            <span className={`w-2 h-2 rounded-full ${statusStyles.dot}`}></span>
            {statusStyles.label}
          </div>

          <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full">
            {date}
          </div>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

      {/* NEW PERSONALIZED MESSAGE */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

{/* ACTION BUTTONS */}
<div className="flex gap-4 pt-2">

  {/* Primary action */}
  <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition">
    View Scan Results
  </button>

  {/* Secondary action — only shown when allowed */}
  {showClinicalReview && (
    <button className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-100 transition">
      Send for Clinical Review
    </button>
  )}
</div>

    </div>
  );
}
