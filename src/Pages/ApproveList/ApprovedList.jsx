import React, { useEffect, useState } from "react";

const ApprovedList = () => {
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/admin/borrowed/approved")
      .then((res) => res.json())
      .then((data) => {
        setApproved(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-2 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
          Approved Lists
        </h1>
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading...</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {approved.length > 0 ? (
              approved.map((req) => (
                <li
                  key={req._id || req.id}
                  className="flex flex-col md:flex-row md:items-center gap-2 py-6 px-2 hover:bg-green-50 rounded-lg transition"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-lg text-green-800">
                      {req.bookTitle}
                    </p>
                    <p className="text-gray-600 text-sm">
                      User: {req.email}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Department: {req.department || "N/A"}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Student Id: {req.studentId || "N/A"}
                    </p>
                    {req.approvedDate && (
                      <p className="text-gray-400 text-xs mt-1">
                        Approved on:{" "}
                        {new Date(req.approvedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold">
                    Approved
                  </span>
                </li>
              ))
            ) : (
              <li className="text-gray-500 py-8 text-center">
                No approved requests found.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApprovedList;
