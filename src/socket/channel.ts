import {Socket} from "socket.io";
import {Channel} from "../schema/Channel";
import {ChannelI, UserI} from "../schema/interface/schemaInteface";

export function channelEmits(io, socket: Socket){
    // @ts-ignore
    const user: UserI = socket.user;

    // register events
    socket.on('createNewChannel', newChannel)
    socket.on('doEditChannel', editChannel)


    // register functions
    async function newChannel(name){

        // check if user not admin
        if (!user.admin) return null;

        // create new channel
        const count = await Channel.countDocuments({});
        const channel = await new Channel({
            name, index: count
        });

        // notify everyone
        io.emit('newChannel', channel);
    }

    async function editChannel(data: ChannelI){
        // check if user not admin
        if (!user.admin) return null;

        const channel = await Channel.findById(data._id);

        await channel.update(data);

        io.emit('editChannel', channel);
    }
}
