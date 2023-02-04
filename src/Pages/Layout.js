import axios from "axios";
import React, { useEffect, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";

const Layout = () => {
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", {
        withCredentials: true,
        headers: { "Access-Control-Allow-Credentials": true },
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const logout = () => {
    axios
      .get("http://localhost:4000/logout", {
        withCredentials: true,
        headers: { "Access-Control-Allow-Credentials": true },
      })
      .then((response) => {
        setUser(null);
      })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            <b>Auth App</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>

              {user && user?.id ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/login"}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to={"/login"} onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/login"}>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
