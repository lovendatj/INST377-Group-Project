import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initiaizeDB.json';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

// @TODO - Add a route to get all the information from the DB
// 
// 
// 
