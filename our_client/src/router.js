import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StartChat from "./components/StartChat";
import Logout from "./components/Logout";
import Messages from "./components/Messages";

const routes = {
  "/": () => <Login />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/home": () => <Home />,
  "/startchat/:id":  ({id}) => <StartChat id={id} />,
  "/messages": () => <Messages />,
  "/logout": () => <Logout />
};

export default routes;
