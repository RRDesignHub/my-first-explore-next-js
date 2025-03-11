"use client"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
      href={"/"}
        className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  )
}
