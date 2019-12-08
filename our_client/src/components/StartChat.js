import React, { Component }  from "react";
import Header from './Header';
// import StompJs from '@stomp/stompjs';
// import SockJS from "sockjs-client"
import { ACCESS_TOKEN } from '../constants';
// import Login from './Login';

var stompClient = null;

var headers = {
  'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
  "Access-Control-Allow-Origin": "http://localhost:3000",
  'Access-Control-Allow-Credentials': true
}

var ourString = "?token=" + localStorage.getItem(ACCESS_TOKEN);

function frameHandler(frame) {
    // setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/messages', function (message) {
        showMessage(message.body);
    });
}

function onSocketClose() {
    if (stompClient !== null) {
        stompClient.deactivate();
    }
    // setConnected(false);
    console.log("Socket was closed. Setting connected to false!")
}

function connect() {

    stompClient = new window.StompJs.Client({
        webSocketFactory: function () {
            return new WebSocket("ws://localhost:8080/websocket" + ourString);
        }
    });
    stompClient.onConnect = function (frame) {
        frameHandler(frame)
    };
    stompClient.onWebsocketClose = function () {
        onSocketClose();
    };
    stompClient.activate();
}

function connectSockJs() {
    stompClient = new window.StompJs.Client({
        webSocketFactory: function () {
            return new window.SockJS("http://localhost:8080/sockjs" + ourString);
        }
    });
    stompClient.onConnect = function (frame) {
        frameHandler(frame)
    };
    stompClient.onWebsocketClose = function () {
        onSocketClose();
    };
    stompClient.activate();
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.deactivate();
    }
    // setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {

  var one = document.getElementById("from").value;
  var two = document.getElementById("message").value;

  // console.log(one);
  // console.log(two);

  //Need to impliment a bad user input logic here / JS error (are field values clearing properly?)
  if(false){

    console.log("Bad input in message form");

  } else {

    try {
      stompClient.publish({
          destination:"/app/send",
          body: JSON.stringify({
              'from': one,
              'message': two
          })
      });
    } catch(error){
      // console.log("Error city");
      console.log(error);
    }
  document.getElementById("from").value = '';
  document.getElementById("message").value = '';

  }
}

function showMessage(message) {
    var msg = JSON.parse(message);
    console.log(msg);
    var parent = document.getElementById("responses");
    var p = document.createElement("p");
    parent.prepend(msg['timeStamp'] + "  " +  msg['from']  + "  " + msg['message'] + "  ", p);
}

function clickConnect(event){
  event.preventDefault();
  // console.log("clickConnect" + " clicked");
  connect();
}

function clickConnectSockJS(event){
  event.preventDefault();
  // console.log("clickConnectSockJS" + " clicked");

  connectSockJs();
}

function clickDisconnect(event){
  event.preventDefault();
  // console.log("clickDisconnect" + " clicked");

  disconnect();
}

function clickSend(event){
  // console.log(event);
  event.preventDefault();
  // console.log("clickSend" + " clicked");

  sendMessage();
}

class StartChat extends Component {





  render() {

  return (
    <div>
        <Header />
        <h1>StartChat</h1>
          <p>
            {localStorage.getItem(ACCESS_TOKEN)}
         This is the message value:
         </p>

         <div>
      <div>
          <div>
              <form>
                  <div>
                      <label>WebSocket connection:</label>
                      <button onClick={clickConnect} type="submit">Connect</button>
                      {/* <button onClick={clickConnectSockJS} type="submit">ConnectSockJS</button> */}
                  </div>
              </form>
          </div>
          <div>
              <form>
                  <div>
                      <button onClick={clickDisconnect} type="submit">
                          Disconnect
                      </button>
                  </div>
              </form>
          </div>
      </div>
      <div>
          <div>
              <form>
                  <div>
                      <label>Username:</label>
                      <input id="from" placeholder="Username..." type="text" />
                      <label>Message:</label>
                      <input id="message" placeholder="Your message here..." type="text" />
                  </div>
                  <button onClick={clickSend} type="submit">Send</button>
              </form>
          </div>
      </div>
      <div>
          <div>
              <table id="responses">
                  <thead>
                  <tr>
                      <th>Messages</th>
                  </tr>
                  </thead>
                  <tbody id="messages">
                  </tbody>
              </table>
          </div>
      </div>
  </div>
    </div>
  );
}
}

export default StartChat;
