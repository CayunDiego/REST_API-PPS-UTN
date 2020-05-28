import TypeWork from '../models/TypeWork.model';

//GET
export const getTypeWorks = async (req, res) => {
   try {
        const typeworks = await TypeWork.findAll();
        res.status(200).json({
            data: typeworks
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
   }
}

//GET -> ID
export const getOneTypeWork = async (req, res) => {
    try {
        const { id } = req.params;
        const typework = await TypeWork.findOne({
            where: {
                ID_TYPE: id
            }
        });
        res.status(200).json({
            data: typework
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//POST
export const createTypeWork = async (req, res ) => {
    try {
        const { idType, type, color } = req.body;
        let newTypeWork = await TypeWork.create({
            ID_TYPE: idType,
            TYPE: type,
            COLOR: color
        },{
            fields: ['ID_TYPE','TYPE','COLOR']  //le digo los datos que voy a llenar (es como el values)
        });
        if(newTypeWork){
            return res.status(200).json({
                message: 'Type work created successfully',
                data: newTypeWork
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
export const deleteTypeWork = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await TypeWork.destroy({
            where: {
                ID_TYPE: id
            }
        });
        res.status(200).json({
            message: 'Type work Deleted succesfully',
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
export const updateTypeWork = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, color } = req.body;
        const typeworks = await TypeWork.findAll({
            attributes: ['ID_TYPE','TYPE','COLOR'],
            where: {
                ID_TYPE: id
            }
        });
        if(typeworks.length > 0){
            typeworks.forEach( async typework => {
                await typework.update({
                    TYPE: type,
                    COLOR: color
                })
            })
        }
        return res.status(200).json({
            message: 'Type work Updated Successfully',
            data: typeworks
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}