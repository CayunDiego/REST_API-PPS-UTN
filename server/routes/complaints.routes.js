import { Router } from 'express';
const router = Router();

import { verifyTokenMiddleware } from '../middlewares'
import { createComplaint,
         getComplaints, 
         getOneComplaint, 
         upVoteComplaint, 
         deleteComplaint, 
         getComplaintsByVote,
         UpdateState
        } from '../controllers/Complaints.controller';

//  /api/v1/complaint
router.post('/', createComplaint);
router.get('/', getComplaints);
router.get('/vote', getComplaintsByVote);
router.get('/:id', getOneComplaint);
router.delete('/:id', deleteComplaint);
router.put('/:id/upvote', upVoteComplaint);
router.put('/:id',verifyTokenMiddleware, UpdateState);


export default router;