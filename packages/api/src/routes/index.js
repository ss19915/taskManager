import express from 'express';
import about from './about';

const router = express.Router();

router.use('/', about);

export default router;