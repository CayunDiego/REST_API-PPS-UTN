import Sequelize from 'sequelize';
import { sequelize } from '../config/database';


//USERS MODEL
const UserAdmin = sequelize.define('USERS_ADMIN', {
    ID_U: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    USER_NAME: {
        type: Sequelize.STRING
    },
    E_MAIL: {
        type: Sequelize.STRING
    },
    PASSWORD: {
        type: Sequelize.STRING
    }
});

export default UserAdmin;