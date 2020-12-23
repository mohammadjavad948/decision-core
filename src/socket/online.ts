import {Socket} from "socket.io";
import {UserI} from "../schema/interface/schemaInteface";

// create variables to hold online users
let onlineUsers: string[] = [];

export function manageOnlineUsers(io, socket: Socket){
    // @ts-ignore
    const user: UserI = socket.user;

    onlineUsers.push(user._id);

    socket.broadcast.emit('newOnline', user._id);
}
