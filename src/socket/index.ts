import {Socket} from "socket.io";
import {auth} from "./auth";
import {channelEmits} from "./channel";
import {messageManager} from "./message";
import {manageOnlineUsers} from "./online";

const socketIO = require('socket.io');

export function initialSocket(server){
    // initial server
    const io = socketIO(server, {
        cors: {
            methods: ["GET", "POST"],
            origin: 'http://localhost:4200',
            credentials: true
        }
    });

    console.log('socket initialed!');

    io.on('connection', connection);

    function connection(socket: Socket){
        console.log('someone connected id: ' + socket.id)
        auth(io, socket);

        // when user authenticated
        socket.on('authenticated', authenticated)

        function authenticated(){

            // register all events
            channelEmits(io, socket);
            messageManager(io, socket);
            manageOnlineUsers(io, socket);
        }
    }
}
