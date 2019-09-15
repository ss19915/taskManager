import express from 'express';
import cors from 'cors';

const middliwawre = express.Router();

middliwawre.use(express.json());
middliwawre.use(cors());

export default middliwawre