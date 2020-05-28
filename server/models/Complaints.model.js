import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

//TABLE CON EL FOREIGN KEY
import Comments from './Comments.model';

//COMPLAINTS MODEL
const Complaints = sequelize.define('COMPLAINTS', {
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
    ID_U: {
        type: Sequelize.STRING
    },
})

//VER SI ESTAN BIEN LAS ID
Complaints.hasMany(Comments, { foreignKey: 'ID_COMPLAINT', sourceKey: 'ID'});
Comments.belongsTo(Complaints, { foreignKey: 'ID_COMPLAINT', sourceKey: 'ID' });


export default Complaints;