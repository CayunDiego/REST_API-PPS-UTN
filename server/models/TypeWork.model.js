import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

import Complaints from './Complaints.model'

//TYPE WORK MODEL   type_work
const TypeWork = sequelize.define('TYPE_WORK', {
    ID_TYPE: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    TYPE: {
        type: Sequelize.STRING
    },
    COLOR: {
        type: Sequelize.STRING
    }
});

TypeWork.hasMany(Complaints, { foreignKey: 'ID_TYPE', sourceKey: 'ID_TYPE'});
Complaints.belongsTo(TypeWork, { foreignKey: 'ID_TYPE', sourceKey: 'ID_TYPE' });

export default TypeWork;