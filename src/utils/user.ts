import {Router} from "express";
import {expressAuthMiddleware} from "../middleware/auth";
import { User } from "../schema/User";


export const userRouter = Router();

userRouter.use(expressAuthMiddleware);

userRouter.get('/users', async (req, res) => {

    const users = await User.find();

    return res.send(users);

})
