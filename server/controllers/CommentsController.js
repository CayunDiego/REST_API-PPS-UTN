import Comments from '../models/Comments.model';
//Model del FOREIGN KEY
// import Complaints from '../models/Complaints.model';
import Users from '../models/Users.model';

//GET
export const getComments = async (req, res) => {
   try {
        const comments = await Comments.findAll({
            attributes: ['ID_C',  'COMMENT', 'CREATE_AT', 'VOTE', 'ID_COMPLAINT'],
            include: [
                {
                  model: Users
                }
              ]
        });
        res.status(200).json({
            data: comments
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
   }
}

//GET -> ID
export const getOneComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comments.findAll({
            attributes: ['ID_C',  'COMMENT', 'CREATE_AT', 'VOTE', 'ID_COMPLAINT'],
            include: [
                {
                  model: Users
                }
              ],
            where: {
                ID_COMPLAINT: id
            },
            order: [
                ['ID_C', 'DESC']
            ]
        });
        res.status(200).json({
            data: comment
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//POST
export const createComment = async (req, res) => {
    try {
        const { comment, idComplaint, idUser } = req.body;
        let newComment = await Comments.create({
            COMMENT: comment,
            CREATE_AT: new Date(),
            VOTE: 0,
            ID_COMPLAINT: idComplaint,
            ID_U: idUser
        },{
            fields: ['COMMENT', 'CREATE_AT', 'VOTE', 'ID_COMPLAINT', 'ID_U']
        });
        if(newComment){
            return res.status(200).json({
                message: 'Comments created successfully',
                data: newComment
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
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await Comments.destroy({
            where: {
                ID_C: id
            }
        });
        res.status(200).json({
            message: 'Comments Deleted succesfully',
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
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { vote } = req.body;
        const comments = await Comments.findAll({
            attributes: ['ID_C', 'COMMENT', 'CREATE_AT', 'VOTE', 'ID_COMPLAINT', 'ID_U'],
            where: {
                ID_C: id
            }
        });
        if(comments.length > 0){
            comments.forEach( async comment => {
                await comment.update({
                    VOTE: comment.VOTE + 1
                })
            })
        }
        return res.status(200).json({
            message: 'Comments Updated Successfully',
            data: comments
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}