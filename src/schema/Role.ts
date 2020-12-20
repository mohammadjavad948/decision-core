import {model, Schema} from "mongoose";
import {RoleI} from "./interface/schemaInteface";

const roleSchema = new Schema({
    name: String,
    color: String,
    global: {
        sendMessage: Boolean,
        viewChannel: Boolean,
        manageQuiz: Boolean,
        manageHomeWorks: Boolean,
    }
});


export const Role = model<RoleI>('role', roleSchema)
