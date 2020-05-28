import Sequelize from 'sequelize';
import { sequelize } from '../config/database';


//COMMENTS MODEL
const Comments = sequelize.define('COMMENTS', {
    ID_C: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    COMMENT: {
        type: Sequelize.STRING
    },
    CREATE_AT: {
        type: Sequelize.DATE
    },
    VOTE: {
        type: Sequelize.INTEGER
    },
    ID_COMPLAINT: {
        type: Sequelize.INTEGER
    },
    ID_U: {
        type: Sequelize.STRING
    }
})


export default Comments;