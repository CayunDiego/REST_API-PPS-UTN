import VotesComplaint from '../models/VotesComplaint.model';

//GET -> ID user
export const getByUser= async (req, res) => {
    try {
        const { id } = req.params;
        const votes = await VotesComplaint.findAll({
            attributes: ['ID_COMPLAINT'],
            where: {
                ID_U: id
            },
            order: [
                ['ID_VOTE', 'DESC']
            ]
        });
        res.status(200).json({
            data: votes || {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//POST
export const createVote = async (req, res ) => {
    try {
        const { id_u, id_c } = req.body;
        let newVote = await VotesComplaint.create({
            ID_U: id_u,
            ID_COMPLAINT: id_c
        },{
            fields: ['ID_U','ID_COMPLAINT']
        });
        if(newVote){
            return res.status(201).json({
                message: 'newVote created successfully',
                data: newVote
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