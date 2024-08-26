import React from "react";
import { useSelector } from "react-redux";
import {
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { route } from "../config/routes";

export default function ProtectedUserRoute() {
  const location = useLocation();
  const user = useSelector(
    (state) => state.authReducer.token
  );

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to={route.login}
      state={{ from: location }}
      replace
    />
  );
}
