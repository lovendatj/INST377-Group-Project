const express = require('express');
const sequelize = require('sequelize');
const chalk = require('chalk');
const fetch = import('node-fetch');

const db = require('../database/initializeDB.js');


const router = express.Router();

const songDisplayQuery = "SELECT tr.track_name, pll.name, ou.company_name FROM tracks AS tr JOIN music AS mu ON tr.track_id = mu.track_id JOIN playlist AS pl ON mu.music_id = pl.music_id JOIN playlist_ledger AS pll ON pl.p_list_id = pll.playlist_track_id JOIN station AS st ON pll.playlist_track_id = st.playlist_ledg_id JOIN outlet AS ou ON st.outlet_id = ou.outlet_id";


router.get('/', (req, res) => {
    console.log('You touched the individual song display route.')
    res.json({message: 'Welcome to Group 4 Spotify API.'})
});

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

module.exports = router; 