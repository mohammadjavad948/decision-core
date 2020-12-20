import * as express from 'express';
import {DB, port} from "./variables";
import {connect} from "mongoose";

const app = express();

app.listen(port || 3000, () => {
    console.log('server is running')
})

connect(DB, ()=> {
    console.log('connected to DB')
})
