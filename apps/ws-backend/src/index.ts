import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws, req) => {
  const url = req.url; // example: ws://localhost:8080?token=123123

  if (!url) {
    ws.close();
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token");

  if (!token) {
    ws.close();
    return;
  }

  let decoded: JwtPayload;

  try {
    decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (err) {
    ws.close();
    return;
  }

  if (!decoded.userId) {
    ws.close();
    return;
  }

  ws.on("message", () => {
    ws.send("pong");
  });
});
