import {Socket} from "socket.io";
import {verify} from "jsonwebtoken";
import {secret} from "../variables";
import {User} from "../schema/User";

const socketIO = require('socket.io');

export function initialSocket(server){
    // initial server
    const io = socketIO(server);

    console.log('socket initialed!');

    io.on('connecting', connection);
}

function connection(socket: Socket){

    socket.on('login', login);

    async function login(token: string, callback){
        try {
            const userToken: any = verify(token, secret);
            const user = await User.findById(userToken._id);

            // @ts-ignore
            socket.user = user;

            socket.emit('authenticated');

            callback({
                ok: true
            });

        }catch (e){
            callback({
                ok: false
            })
        }
    }
}
