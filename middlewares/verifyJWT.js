import  jwt  from "jsonwebtoken";
import Config from "../config/config";

export const verifyJWT = (req, res, next) => {

    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        Config.TOKEN_PASSWORD,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded.UserInfo.id;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}