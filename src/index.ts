import * as express from 'express';
import {DB, port} from "./variables";
import {connect} from "mongoose";
import {registerMiddlewares} from "./utils/boot";
import {initialSocket} from "./socket";

const app = express();

// middleware
registerMiddlewares(app);

const server = app.listen(port || 3000, () => {
    console.log('server is running')
});

initialSocket(server);

connect(DB, { useNewUrlParser: true, useUnifiedTopology: true },()=> {
    console.log('connected to DB')
})
