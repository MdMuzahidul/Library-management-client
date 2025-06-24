import React, { useEffect, useState } from "react";
import AppeovedCard from "./AppeovedCard";

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
                <AppeovedCard key={req._id || req.id} req={req} />
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
