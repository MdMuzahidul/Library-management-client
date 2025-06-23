import React, { useEffect, useState, useContext } from "react";
import { AuthProvider } from "../../UseContext/AuthProvider";

const PendingRequest = () => {
  const { user } = useContext(AuthProvider);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPending = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `http://localhost:5000/borrowed?email=${user?.email}`
        );
        if (!res.ok) throw new Error("Failed to fetch pending requests");
        const data = await res.json();
        setPendingRequests(data || []);
      } catch {
        setError("Could not load pending requests.");
      } finally {
        setLoading(false);
      }
    };
    if (user?.email) fetchPending();
  }, [user]);

  if (loading) return <div>Loading pending requests...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Borrow Requests</h2>
      {pendingRequests.length === 0 ? (
        <p>No pending requests found.</p>
      ) : (
        <ul className="space-y-4">
          {pendingRequests.map((req) => (
            <li
              key={req._id}
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm"
            >
              <div className="font-semibold">{req.bookTitle}</div>
              <div className="text-sm text-gray-600">
                Requested on:{" "}
                {new Date(req.borrowDate).toLocaleDateString()}
              </div>
              <div className="text-xs text-yellow-700 mt-1">
                {/* Status: {req.status} */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingRequest;
