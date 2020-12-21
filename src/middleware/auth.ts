import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";
import {secret} from "../variables";

export async function expressAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    // get jwt form header
    const {token} = req.headers

    try {
        // verify the token
        const check = verify(token as string, secret);

        if (!check) return res.send('invalid token');

        // store user id to request var
        // @ts-ignore
        req.user = check;

        next();
    }catch (e) {
        res.send('invalid token');
    }
}
