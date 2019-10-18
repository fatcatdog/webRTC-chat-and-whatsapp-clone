import React, { useState, useEffect } from "react";
import Header from './Header';

export default function StartChat(props) {
  console.log("props :)");
  console.log(props.id);

  return (
    <div>
      <Header />
      <h1>StartChat</h1>
      <p>{props.id}</p>
    </div>
  );
}
