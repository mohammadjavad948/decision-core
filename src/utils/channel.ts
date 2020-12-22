import {Router} from "express";
import {expressAuthMiddleware} from "../middleware/auth";
import {Channel} from "../schema/Channel";


export const channelRouter = Router();

channelRouter.use(expressAuthMiddleware);

channelRouter.get('/channels', async (req, res) => {

    const channels = await Channel.find();

    return res.send(channels);

})
