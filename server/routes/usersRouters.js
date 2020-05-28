import { Router } from 'express';
const router = Router();

import {createUser,
        getUsers,
        getOneUser,
        deleteUser,
        updateUser
        } from '../controllers/UserController';

//  /api/v1/user
router.post('/', createUser);
router.get('/', getUsers);
//  /api/v1/user/:id
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);


export default router;