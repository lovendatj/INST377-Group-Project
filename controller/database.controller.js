const db = require('../services/database.service');

const getAllPrograms = async (req, res, next) => {
    try{
        const result = await db.getProgram();
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

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

module.exports = {
    getAllPrograms,
};
