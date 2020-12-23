import {Socket} from "socket.io";
import {auth} from "./auth";
import {channelEmits} from "./channel";
import {messageManager} from "./message";

const socketIO = require('socket.io');

export function initialSocket(server){
    // initial server
    const io = socketIO(server);

    console.log('socket initialed!');

    io.on('connecting', connection);

    function connection(socket: Socket){
        auth(io, socket);

        // when user authenticated
        socket.on('authenticated', authenticated)

        function authenticated(){

            // register all events
            channelEmits(io, socket);
            messageManager(io, socket);
        }
    }
}
