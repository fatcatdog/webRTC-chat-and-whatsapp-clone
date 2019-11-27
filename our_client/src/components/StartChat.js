import React, { Component }  from "react";
import Header from './Header';

class StartChat extends Component {

  constructor(props) {
    super(props);
  }

  render() {

  return (
    <div>
      <Header />
      <h1>StartChat</h1>
        <p>
       This is the message value:
       </p>


    </div>

  );
}
}

export default StartChat;
