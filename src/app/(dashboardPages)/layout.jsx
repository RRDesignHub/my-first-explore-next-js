import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 md:w-1/6 bg-white shadow-md p-4">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <ul className="flex flex-col justify-center gap-4">
          <Link
              href="/dashboard/overview"
              className="block w-full text-left px-4 py-2 rounded-md bg-blue-500 text-white"
            >
              <li>Overview</li>
            </Link>
            <Link
              href="/"
              className="block w-full text-left px-4 py-2 rounded-md bg-blue-500 text-white"
            >
              <li>Home</li>
            </Link>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-950">{children}</main>
    </div>
  );
}
