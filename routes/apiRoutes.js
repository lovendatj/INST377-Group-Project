import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

// @TODO - Add a route to get all the information from the DB
// 
// SAMPLE ROUTES EXAMPLE
// PS: DO NOT (!!!) do this outside of this class project.

// router.get('/users/:user_id', (req, res) => {
//     try{
//         const user = await db.Users.findAll({    <-- `Users` is the name of the table in the DB
//             where: {
//                 id: req.params.user_id
//             }
//         })
//         res.json(user);

//     } catch (err){
//         console.log(err)
//         res.error('Server Error');
//     }
// });

export default router;