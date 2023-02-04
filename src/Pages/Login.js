import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post(
        "http://localhost:4000/login",
        {
          email: formData.get("email"),
          password: formData.get("password"),
        }, {withCredentials: true}
      )
      .then((response) => {
        navigate("/dashboard", { replace: true });
        window.location.reload(true);
      })
      .catch((err) => setError(err.response.data.message));
  };
  
  return (
    <form className="w-50 m-auto p-5" onSubmit={loginUser}>
      <div className="m-3">
        <h3>Login</h3>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
        />
      </div>
      <div className="m-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
  );
};

export default Login;
