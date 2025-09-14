
export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded-2xl p-4 h-48 animate-pulse"
        ></div>
      ))}
    </div>
  );
}