import { Router } from 'express';
const router = Router();

import {createComment,
        getComments,
        getOneComment,
        deleteComment,
        updateComment
        } from '../controllers/CommentsController';

//  /api/v1/comment
router.post('/', createComment);
router.get('/', getComments);
//  /api/v1/comment/:id
router.get('/:id', getOneComment);
router.delete('/:id', deleteComment);
router.put('/:id', updateComment);


export default router;