import { Router } from 'express';
const router = Router();

import {createComment,
        getComments,
        getOneComment,
        deleteComment,
        upVoteComment
        } from '../controllers/Comments.controller';

//  /api/v1/comment
router.post('/', createComment);
router.get('/', getComments);
router.get('/:id', getOneComment);
router.delete('/:id', deleteComment);
router.put('/:id/upvote', upVoteComment);

export default router;