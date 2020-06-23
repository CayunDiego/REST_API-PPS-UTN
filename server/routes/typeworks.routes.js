import { Router } from 'express';
const router = Router();

import { verifyTokenMiddleware } from '../middlewares'
import {createTypeWork, 
        getTypeWorks, 
        getOneTypeWork, 
        deleteTypeWork, 
        updateTypeWork
        } from '../controllers/TypeWork.controller';

//  /api/v1/typework
router.post('/',verifyTokenMiddleware, createTypeWork);
router.get('/', getTypeWorks);
router.get('/:id', getOneTypeWork);
router.delete('/:id',verifyTokenMiddleware, deleteTypeWork);
router.put('/:id',verifyTokenMiddleware, updateTypeWork);

export default router;