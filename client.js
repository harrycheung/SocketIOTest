// client.js

import { io } from "socket.io-client";

const socket = io("http://localhost:5555");

socket.on("response", (data) => {
  console.log("Received:", data);
});

if (process.argv[2] === "B") {
  socket.emit("message", "Hello from client B!");
}
