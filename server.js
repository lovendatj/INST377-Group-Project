import express from 'express';
import db from './database';
import apiRoutes from './routes/api';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = __dirname + '/public';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);


const bootServer = async () => {
    try {
        await db.sync();
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

bootServer();