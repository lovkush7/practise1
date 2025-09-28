import {Server} from "socket.io";
import http from "http";
import express from "express"


const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
    }
});
export function getReciverSocketId(userid){
    return usersocketmap[userid];
}
const usersocketmap={};

io.on("connection",(socket)=>{
console.log("a user connected",socket.id);

const userid = socket.handshake.query.userId;
if(userid) usersocketmap[userid]=socket.id;

io.emit("getOnlineUsers",Object.keys(usersocketmap));


socket.on("disconnect",()=>{
    console.log("a user disconnected",socket.id);
    delete usersocketmap[userid];
    io.emit("getOnlineUsers",Object.keys(usersocketmap));

})
});

export {io,server,app}