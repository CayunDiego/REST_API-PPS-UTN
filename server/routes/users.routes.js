import { Router } from 'express';
const router = Router();

import {createUser,
        getUsers,
        getOneUser,
        deleteUser,
        updateUser
        } from '../controllers/User.controller';

//  /api/v1/user
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;