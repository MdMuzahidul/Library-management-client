import React, { useContext } from "react";
import { HendleContext } from "../UseContext/HendleProvider";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { currentUser } = useContext(HendleContext);
  if (currentUser?.email && currentUser?.role === "admin1") {
    return children;
  }
  return <Navigate to={`/login`} replace />; // Ensure you import Navigate from 'react-router-dom'
};

export default ProtectedRouter;
