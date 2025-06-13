import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/src/context";
import { useUserProfile } from "@/src/hooks";

const RequireAuth = ({ children }) => {
  const { user: authUser, loading: authLoading } = useAuth();
  const location = useLocation();

  const {
    data: profile,
    isLoading: profileLoading,
    isError,
  } = useUserProfile(authUser?.id, { enabled: !!authUser });

  if (authLoading) {
    return <div className="p-4 text-center">Checking authentication...</div>;
  }

  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (profileLoading) {
    return <div className="p-4 text-center">Loading profile...</div>;
  }

  if (!profile || isError) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!profile.is_active) {
    return <Navigate to="/inactive" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
