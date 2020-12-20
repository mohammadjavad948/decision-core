import {Document, model, Schema, Types} from "mongoose";
import ObjectId = Types.ObjectId;

interface MessageI extends Document{
    type: string
    text: string
    channel: string
}

const messageSchema = new Schema({
    text: String,
    type: String,
    channel: {
        type: ObjectId,
        ref: 'classroom'
    }
});


export const Message = model<MessageI>('message', messageSchema)
