import {Application} from "express";
import * as bodyParser from "body-parser";
import {authRouter} from "./authentication/expressAuth";
import {channelRouter} from "./channel";
import * as cors from 'cors';

export function registerMiddlewares(app: Application) {
    app.use(cors());
    // body parser to parse json
    app.use(bodyParser.json());

    // login routes
    app.use('/auth', authRouter);

    app.use(channelRouter);
}
