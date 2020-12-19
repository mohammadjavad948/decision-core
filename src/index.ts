import * as express from 'express';
import {port} from "./variables";

const app = express();

app.listen(port || 3000, () => {
    console.log('server is running')
})
