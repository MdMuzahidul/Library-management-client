import React, { useEffect, useState } from "react";

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
              <li
                key={request.id || request._id}
                className="flex flex-col md:flex-row md:items-center gap-2 py-6 px-2 hover:bg-green-50 rounded-lg transition"
              >
                <div className="flex-1">
                  <p className="font-semibold text-lg text-green-800">
                    {request.bookTitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    User: {request.email}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Department: {request.department || "N/A"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Student Id: {request.studentId || "N/A"}
                  </p>
                  {request.borrowDate && (
                    <p className="text-gray-400 text-xs mt-1">
                      Requested on:{" "}
                      {new Date(request.borrowDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-xs font-semibold">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-xs font-semibold">
                    Reject
                  </button>
                </div>
              </li>
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
