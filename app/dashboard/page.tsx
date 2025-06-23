"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const mockSubmissions = [
  {
    id: 1,
    name: "Arijit Singh",
    category: "Singer",
    location: "Mumbai",
    fee: "₹1L - ₹3L"
  },
  {
    id: 2,
    name: "Nora Fatehi",
    category: "Dancer",
    location: "Delhi",
    fee: "₹2L - ₹4L"
  }
];

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState(mockSubmissions);

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Manager Dashboard</h2>

        {submissions.length === 0 ? (
          <p className="text-gray-600">No artist submissions available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3 border-b">Name</th>
                  <th className="p-3 border-b">Category</th>
                  <th className="p-3 border-b">City</th>
                  <th className="p-3 border-b">Fee</th>
                  <th className="p-3 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((artist) => (
                  <tr key={artist.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{artist.name}</td>
                    <td className="p-3 border-b">{artist.category}</td>
                    <td className="p-3 border-b">{artist.location}</td>
                    <td className="p-3 border-b">{artist.fee}</td>
                    <td className="p-3 border-b">
                      <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
