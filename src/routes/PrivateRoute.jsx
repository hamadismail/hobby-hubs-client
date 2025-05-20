import React, { use } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, useLocation } from "react-router";
import Spinner from "../components/ui/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = use(AuthContext);
  const location = useLocation();

  if (loader) return <Spinner />;

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
