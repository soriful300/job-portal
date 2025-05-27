import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  console.log(loading);

  if (loading) {
    return <p>Loading.....</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
