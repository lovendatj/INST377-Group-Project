const db = require('../services/database.service');

// Example
const getCustomResults = async (req, res, next) => {
    try{
        const result = await db.getCustomResults();
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const getMusic = async (req, res, next) => {
    try{
        const result = await db.getMusic(
            req.params.id
        );
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
const getAllMusic = async (req, res, next) => {
    try{
        const result = await db.getMusic();
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
const addMusic = async (req, res, next) => {
    try{
        const result = await db.addMusic(
            {...req.body}
        );
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const updateMusic = async (req, res, next) => {
    try{
        const result = await db.updateMusic(
            {body: req.body, id: req.params.id}
        );
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
const deleteMusic = async (req, res, next) => {
    try{
        const result = await db.deleteMusic(
            req.params.id
        );
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const getAllTables = async (req, res, next) => {
    try{
        const result = await db.getAllTables();
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

<<<<<<< HEAD
const getAll
=======

const getAllSongList = async (req, res, next) => {
    try{
        const result = await db.getSongList();
        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const getAllSongDisplay = async (req, res, next) => {
    try{
        const result = await db.getDisplaySong();

        res.status(200).json({
            results: result
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const getSongDisplay = async (req, res, next) => {
    try {
        const result = await db.getDisplaySong(
            req.params.id
        );
        res.status(200).json({
            results: result
        });
    }
    catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

>>>>>>> origin/main

module.exports = {
    getMusic,
    getAllMusic,
    updateMusic,
    deleteMusic,
    addMusic,
    getAllTables,
    getAllSongList,
    getAllSongDisplay,
    getSongDisplay,


    // <function name>
    // getCustomResults
};
