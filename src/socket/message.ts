import {Socket} from "socket.io";
import {UserI} from "../schema/interface/schemaInteface";
import {Channel} from "../schema/Channel";
import {hasPermission} from "../mixer/permission";
import {Message} from "../schema/Message";

interface UserMessage{
    channel: string
    message?: string
    type: string
    typeId?: string
}


export function messageManager(io, socket: Socket){
    socket.on('sendMessage', sendMessage);
    socket.on('deleteMessage', deleteMessage)

    // @ts-ignore
    const user: UserI = socket.user

    async function sendMessage(data: UserMessage, callback){

        const userRole = await user.populated('roles');
        const channel = await Channel.findById(data.channel);

        const canSendMessage = hasPermission(userRole, channel, 'sendMessage');

        if (!canSendMessage) return callback({ok: false});

        const message = new Message({
            message: data.message,
            channel: channel._id,
            type: data.type
        });

        await message.save();

        socket.broadcast.emit('newMessage', message);

        callback({
            ok: true
        })
    }

    async function deleteMessage(messageId: string){

        // get message
        const message = await Message.findById(messageId);

        // check if message sender is that user
        if (message.user !== user._id) return;

        await message.delete();

        io.emit('messageDeleted', messageId);
    }

}
