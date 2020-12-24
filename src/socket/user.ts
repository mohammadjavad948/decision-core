import {Socket} from "socket.io";
import {genSalt, hash} from "bcrypt";
import {User} from "../schema/User";

export function UserManager(io, socket: Socket){
    socket.on('createNewUser', newUser)

    async function newUser(data, callback){

        const name = data.name;
        const username = data.username;
        const rawPassword = data.password;

        // hash password
        const salt = await genSalt(10);
        const password = await hash(rawPassword, salt);

        // save user
        const user = new User({
            name, username, password, admin: true, roles: []
        });

        await user.save();

        callback({
            ok: true
        })
    }
}
