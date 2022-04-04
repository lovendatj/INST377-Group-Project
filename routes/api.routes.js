const express = require('express');
const router = express.Router();
const controller = require('../controller/database.controller');


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

router.get('/programs', controller.getAllPrograms);



module.exports = router;