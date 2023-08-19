import { Router } from 'express';
import { getUser, newUser, newContact, newDoc } from '../controllers/users.js';

export const router = Router();

router.post('/getUser/:idq', getUser);
router.post('/newUser', newUser);
router.post('/newContact', newContact);
router.post('/newDoc', newDoc);