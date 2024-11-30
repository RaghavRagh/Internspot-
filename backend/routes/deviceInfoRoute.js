import express from 'express';
import { trackLogin } from '../controllers/trackLogin.js';

const router = express.Router();

router.post('/device-info', trackLogin);

export default router;