import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = ({ isAllowed, children, redirectTo = "*" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
