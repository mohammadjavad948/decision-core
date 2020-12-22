import {Socket} from "socket.io";
import {Channel} from "../schema/Channel";
import {UserI} from "../schema/interface/schemaInteface";

export function channelEmits(socket: Socket){
    // @ts-ignore
    const user: UserI = socket.user;

    // register events
    socket.on('newChannel', newChannel)



    // register functions
    async function newChannel(name){

        // check if user not admin
        if (!user.admin) return null;

        const count = await Channel.countDocuments({});
        const channel = await new Channel({
            name, index: count
        });

    }
}
