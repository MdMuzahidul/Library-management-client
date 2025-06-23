import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContext/AuthProvider";
import PendingRequestCard from "./PendingRequestCard";


const PendingRequest = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.email)
  // Fetch pending requests from the server
  useEffect(() => {
    fetch(`http://localhost:5000/borrowed/pending/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setPendingRequests(data);
      })
      .catch((error) => {
        console.error("Error fetching pending requests:", error);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-2 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Pending Requests <span className="ml-2 text-2xl text-gray-500">({pendingRequests.length})</span>
        </h3>
        {pendingRequests.length > 0 ? (
          <div className="space-y-4">
            {pendingRequests.map((req) => (
              <PendingRequestCard key={req._id || req.id} request={req} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <img src="/src/assets/empty.png" alt="No pending" className="w-32 h-32 opacity-60 mb-4" />
            <p className="text-gray-500 text-lg">No pending requests found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingRequest;
