import {Schema, Types, model} from "mongoose";
import ObjectId = Types.ObjectId;
import {UserI} from "./interface/schemaInteface";


const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    admin: Boolean,
    roles: [{
        type: ObjectId,
        ref: 'role'
    }]
})

export const User = model<UserI>('user', userSchema)
