import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { Context } from "./context";

function PrivateRoute({ element, ...rest }) {
  const ctx = useContext(Context);

  if (!ctx.isloggedin) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={element} />;
}

export default PrivateRoute;