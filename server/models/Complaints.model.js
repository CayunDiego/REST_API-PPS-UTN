import Sequelize from 'sequelize';
import { sequelize } from '../config/database';


//COMPLAINTS MODEL
const Complaints = sequelize.define('complaints', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    CREATE_AT: {
        type: Sequelize.DATE
    },
    DESCRIPTION: {
        type: Sequelize.STRING
    },
    ADDRESS: {
        type: Sequelize.STRING
    },
    LAT: {
        type: Sequelize.DOUBLE
    },
    LNG: {
        type: Sequelize.DOUBLE
    },
    PHOTO_URL: {
        type: Sequelize.STRING
    },
    ID_TYPE: {
        type: Sequelize.INTEGER
    },
    VOTE: {
        type: Sequelize.INTEGER
    },
})



export default Complaints;