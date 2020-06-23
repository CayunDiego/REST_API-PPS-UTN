import UserAdmin from '../models/UserAdmin.model';
import { encryptPassword, validatePassword } from '../helpers/encrypt.helper';
import {generateToken, verifyToken } from '../helpers/jwt.helper';

//POST
export const signup = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        const encyptPass = await encryptPassword(password);
        let newUser = await UserAdmin.create({
            USER_NAME: userName,
            E_MAIL: email,
            PASSWORD: encyptPass
        },{
            fields: ["USER_NAME","E_MAIL","PASSWORD"]
        });
        if(newUser){
            return res.status(201).json({
                message: 'User created successfully',
                auth: true
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            auth: null,
            token: null
        });
    }
}


//POST
export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserAdmin.findOne({
            where: {
                E_MAIL: email
            }
        });
        if(!user){
            return res.status(404).send("The email doesn't exist")
        }

        const validPassword = await validatePassword(password, user);
        console.log(validPassword)
        if(!validPassword){
            res.status(401).json({auth: false, token: null});
        }
        console.log(user.ID_U)
        const userToEncode = {
            id: user.ID_U,
            userName: user.USER_NAME,
            email: user.E_MAIL
        }
        const token = generateToken(userToEncode);
        res.status(200).json({
           auth: true,
           token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}


export const getMe = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(404).json(
            {auth: false,
             message: "No token provided"
        });
    }
    const decoded = verifyToken(token);
    console.log(decoded)
    res.json('me');
}