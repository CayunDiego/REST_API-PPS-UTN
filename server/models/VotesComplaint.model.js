import Sequelize from 'sequelize';
import { sequelize } from '../config/database';


//COMMENTS MODEL
const VotesComplaint = sequelize.define('VOTES_COMPLAINT', {
    ID_VOTE: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ID_U: {
        type: Sequelize.STRING
    },
    ID_COMPLAINT: {
        type: Sequelize.INTEGER
    }
})


export default VotesComplaint;