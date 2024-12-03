import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg justify-center items-center"></span>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}
