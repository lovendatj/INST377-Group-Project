import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
//import fetch from 'node-fetch';

import songDisplayRoute from './songDisplayRoute.js';

import db from '../database/initializeDB.js';


const songDisplayQuery = "SELECT tr.track_name, pll.name, ou.company_name FROM tracks AS tr JOIN music AS mu ON tr.track_id = mu.track_id JOIN playlist AS pl ON mu.music_id = pl.music_id JOIN playlist_ledger AS pll ON pl.p_list_id = pll.playlist_track_id JOIN station AS st ON pll.playlist_track_id = st.playlist_ledg_id JOIN outlet AS ou ON st.outlet_id = ou.outlet_id";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/foodServicesPG', songDisplayRoute)

router.route('/individualSongInfo')
.get(async (req, res) => {
    try{
        const individualSong = await db.sequelizeDB.query(songDisplayQuery, {
            type: sequelize.QueryTypes.SELECT
        });
        res.json({data: individualSong});
    }
    catch (err) {
        console.log(err);
        res.json({message: "something went wrong"});
    }
})

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