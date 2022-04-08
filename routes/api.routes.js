const express = require('express');
const router = express.Router();
const controller = require('../controller/database.controller');


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

// router.get('/<your end point>', controller.getCustomResults);

router.get('/music', controller.getMusic)
    .get('/music/:id', controller.getMusic)
    .post('/music', controller.addMusic)
    .put('/music/:id', controller.updateMusic)
    .delete('/music/:id', controller.deleteMusic);




module.exports = router;