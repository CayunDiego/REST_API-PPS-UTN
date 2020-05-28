import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

//TABLE CON EL FOREIGN KEY
import Complaints from './Complaints.model';
import Comments from './Comments.model';

//USERS MODEL
const Users = sequelize.define('USERS', {
    ID_U: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    DISPLAY_NAME: {
        type: Sequelize.STRING
    },
    FIRST_NAME: {
        type: Sequelize.STRING
    },
    LAST_NAME: {
        type: Sequelize.STRING
    },
    DOCUMENT: {
        type: Sequelize.INTEGER
    },
    PHOTO_URL: {
        type: Sequelize.STRING
    }
});

Users.hasMany(Complaints, { foreignKey: 'ID_U', sourceKey: 'ID_U'});
Complaints.belongsTo(Users, { foreignKey: 'ID_U', sourceKey: 'ID_U' });

Users.hasMany(Comments, { foreignKey: 'ID_U', sourceKey: 'ID_U'});
Comments.belongsTo(Users, { foreignKey: 'ID_U', sourceKey: 'ID_U' });

export default Users;