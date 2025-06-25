import React, { useContext } from "react";
import { HendleContext } from "../UseContext/HendleProvider";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../UseContext/AuthProvider";

const ProtectedRouter = ({ children }) => {
  const { currentUser } = useContext(HendleContext);
  const { user } = useContext(AuthContext);
  if (user && currentUser?.email && currentUser?.role === "admin1") {
    return children;
  }
  return <Navigate to={`/login`} />; // Ensure you import Navigate from 'react-router-dom'
};

export default ProtectedRouter;
