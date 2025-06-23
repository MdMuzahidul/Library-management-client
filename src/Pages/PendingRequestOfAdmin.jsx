import React, { useEffect, useState } from "react";
import PendingCard from "../Components/PendingCard";

const PendingRequestOfAdmin = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/borrowed/pending")
      .then((response) => response.json())
      .then((data) => {
        // Handle the pending requests data
        console.log(data);
        setRequests(data);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-2 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
          Pending Requests
        </h1>
        <ul className="divide-y divide-gray-200">
          {requests.length > 0 ? (
            requests.map((request) => (
              <PendingCard key={request.id || request._id} request={request} />
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
