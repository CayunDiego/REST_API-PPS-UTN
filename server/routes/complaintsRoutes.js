import { Router } from 'express';
const router = Router();

import { createComplaint,
         getComplaints, 
         getOneComplaint, 
         updateComplaint, 
         deleteComplaint, 
         getComplaintByTypeWork 
        } from '../controllers/ComplaintsController';

//  /api/v1/complaint
router.post('/', createComplaint);
router.get('/', getComplaints);
//  /api/v1/complaint/:id
router.get('/:id', getOneComplaint);
router.delete('/:id', deleteComplaint);
router.put('/:id', updateComplaint);
//  /api/v1/complaint/typework/typeworkId
router.get('/typework/:id', getComplaintByTypeWork);

export default router;