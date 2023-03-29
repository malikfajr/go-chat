var socket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb) => {
  console.log("connecting...");

  socket.onopen = function () {
    console.log("Successfully Connected");
  };

  socket.onmessage = function (msg) {
    cb(msg);
  };

  socket.onclose = function (event) {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = function (error) {
    console.log("Socket error: ", error);
  };
};

let sendMsg = (id, msg) => {
  socket.send(JSON.stringify({ id, msg }));
};

export { connect, sendMsg };
