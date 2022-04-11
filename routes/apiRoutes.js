import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';



const router = express.Router();

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