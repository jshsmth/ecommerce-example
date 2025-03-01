"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        Something went wrong!
      </h1>
      <p className="mb-6 text-gray-700">
        {error.message || "An unexpected error occurred"}
      </p>
    </div>
  );
}
