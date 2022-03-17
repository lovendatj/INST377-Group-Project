import Sequelize from 'sequelize';

import config from './config.js';
import models from '../models/index.js';

const { DataTypes } = Sequelize;

const env = process.env.NODE_ENV || 'development';
const configDB = config[env];

let sequelizeDB;
if (configDB.use_env_variable){
    sequelizeDB = new Sequelize(process.env[configDB.use_env_variable], configDB);
} else{
    sequelizeDB = new Sequelize(
        configDB.database, 
        configDB.username, 
        configDB.password, 
        configDB);
}

const db = Object.keys(models).reduce((collection, modelName) => {
    if(!collection[modelName]){
        collection[modelName] = models[modelName](sequelizeDB, DataTypes);
    }    
    return collection;
}, {});

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.sequelizeDB = sequelizeDB;
db.Sequelize = Sequelize;

export default db;