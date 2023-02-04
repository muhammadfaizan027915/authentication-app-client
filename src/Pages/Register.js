import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const registerUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post(
        "http://localhost:4000/signup",
        {
          email: formData.get("email"),
          password: formData.get("password"),
          confirmpassword: formData.get("confirmpassword"),
        },
        { withCredentials: true }
      )
      .then((response) => {
        navigate("/dashboard", { replace: true });
        window.location.reload(true);
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <form className="w-50 m-auto p-5" onSubmit={registerUser}>
      <div className="m-3">
        <h3>Register</h3>
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
        <input type="email" className="form-control" id="email" name="email" />
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
          minLength={6}
        />
      </div>
      <div className="m-3">
        <label htmlFor="confirmpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmpassword"
          name="confirmpassword"
          minLength={6}
        />
      </div>
      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
  );
};

export default Register;
