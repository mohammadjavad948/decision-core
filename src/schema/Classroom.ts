import {Document, model, Schema, Types} from "mongoose";
import ObjectId = Types.ObjectId

interface ClassroomI extends Document{
    name: string
    lessons: ObjectId[]
}

const classroomSchema = new Schema({
    name: String,
    lessons: {
        type: ObjectId,
        ref: 'lesson'
    }
});


export const Classroom = model<ClassroomI>('classroom', classroomSchema)
