"use client";

import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import numbersData from "../../../data/emptydata.json"; // local import

export default function ManageListsPage() {
  const [numbers, setNumbers] = useState<number[] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      // simulate 500ms delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setNumbers(numbersData.numbers);
    };
    loadData();
  }, []);

  if (!numbers) {
    // show loading skeleton while numbers are null
    return (
      <div className="p-6">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Lists</h1>

        {numbers.length === 0 ? (
          <p className="text-gray-500 text-center mt-10 text-lg">
            No fields found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {numbers.map((n) => (
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
