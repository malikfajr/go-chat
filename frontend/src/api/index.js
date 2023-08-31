const BACKEND_URI = process.env.BACKEND_URI | "localhost:8080"
var socket = new WebSocket(`ws://${BACKEND_URI}/ws`);

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
