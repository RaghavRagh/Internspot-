import express from 'express';
import { checkout, paymentVerification } from '../controllers/paymentController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.post('/payment', authenticate, checkout);
router.post('/paymentverification', authenticate, paymentVerification);

export default router;