import { Router } from 'express';
import { getUser, newUser } from '../controllers/users.js';

export const router = Router();

router.post('/getUser/:idq', getUser);
router.post('/newUser', newUser);