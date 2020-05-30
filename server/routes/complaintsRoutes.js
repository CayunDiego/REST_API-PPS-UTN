import { Router } from 'express';
const router = Router();

import { createComplaint,
         getComplaints, 
         getOneComplaint, 
         updateComplaint, 
         deleteComplaint, 
         getComplaintByTypeWork,
         getComplaintByOneUser,
         getComplaintsByUserUnregistered,
         getComplaintsByUserRegistered,
         getComplaintsByVote,
         getComplaintsByLocation
        } from '../controllers/ComplaintsController';

//  /api/v1/complaint
router.post('/', createComplaint);
router.get('/', getComplaints);
//  /api/v1/complaint/user_unregistered
router.get('/user_unregistered', getComplaintsByUserUnregistered);
router.get('/user_registered', getComplaintsByUserRegistered);
router.get('/vote', getComplaintsByVote);
//  /api/v1/complaint/:id
router.get('/:id', getOneComplaint);
router.delete('/:id', deleteComplaint);
router.put('/:id', updateComplaint);
//  /api/v1/complaint/typework/typeworkId
router.get('/typework/:id', getComplaintByTypeWork);
//  /api/v1/complaint/user/userId
router.get('/user/:id', getComplaintByOneUser);
//  /api/v1/complaint/locate/:lat/:lng
router.get('/locate/:lat/:lng', getComplaintsByLocation);


export default router;