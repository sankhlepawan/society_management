import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/src/context"; // Your auth context hook

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
