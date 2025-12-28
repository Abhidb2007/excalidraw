import express from "express";
import jwt from "jsonwebtoken";
import{JWT_SECRET} from "./config";
import { middleware } from "./middleware";


const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
    //db call
    res.json({
        userId:126
    })
	
});

app.post("/signin", (req, res) => {
    const userId=1;
    jwt.sign({
        userId
    },JWT_SECRET);
	
});

app.post("/room", middleware, (req, res) => {
    //db call
    res.json({
        roomId:123
    })
	
});

app.listen(3000, () => {
	console.log("Server listening on http://localhost:3000");
});