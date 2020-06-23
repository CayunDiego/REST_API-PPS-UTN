import { verifyToken } from '../helpers/jwt.helper';

const verifyTokenM = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(404).json(
            {auth: false,
             message: "No token provided"
        });
    }
    const decoded = verifyToken(token);
    console.log('entra al verificador de token')
    next();
};

export default verifyTokenM;