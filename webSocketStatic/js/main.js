var stompClient = null;

// function setConnected(connected) {
//     $("#connect").prop("disabled", connected);
//     $("#connectSockJS").prop("disabled", connected);
//     $("#disconnect").prop("disabled", !connected);
//     if (connected) {
//         $("#responses").show();
//     } else {
//         $("#responses").hide();
//     }
//     $("#messages").html("");
// }

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
            return new WebSocket("ws://localhost:8080/websocket");
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
            return new window.SockJS("http://localhost:8080/sockjs");
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

    var parent = document.getElementById("responses");
    var p = document.createElement("p");
    parent.prepend(msg['timeStamp'] + "  " +  msg['from']  + "  " + msg['message'] + "  ", p);
}

function clickConnect(event){
  event.preventDefault();
  connect();
}

function clickConnectSockJS(event){
  event.preventDefault();

  connectSockJs();
}

function clickDisconnect(event){
  event.preventDefault();
  disconnect();
}

function clickSend(event){
  // console.log(event);
  event.preventDefault();
  sendMessage();
}
