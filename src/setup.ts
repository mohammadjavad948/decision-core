import {connect} from "mongoose";
import {DB} from "./variables";
import {User} from "./schema/User";
import {Channel} from "./schema/Channel";
import {genSalt, hash} from "bcrypt";

async function run(){
    try {

        // connect to database
        console.log('connecting to database ...');

        await connect(DB, { useNewUrlParser: true, useUnifiedTopology: true },() => {
            console.log('connected to db')
        });

        const name = 'javad';
        const username = 'javad';
        const rawPassword = '12345678';

        // hash password
        const salt = await genSalt(10);
        const password = await hash(rawPassword, salt);

        // save user
        const user = new User({
            name, username, password, admin: true, roles: []
        });

        await user.save();

        console.log(user);

        const channel = new Channel({
           index: 0,
           name: 'channel'
        });

        await channel.save()

        console.log('you are done!');
    }catch (e){
        console.log('error happened! log: ' + e.toString())
    }
}

run()
