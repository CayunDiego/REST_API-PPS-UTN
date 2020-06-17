import { Router } from 'express';
const router = Router();

import { createComplaint,
         getComplaints, 
         getOneComplaint, 
         upVoteComplaint, 
         deleteComplaint, 
         getComplaintsByVote
        } from '../controllers/Complaints.controller';

//  /api/v1/complaint
router.post('/', createComplaint);
router.get('/', getComplaints);
router.get('/vote', getComplaintsByVote);
router.get('/:id', getOneComplaint);
router.delete('/:id', deleteComplaint);
router.put('/:id/upvote', upVoteComplaint);


export default router;