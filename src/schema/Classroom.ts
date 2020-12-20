import {Document, model, Schema, Types} from "mongoose";

interface ClassroomI extends Document{
    name: string
    icon: string
    channels: {
        _id: string
        name: string
    }
}

const classroomSchema = new Schema({
    name: String,
    icon: String,
    channels: [{
        name: String
    }]
});


export const Classroom = model<ClassroomI>('classroom', classroomSchema)
