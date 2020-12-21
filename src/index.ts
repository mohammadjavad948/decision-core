import * as express from 'express';
import {DB, port} from "./variables";
import {connect} from "mongoose";
import {registerMiddlewares} from "./utils/boot";

const app = express();

// middleware
registerMiddlewares(app);

app.listen(port || 3000, () => {
    console.log('server is running')
})

connect(DB, ()=> {
    console.log('connected to DB')
})
