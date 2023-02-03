import React from "react";

const Register = () => {
  return (
    <form className="w-50 m-auto p-5">
      <div class="m-3">
        <h3>Login</h3>
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="m-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="m-3">
        <label for="exampleInputPassword1" class="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary mx-3">
        Submit
      </button>
    </form>
  );
};

export default Register;
