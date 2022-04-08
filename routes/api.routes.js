const express = require('express');
const router = express.Router();
const controller = require('../controller/database.controller');


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

// router.get('/<your end point>', controller.getCustomResults);

/* John's Routes */
router.get('/music', controller.getAllMusic);
router.get('/music/:id', controller.getMusic);
router.post('/music', controller.addMusic);


module.exports = router;