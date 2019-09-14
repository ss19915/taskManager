import express from 'express';
import routes from './routes';
import middleware from './middleware';
import { connectDb } from '@task-manager/db';
import { DB_URI, API_PORT} from './constants';

const app = express();

app.use([ middleware, routes ]);
app.listen(API_PORT, () => {
    console.log(`Server runnign on Port ${API_PORT}`);
});

connectDb(DB_URI);