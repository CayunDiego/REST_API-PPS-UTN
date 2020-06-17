import { Router } from 'express';
const router = Router();

import {createTypeWork, 
        getTypeWorks, 
        getOneTypeWork, 
        deleteTypeWork, 
        updateTypeWork
        } from '../controllers/TypeWorkController';

//  /api/v1/typework
router.post('/', createTypeWork);
router.get('/', getTypeWorks);
//  /api/v1/typework/:id
router.get('/:id', getOneTypeWork);
router.delete('/:id', deleteTypeWork);
router.put('/:id', updateTypeWork);


export default router;