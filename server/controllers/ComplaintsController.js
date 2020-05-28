import Complaints from '../models/Complaints.model';
//Model del FOREIGN KEY
import TypeWork from '../models/TypeWork.model';
import Users from '../models/Users.model';

//GET
export const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaints.findAll({
            attributes: ['ID',  'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [
                {
                  model: TypeWork
                  
                },
                {
                  model: Users
                }
              ],
            order: [
                ['ID', 'DESC']
            ]
        });
        res.status(200).json({
            data: complaints
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
   }
}

//GET -> ID
export const getOneComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await Complaints.findOne({
            attributes: ['ID',  'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [
                {
                  model: TypeWork
                  
                },
                {
                  model: Users
                }
              ],
            where: {
                ID: id
            }
        });
        res.status(200).json({
            data: complaint
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//POST
export const createComplaint = async (req, res) => {
    try {
        const { createAt, description, address, lat, lng, photoURL, idType, vote, idUser } = req.body;
        let newComplaint = await Complaints.create({
            CREATE_AT: createAt,
            DESCRIPTION: description,
            ADDRESS: address,
            LAT: lat,
            LNG: lng,
            PHOTO_URL: photoURL,
            ID_TYPE: idType,
            VOTE: vote,
            ID_U: idUser
        },{
            fields: ['CREATE_AT','DESCRIPTION','ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'ID_TYPE', 'VOTE', 'ID_U']
        });
        if(newComplaint){
            return res.status(200).json({
                message: 'Complaints created successfully',
                data: newComplaint
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

//DELETE
export const deleteComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await Complaints.destroy({
            where: {
                ID: id
            }
        });
        res.status(200).json({
            message: 'Complaints Deleted succesfully',
            count: deleteRowCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//PUT
export const updateComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const { createAt, description, address, lat, lng, photoURL, idType, vote, idUser } = req.body;
        const complaint = await Complaints.findOne({
            attributes: ['CREATE_AT','DESCRIPTION','ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'ID_TYPE', 'VOTE', 'ID_U'],
            where: {
                ID: id
            }
        });
        const updateComplaints = await Complaints.update({
            CREATE_AT: createAt,
            DESCRIPTION: description,
            ADDRESS: address,
            LAT: lat,
            LNG: lng,
            PHOTO_URL: photoURL,
            ID_TYPE: idType,
            VOTE: vote,
            ID_U: idUser
        }, {
            where: {
                ID: id
            }
        })

        return res.status(200).json({
            message: 'Complaints Updated Successfully',
            data: updateComplaints
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//////////////////////////

//Complaints by type work
export async function getComplaintByTypeWork(req, res){
    try {
        const { id } = req.params;
        const complaints = await Complaints.findAll({
            attributes: ['ID',  'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [
                {
                  model: TypeWork
                  
                },
                {
                  model: Users
                }
              ],
            where: {
                ID_TYPE: id
            }
        });
        res.status(200).json({
            data: complaints
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//Complaints by user
// export async function getComplaintByUser(req, res){

// }