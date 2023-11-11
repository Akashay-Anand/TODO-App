import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface User {
    uid: object;
    name: string;
    email: string;
}

interface AuthenticatedRequest extends Request {
    user?: User;
}

function auth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("not authorized");

    try{
        const KEY = process.env.SECRET_KEY;
        if(KEY){
            const payload = jwt.verify(token, KEY) as User;
            console.log(payload); // test

            req.user = payload; // user data
            next();
        }
    }catch(err){
        if(err instanceof Error){
            res.status(400).send("Invalid token: " + err.message);
        }
    }
}

export default auth;

// functions
// does they exist?
// varify the token
// next()
