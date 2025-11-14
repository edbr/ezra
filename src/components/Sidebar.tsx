"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Reports", href: "/reports" },
  { label: "Invoices", href: "/invoices" },
  { label: "Account", href: "/account" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white p-6">
      <nav className="space-y-6">
        
        {/* LOGO */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1500 705.5"
            className="h-6 w-auto fill-black"
          >
            <g fill="currentColor">
              <path d="M1500 352.8C1500 157.9 1342.1 0 1147.2 0S794.5 157.9 794.5 352.8s157.9 352.8 352.8 352.8c97.4 0 185.6-39.5 249.4-103.3l-56.3-56.5c-49.4 49.5-117.7 80.1-193.2 80.1-150.8 0-273-122.2-273-273s122.2-273 273-273 273 122.2 273 273h79.8z"></path>
              <path d="M1260.4 352.8h80.1c0-106.7-86.5-193.2-193.2-193.2-106.7 0-193.2 86.5-193.2 193.2h80.1c0-48.8 30.9-90.4 74.3-106.3-15.7 11.8-25.9 30.6-25.9 51.8 0 35.8 29 64.7 64.7 64.7 35.8 0 64.7-29 64.7-64.7 0-21.2-10.2-40-25.9-51.8 43.3 15.8 74.3 57.4 74.3 106.3m-900.8 70.6V299.1c0-42.5-4.1-73.7-55.2-73.7-40.9 0-62.4 26.1-62.4 67.5v130.4h-62V299.1c0-42.5-4.6-73.7-55.2-73.7-40.9 0-62.9 26.1-62.9 67.5v130.4H0V179.9h61.9v33.8h.5c13.8-21 42.5-39.9 87.5-39.9 35.3 0 64.5 11.8 81.3 39.9 16.9-17.9 43.5-39.9 95.1-39.9 61.4 0 95.7 21 95.7 106.9v142.7h-62.4zm292.1-243.5v130.4c0 41.4-21.9 67.4-62.7 67.5-50.8-.1-54.9-31.3-54.9-73.7V179.9h-62.4v142.7c0 84.2 32.9 106 92 106.9h3.6v-.1c42.9-1 70.4-19.4 83.8-39.8h.5v33.8c0 38.5-31.4 69.9-70 69.9-15 0-28.9-4.7-40.2-12.8l-44.2 44.2c22.9 19.1 52.3 30.6 84.4 30.6 72.8 0 131.9-59 131.9-131.9V179.9h-61.8z"></path>
            </g>
          </svg>
        </div>

        {/* NAV ITEMS */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
        </div>

        <button className="text-sm text-gray-500 mt-20">Sign out</button>
      </nav>
    </aside>
  );
}

function SidebarItem({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={`cursor-pointer text-gray-700 hover:text-black transition ${
          active ? "font-semibold text-black" : ""
        }`}
      >
        {label}
      </div>
    </Link>
  );
}
