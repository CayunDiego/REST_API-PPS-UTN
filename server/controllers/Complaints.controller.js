import Complaints from '../models/Complaints.model';
//Model del FOREIGN KEY
import TypeWork from '../models/TypeWork.model';
import Users from '../models/Users.model';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

//GET
export const getComplaints = async (req, res) => {
    let complaints = []
    try {
        switch (Object.keys(req.query)[0]) {
            case 'typework':
              complaints = await searchByTypeWork(req.query.typework);
              break;
            case 'userid':
                complaints = await searchByOneUser(req.query.userid);
              break;
            case 'typeuser':
                complaints = await searchByTypeUser(req.query.typeuser);
              break;
            case 'state':
                complaints = await searchByState(req.query.state);
                break;
            case 'lat':
                        req.query.lng !== undefined 
                            ?  complaints = await searchByLocation(req.query.lat, req.query.lng)
                            : res.status(400).json({
                                message: 'one parameter is missing'
                            });
              break;
            case undefined:
                complaints = await searchComplaints();
                break;
            default:
              res.status(400).json({
                message: 'unrecognized parameter'
              });
          }
        res.status(200).json({
            data: complaints || []
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
            attributes: ['ID',  'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
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
            data: complaint || {}
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
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
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

//POST
export const createComplaint = async (req, res) => {
    try {
        const { description, address, lat, lng, photoURL, idType, idUser } = req.body;
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
            return res.status(201).json({
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

//UPVOTECOMPLAINT
export const upVoteComplaint = async (req, res) => {
    try {
        const { id } = req.params;
        const { vote } = req.body;
        const complaints = await Complaints.findAll({
            attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'ID_TYPE', 'VOTE', 'ID_U','STATE'],
            where: {
                ID: id
            }
        });
        if(complaints.length > 0){
            complaints.forEach( async complaint => {
                await complaint.update({
                    VOTE: complaint.VOTE + 1,
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

//functions for GET complaints by filter
const searchComplaints = () => {
    return Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
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
}

const searchByTypeWork = typeId => {
    return Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
        include: [
            {
              model: TypeWork
              
            },
            {
              model: Users
            }
          ],
        where: {
            ID_TYPE: typeId
        }
    });
}

const searchByOneUser = userId => {
    return Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
        include: [{
                model: TypeWork
                },
                {
                    model: Users
                }],
        where: {
            ID_U: userId
        }
    });
}

// 1- Unregistered , 2- Registered
const searchByTypeUser = type => {
    let isNull = undefined;
    if(type === '1'){
        isNull = null;
    } else if(type === '2'){
        isNull = {[Op.not]: null}
    }
    return Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
        include: [{
                    model: TypeWork
                },
                {
                    model: Users
                }],
                where: {
                    ID_U: isNull
                },
        order: [
            ['ID', 'DESC']
        ]
    });
}

const searchByLocation = (lat, lng) => {
    const radio = 0.01;
    const locationRadio = {
        latSup: (parseFloat(lat) + radio).toFixed(4),
        latInf: (parseFloat(lat) - radio).toFixed(4) ,
        lngDer: (parseFloat(lng) + radio).toFixed(4) ,
        lngIzq: (parseFloat(lng) - radio).toFixed(4)
    }
    return Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
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
}

// 1- Publicada, 2- Ejecucion, 3- Rechazada, 4- Finalizada
const searchByState = state => {
    let stateName= '';
    if(state === '1'){
        stateName = 'Publicada';
    } 
    if(state === '2'){
        stateName = 'Ejecucion';
    } 
    if(state === '3'){
        stateName = 'Rechazada';
    } 
    if(state === '4'){
        stateName = 'Finalizada';
    } 

    return Complaints.findAll({
        attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
        include: [{
                    model: TypeWork
                },
                {
                    model: Users
                }],
                where: {
                    STATE: stateName
                },
        order: [
            ['ID', 'DESC']
        ]
    });

}