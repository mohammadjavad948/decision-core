import {Document, model, Schema} from "mongoose";

interface LessonI extends Document{
    name: string
}


const lessonSchema = new Schema({
    name: String
});

export const Lesson = model<LessonI>('lesson', lessonSchema)
