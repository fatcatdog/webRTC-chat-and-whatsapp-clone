import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StartChat from "./components/StartChat";

const routes = {
  "/": () => <Login />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/home": () => <Home />,
  "/startchat/:id":  ({id}) => <StartChat id={id} />
};

export default routes;
