import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../Context/Context";

const IsLogin = ({ Component }) => {
  const { user } = useContext(Context);
  return user ? <Component /> : <Navigate to={"/login"} />;
};

export default IsLogin;
