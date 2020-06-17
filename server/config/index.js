import dotenv from 'dotenv';

if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

module.exports = {
    NOMBRE: process.env.BD_NOMBRE,
    USER: process.env.BD_USER,
    PASS: process.env.BD_PASS,
    HOST: process.env.BD_HOST,
    BD_PORT: process.env.BD_PORT,
    PORT: process.env.PORT
};