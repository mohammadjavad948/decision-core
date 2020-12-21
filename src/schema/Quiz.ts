import {model, Schema} from "mongoose";
import {QuizI} from "./interface/schemaInteface";


const quizSchema = new Schema({
    name: String,
    description: String,
    time: Number,
    start: String,
    file: String,
    answers: [{
        quest: Number,
        allAnswers: Number,
        answer: Number,
    }]
});

export const Quiz = model<QuizI>('quiz', quizSchema);
