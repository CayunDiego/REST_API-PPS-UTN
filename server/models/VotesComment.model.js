import Sequelize from 'sequelize';
import { sequelize } from '../config/database';


//COMMENTS MODEL
const VotesComment = sequelize.define('VOTES_COMMENTS', {
    ID_VOTE: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ID_U: {
        type: Sequelize.STRING
    },
    ID_C: {
        type: Sequelize.INTEGER
    }
})


export default VotesComment;