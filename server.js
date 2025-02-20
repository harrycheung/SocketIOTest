// server.js

import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
  socket.join("room1");

  socket.on("message", (data) => {
    console.log("Received:", data);
    socket.to("room1").emit("response", "Hello from Server! " + Date.now());
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

server.listen(5555, () => {
  console.log("Server running on http://localhost:5555");
});
