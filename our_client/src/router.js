import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const routes = {
  "/": () => <Login />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/home": () => <Home />
};

export default routes;
