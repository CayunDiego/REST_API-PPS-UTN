import Complaints from '../models/Complaints.model';
//Model del FOREIGN KEY
import TypeWork from '../models/TypeWork.model';
import Users from '../models/Users.model';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

import moment from 'moment';
moment.locale('es');

//GET
export const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
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

//GET -> ID    //le agregué lo de moment provisoriamente, eso va en el front
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
        //para ver hace cuanto se publicó
        console.log( moment(complaint.CREATE_AT).fromNow());
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
        const { description, address, lat, lng, photoURL, idType, idUser } = req.body;
        console.log(req.body);
        let newComplaint = await Complaints.create({
            CREATE_AT: new Date(),
            DESCRIPTION: description,
            ADDRESS: address,
            LAT: lat.toFixed(6),
            LNG: lng.toFixed(6),
            PHOTO_URL: photoURL,
            VOTE: 0,
            ID_TYPE: idType,
            ID_U: idUser
        },{
            fields: ['CREATE_AT','DESCRIPTION','ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'ID_TYPE', 'ID_U']
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

//DELETE    //MODIFICARLO PARA QUE SOLO SEA ELIMINADO SI EL ESTADO ES ACTIVO
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
        const { vote } = req.body;
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'ID_TYPE', 'VOTE', 'ID_U'],
            where: {
                ID: id
            }
        });
        if(complaints.length > 0){
            complaints.forEach( async complaint => {
                await complaint.update({
                    VOTE: complaint.VOTE + 1
                })
            })
        }
        return res.status(200).json({
            message: 'Complaints Updated Successfully',
            data: complaints
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

////////////////////////// GET CON FILTROS ///////////////////////

//POR AHORA ESTE NO TIENE UTILIDAD. SIRVE DE EJEMPLO
//GET Complaints by type work
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

//GET Complaints by one user
export async function getComplaintByOneUser(req, res){
    const { id } = req.params;
    const complaints = await Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
        include: [{
                model: TypeWork
                },
                {
                    model: Users
                }],
        where: {
            ID_U: id
        }
    });
    res.status(200).json({
        data: complaints
    });
}

//GET Complaints by user Unregistered
export const getComplaintsByUserUnregistered = async (req, res) => {
    try {
        console.log('hola')
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [{
                        model: TypeWork
                    },
                    {
                        model: Users
                    }],
                    where: {
                        ID_U: null
                    },
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
//GET Complaints by user Registered
export const getComplaintsByUserRegistered = async (req, res) => {
    try {
        console.log('hola')
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [{
                        model: TypeWork
                    },
                    {
                        model: Users
                    }],
                    where: {
                        ID_U: {[Op.not]: null}
                    },
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

//GET Complaints by Vote
export const getComplaintsByVote = async (req, res) => {
    try {
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [
                {
                  model: TypeWork
                  
                },
                {
                  model: Users
                }
              ],
            order: [
                ['VOTE', 'DESC']
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

//GET Complaints by Location
export const getComplaintsByLocation = async (req, res) => {
    const { lat, lng } = req.params;
    const radio = 0.01;
    const locationRadio = {
        latSup: (parseFloat(lat) + radio).toFixed(4),
        latInf: (parseFloat(lat) - radio).toFixed(4) ,
        lngDer: (parseFloat(lng) + radio).toFixed(4) ,
        lngIzq: (parseFloat(lng) - radio).toFixed(4)
    }
    try {
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE'],
            include: [
                {
                  model: TypeWork
                  
                },
                {
                  model: Users
                }
              ],
              where: {
                LAT: {
                    
                    [Op.between]: [locationRadio.latInf, locationRadio.latSup]
                },
                LNG: {
                    
                    [Op.between]: [locationRadio.lngIzq, locationRadio.lngDer]
                }
            },
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