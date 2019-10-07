import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function sayHello(){
    // alert("Hello!");
  }

  useEffect(() => {
    // sayHello();
  });


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Up To The Moon</button>
    </div>
  );
}
