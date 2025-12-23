import {webSocketServer} from "ws";
const wss=new webSocketServer({port:8080});
wss.on("connection", function connection(ws){
ws.on("message", function message("pong");
    })
});

