import { Router } from 'express';
const router = Router();

import {createVote,
        getByUser
        } from '../controllers/VotesComment.controller';

//  /api/v1/votescomplaint
router.post('/', createVote);
router.get('/:id', getByUser);

export default router;