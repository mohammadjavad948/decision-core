import {Router, Request, Response} from "express";
import {User} from "../../schema/User";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";
import {secret} from "../../variables";

export const authRouter = Router();


authRouter.post('/login', async (req: Request, res: Response) => {
    // get username and password
    const {username, password} = req.body;

    // get user with username
    const user = await User.findOne({username});

    // check if user not exist
    if (!user) return res.send('not fount!');

    // compare passwords
    const passCheck = await compare(password, user.password);

    // check if password is false
    if (!passCheck) return res.send('not found!');

    // create token
    const token = await sign({_id: user._id}, secret);

    // send token to user
    res.send({
        token
    });
});
