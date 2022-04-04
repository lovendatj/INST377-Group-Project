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

module.exports = {
    getAllTables
    // <function name>
    // getCustomResults
};
