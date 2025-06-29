import React, { useEffect, useState } from "react";
import PendingCard from "../Components/PendingCard";

const PendingRequestOfAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let intervalId;

    const fetchRequests = () => {
      fetch("http://localhost:5000/admin/borrowed/pending")
        .then((response) => response.json())
        .then((data) => {
          // Sort by borrowDate descending (most recent first)
          const sorted = [...data].sort(
            (a, b) => new Date(b.borrowDate) - new Date(a.borrowDate)
          );
          setRequests(sorted);
        });
    };

    fetchRequests(); // Initial fetch
    intervalId = setInterval(fetchRequests, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Filter logic
  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((req) => {
          const today = new Date();
          const reqDate = new Date(req.borrowDate);
          return (
            reqDate.getDate() === today.getDate() &&
            reqDate.getMonth() === today.getMonth() &&
            reqDate.getFullYear() === today.getFullYear()
          );
        });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-2 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
          Pending Requests
        </h1>
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded font-semibold transition ${
              filter === "all"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-green-700 hover:bg-green-100"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold transition ${
              filter === "today"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-green-700 hover:bg-green-100"
            }`}
            onClick={() => setFilter("today")}
          >
            Today's
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <PendingCard key={request.id || request._id} request={request} setRequests={setRequests} />
            ))
          ) : (
            <li className="text-gray-500 py-8 text-center">
              No pending requests found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PendingRequestOfAdmin;
