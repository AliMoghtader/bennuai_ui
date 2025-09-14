"use client";

import { useEffect, useState } from "react";
import LoadingSkeleton from "./loading";
import numbersData from "../../../data/numbers.json"; // local import

export default function ManageListsPage() {
  const [numbers, setNumbers] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(false);

    try {
      // Simulate server delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Get user role from cookie
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth-token="))
        ?.split("=")[1];

      if (!token) throw new Error("No auth token");

      // Decode token
      const decodedStr = decodeURIComponent(token);
      const decoded = JSON.parse(atob(decodedStr));
      setRole(decoded.role);

      // Set numbers based on role
      if (decoded.role === "admin") {
        setNumbers(numbersData.numbers.slice(0, 5));
      } else {
        setNumbers(numbersData.numbers);
      }
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
            {role === "admin"
              ? "No fields available for your role."
              : "No fields found."}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {numbers?.map((n) => (
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

            {/* Refresh button below content */}
            <div className="flex justify-center mt-6">
              <button
                onClick={loadData}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
              >
                Refresh
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
