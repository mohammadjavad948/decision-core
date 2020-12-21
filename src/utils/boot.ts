import {Application} from "express";
import * as bodyParser from "body-parser";
import {authRouter} from "./authentication/expressAuth";

export function registerMiddlewares(app: Application) {
    // body parser to parse json
    app.use(bodyParser.json());

    // login routes
    app.use('/auth', authRouter);
}
