"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
      <p className="text-[#888] mb-6 max-w-sm">
        We hit an unexpected error. Please try refreshing the page.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#2170e9] text-white font-semibold rounded-full hover:bg-[#3b82f6] transition-colors text-sm"
      >
        Try again
      </button>
    </div>
  );
}
