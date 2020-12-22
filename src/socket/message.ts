import {Socket} from "socket.io";

interface UserMessage{
    channelId: string
    message?: string
    type?: string
    typeId?: string
}


export function messageManager(io, socket: Socket){
    socket.on('sendMessage', sendMessage)

    async function sendMessage(data: UserMessage, callback){

    }
}
