import express from 'express';
import task from './task';
import { ROUTES } from '../constants';

const router = express.Router();

router.use(ROUTES.TASK, task);

export default router;