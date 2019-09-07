import { aboutDbPackage } from '@react-web-app/db';
import express from 'express';

const router = express.Router();

router.get('/about', (req, res, next) => {
    res.send('Use src/routes to add routes, use src/middleware to add middlewares like auth, and use repository to expose API endpoint methods');
    next();
});

router.get('/aboutDb', (req, res, next) => {
    res.send(aboutDbPackage());

    next();
});

export default router;