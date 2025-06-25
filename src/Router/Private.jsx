import React, { useContext } from "react";
import { AuthContext } from "../UseContext/AuthProvider";
import { Navigate } from "react-router-dom";
import { HendleContext } from "../UseContext/HendleProvider";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { currentUser } = useContext(HendleContext);
  if (user && currentUser?.email && currentUser?.role === "student") {
    return children;
  }
  return <Navigate to={`/login`}></Navigate>;
};

export default Private;
