import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';



<<<<<<< HEAD
// router.get('/<your end point>', controller.getCustomResults);
=======
const router = express.Router();
>>>>>>> parent of 94155ac (.)

router.get('        /', (req, res) => { 
    res.send('Hello World');            
});


router.get('/routes', (req, res) => {
    try{
        const user = await db.default.findAll({  
                id: req.params.user_id
            }
        })
        res.json(default);

    } catch (err){
        console.log(err)
        res.error('Server Error');
    }
});

export default router;