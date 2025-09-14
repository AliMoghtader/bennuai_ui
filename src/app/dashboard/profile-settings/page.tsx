"use client";

import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import numbersData from "../../../data/numbers.json"; // local import

export default function ManageListsPage() {
  const [numbers, setNumbers] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Flag to simulate error
  const simulateError = false; // set true to test error

  const loadData = async () => {
    setLoading(true);
    setError(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // simulate delay

      if (simulateError) throw new Error("Simulated error"); // simulate error

      setNumbers(numbersData.numbers);
    } catch (err) {
      console.error(err);
      setError(true);
      setNumbers(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Lists</h1>

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <div className="text-center mt-10">
            <p className="text-red-500 text-lg mb-4">Failed to load data.</p>
            <button
              onClick={loadData}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 cursor-pointer"
            >
              Retry
            </button>
          </div>
        ) : numbers && numbers.length === 0 ? (
          <p className="text-gray-500 text-center mt-10 text-lg">
            No fields found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {numbers!.map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-gray-700"
              >
                <div className="text-xl font-bold mb-2">{n}</div>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque euismod.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Example skeleton component
function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded-2xl p-4 h-48 animate-pulse"
        ></div>
      ))}
    </div>
  );
}
