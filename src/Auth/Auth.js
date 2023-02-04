import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../Context/Context";

const Auth = ({ Component }) => {
  const { user } = useContext(Context);
  return user ? <Navigate to={"/dashboard"} /> : <Component />;
};

export default Auth;
