import React, { useState } from "react";

const PendingCard = ({ request, setRequests, onApprove }) => {
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  const handleApprove = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/admin/borrowed/approve/${request._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "approved" }),
        }
      );
      if (res.ok) {
        setApproved(true);
        if (onApprove) onApprove(request._id);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    const res = await fetch(
      `http://localhost:5000/admin/borrowed/reject/${request._id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok) {
      setRequests((prev) => prev.filter(req => req._id !== request._id));
    }
  };

  return (
    <div>
      <li
        key={request.id || request._id}
        className="flex flex-col md:flex-row md:items-center gap-2 py-6 px-2 hover:bg-green-50 rounded-lg transition"
      >
        <div className="flex-1">
          <p className="font-semibold text-lg text-green-800">
            {request.bookTitle}
          </p>
          <p className="text-gray-600 text-sm">User: {request.email}</p>
          <p className="text-gray-600 text-sm">
            Department: {request.department || "N/A"}
          </p>
          <p className="text-gray-600 text-sm">
            Student Id: {request.studentId || "N/A"}
          </p>
          {request.borrowDate && (
            <p className="text-gray-400 text-xs mt-1">
              Requested on: {new Date(request.borrowDate).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-xs font-semibold ${
              approved ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleApprove}
            disabled={loading || approved}
          >
            {approved ? "Approved" : loading ? "Approving..." : "Approve"}
          </button>
          <button
            onClick={handleReject}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-xs font-semibold"
          >
            Reject
          </button>
        </div>
      </li>
    </div>
  );
};

export default PendingCard;
