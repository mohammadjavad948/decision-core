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
    roles: ObjectId[] | RoleI[]
}

interface MessageI extends Document{
    type: string
    typeId: ObjectId | QuizI
    text: string
    user: ObjectId | UserI
    channel: ObjectId | ChannelI
}

interface ChannelI extends Document{
    index: number
    name: string
    permissions: {
        [roleId: string]: PermissionI
    }
}

interface QuizI extends Document{
    name: string
    description: string
    time: number
    start: string
    file: string
    answers: {
        quest: number
        allAnswers: number
        answer: number
    }[]
}

export {UserI, MessageI, RoleI, ChannelI, QuizI};
