import React from "react";
import '../styles/header.css';
import {  navigate, A } from "hookrouter";

export default function Header() {

  return (
    <div className="mainHeader">
      <h1>CommunicationApp</h1>
      <p><A href="/home">Home</A> <A href="/logout">Logout</A></p>
    </div>
  );
}
