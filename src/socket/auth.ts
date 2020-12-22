import {verify} from "jsonwebtoken";
import {secret} from "../variables";
import {User} from "../schema/User";

export function auth(io, socket){
    //register event
    socket.on('login', login);

    // register function
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
