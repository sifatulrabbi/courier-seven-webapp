import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
}
