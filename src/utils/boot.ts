import {Application} from "express";
import * as bodyParser from "body-parser";
import {authRouter} from "./authentication/expressAuth";
import {channelRouter} from "./channel";

export function registerMiddlewares(app: Application) {
    // body parser to parse json
    app.use(bodyParser.json());

    // login routes
    app.use('/auth', authRouter);

    app.use(channelRouter);
}
