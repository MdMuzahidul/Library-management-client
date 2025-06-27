import React, { useContext } from "react";
import { HendleContext } from "../UseContext/HendleProvider";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../UseContext/AuthProvider";

const ProtectedRouter = ({ children }) => {
  const { currentUser } = useContext(HendleContext);
  const { user, loading } = useContext(AuthContext);
  
  // Show loading while authentication is being checked
  if (loading || user === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700 font-medium">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (user && currentUser?.email && currentUser?.role === "admin1") {
    return children;
  }
  return <Navigate to={`/login`} />; // Ensure you import Navigate from 'react-router-dom'
};

export default ProtectedRouter;
