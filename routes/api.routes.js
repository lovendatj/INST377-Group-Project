
const express = require('express');
const router = express.Router();
const controller = require('../controller/database.controller');


router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

router.get
// router.get('/<your end point>', controller.getCustomResults);

router.get('/music', controller.getAllMusic);
router.get('/music/:id', controller.getMusic);
router.post('/music', controller.addMusic);
router.put('/music/:id', controller.updateMusic);
router.delete('/music/:id', controller.deleteMusic);

router.get('/songList', controller.getAllSongList);
router.get('/songList/:id', controller.getAllSongList);


module.exports = router;