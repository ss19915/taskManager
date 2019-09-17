import express from 'express';
import routes from './routes';
import middleware from './middleware';
import { connectDb } from '@task-manager/db';
import { DB_URI } from './constants';

const app = express();

app.use([ middleware, routes ]);

connectDb(DB_URI);

export default app;