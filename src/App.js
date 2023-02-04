import React from "react";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import { ContextProvider } from "./Context/Context";
import Auth from "./Auth/Auth";
import IsLogin from "./Auth/IsLgoin"
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Auth Component={Login} />} />
      <Route path="/register" element={<Auth Component={Register} />} />
      <Route path="/dashboard" element={<IsLogin Component={Dashboard} />} />
    </Route>
  )
);

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />;
    </ContextProvider>
  );
};

export default App;
