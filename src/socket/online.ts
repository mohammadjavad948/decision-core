import {Socket} from "socket.io";
import {UserI} from "../schema/interface/schemaInteface";

// create variables to hold online users
let onlineUsers: string[] = [];

export function manageOnlineUsers(io, socket: Socket){
    // @ts-ignore
    const user: UserI = socket.user;

    onlineUsers.push(user._id);

    socket.broadcast.emit('newOnline', user._id);


    // when new user wants to get online user
    socket.on('getOnlineUsers', getOnlineUsers)

    // when user disconnects
    socket.on('disconnect', disconnect);


    function getOnlineUsers(callback){
        callback(onlineUsers);
    }

    function disconnect(){
        // remove user from online lists
        const index = onlineUsers.findIndex(user._id);
        onlineUsers.splice(index, 1);

        io.emit('newOffline', user._id);
    }
}
