import {model, Schema} from "mongoose";
import {ChannelI} from "./interface/schemaInteface";


const channelSchema = new Schema({
    index: Number,
    name: String,
    permissions: {

    }
});

export const Channel = model<ChannelI>('channel', channelSchema)
