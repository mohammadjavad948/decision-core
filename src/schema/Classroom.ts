import {Document, model, Schema} from "mongoose";

interface ClassroomI extends Document{
    name: string
}

const classroomSchema = new Schema({
    name: String
});


export const Classroom = model<ClassroomI>('classroom', classroomSchema)
