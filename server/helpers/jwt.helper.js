import jwt  from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export const generateToken = (user) => {
    return jwt.sign( {user} , JWT_SECRET, { expiresIn: '24h' });
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}