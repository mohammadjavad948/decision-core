import {model, Schema, Types} from "mongoose";
import ObjectId = Types.ObjectId;
import {MessageI} from "./interface/schemaInteface";

const messageSchema = new Schema({
    text: String,
    type: String,
    user: {
      type: ObjectId,
      ref: 'user'
    },
    channel: {
        type: ObjectId,
        ref: 'classroom'
    }
});


export const Message = model<MessageI>('message', messageSchema)