import {model, Schema} from "mongoose";
import {RoleI} from "./interface/schemaInteface";

const roleSchema = new Schema({
    name: String,
    icon: String,
    channels: [{
        name: String
    }]
});


export const Role = model<RoleI>('role', roleSchema)
