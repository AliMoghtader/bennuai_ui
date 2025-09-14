// Skeleton template
export default function Loading() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Lists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Skeleton cards */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 animate-pulse rounded-2xl h-32"
          ></div>
        ))}
      </div>
    </div>
  )
}
