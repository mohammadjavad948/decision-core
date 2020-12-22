import {Socket} from "socket.io";
import {verify} from "jsonwebtoken";
import {secret} from "../variables";

const socketIO = require('socket.io');

export function initialSocket(server){
    // initial server
    const io = socketIO(server);

    io.on('connecting', connection);
}

function connection(socket: Socket){

    socket.on('login', async (token: string) => {

    })
}

async function login(token: string){
    try {
        const userToken = verify(token, secret);
    }catch (e){

    }
}
