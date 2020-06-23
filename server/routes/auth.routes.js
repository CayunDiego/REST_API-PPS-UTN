import { Router } from 'express';
const router = Router();

import {signin,
        signup,
        getMe
        } from '../service/Auth.service';

//  /api/v1/auth
router.post('/signin', signin);
router.post('/signup', signup); //registro
router.get('/me', getMe);


export default router;