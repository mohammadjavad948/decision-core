import {Schema, Document, Types, model} from "mongoose";
import ObjectId = Types.ObjectId;

interface UserI extends Document{
    name: string
    username: string
    password: string
    classroom: ObjectId
    permissions: string[]
}


const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    classroom: {
        type: ObjectId,
        ref: 'classroom'
    },
    permissions: [String]
})

export const User = model<UserI>('user', userSchema)
