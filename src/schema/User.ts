import {Schema, Document, Types} from "mongoose";
import ObjectId = Types.ObjectId;

interface UserI extends Document{
    name: string
    username: string
    password: string
    classroom: ObjectId
}


const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    classroom: {
        type: ObjectId,
        ref: 'classroom'
    }
})
