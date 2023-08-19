import { Router } from 'express';
import { getUser } from '../controllers/users.js';

const router = Router();

router.get('/:idq', getUser());
router.get('/:idq', getUser());