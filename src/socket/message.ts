import {Socket} from "socket.io";
import {UserI} from "../schema/interface/schemaInteface";
import {mixer} from "../mixer/roleMixer";
import {Channel} from "../schema/Channel";

interface UserMessage{
    channelId: string
    message?: string
    type?: string
    typeId?: string
}


export function messageManager(io, socket: Socket){
    socket.on('sendMessage', sendMessage)

    // @ts-ignore
    const user: UserI = socket.user

    async function sendMessage(data: UserMessage, callback){

        const userRole = await user.populated('roles');
        const channel = await Channel.findById(data.channelId);

        const permissionOnChannel = mixer(userRole, channel.permissions);
    }

}
