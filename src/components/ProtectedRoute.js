import React from "react";
import { Navigate , Outlet } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("currentUser");
  console.log("this", isAuthenticated);

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/signup" />
  );
}

export default ProtectedRoute;