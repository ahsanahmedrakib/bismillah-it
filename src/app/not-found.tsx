"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-black text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-sm text-slate-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="rounded-lg border-2 border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 uppercase tracking-wider transition-colors hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
        >
          Go Back
        </button>
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider transition-colors hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
