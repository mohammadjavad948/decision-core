import {Document, Types} from "mongoose";
import ObjectId = Types.ObjectId;
import {PermissionI} from "./permission";

interface RoleI extends Document{
    name: string
    color: string
    global: PermissionI
}

interface UserI extends Document{
    name: string
    username: string
    password: string
    roles: ObjectId[]
}

interface MessageI extends Document{
    type: string
    text: string
    channel: string
}


export {UserI, MessageI, RoleI};
