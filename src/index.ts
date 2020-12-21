import * as express from 'express';
import * as bodyParser from "body-parser";
import {DB, port} from "./variables";
import {connect} from "mongoose";

const app = express();

// middleware
app.use(bodyParser.json());

app.listen(port || 3000, () => {
    console.log('server is running')
})

connect(DB, ()=> {
    console.log('connected to DB')
})
