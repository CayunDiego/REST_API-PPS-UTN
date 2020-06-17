import Sequelize from 'sequelize';
import {NOMBRE, USER, PASS, HOST, BD_PORT} from './';

export const sequelize = new Sequelize(NOMBRE, USER, PASS, {
    host: HOST,
    port: BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});