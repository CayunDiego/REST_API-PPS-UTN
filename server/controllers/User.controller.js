import Users from '../models/Users.model';

//GET
export const getUsers = async (req, res) => {
   try {
        const users = await Users.findAll();
        res.status(200).json({
            data: users || []
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
   }
}

//GET -> ID
export const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findOne({
            where: {
                ID_U: id
            }
        });
        res.status(200).json({
            data: user || {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}

//POST
export const createUser = async (req, res ) => {
    try {
        const { idUser, displayName, firstName, lastName, document, photoURL } = req.body;
        let newUser = await Users.create({
            ID_U: idUser,
            DISPLAY_NAME: displayName,
            FIRST_NAME: firstName,
            LAST_NAME: lastName,
            DOCUMENT: document,
            PHOTO_URL: photoURL
        },{
            fields: ["ID_U","DISPLAY_NAME","FIRST_NAME", "LAST_NAME","DOCUMENT","PHOTO_URL"]
        });
        if(newUser){
            return res.status(201).json({
                message: 'User created successfully',
                data: newUser
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
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await Users.destroy({
            where: {
                ID_U: id
            }
        });
        res.status(200).json({
            message: 'User Deleted succesfully',
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
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { displayName, photoURL } = req.body;
        const users = await Users.findAll({
            attributes: ["ID_U","DISPLAY_NAME","FIRST_NAME", "LAST_NAME","DOCUMENT","PHOTO_URL"],
            where: {
                ID_U: id
            }
        });
        if(users.length > 0){
            users.forEach( async user => {
                await user.update({
                    DISPLAY_NAME: displayName,
                    PHOTO_URL: photoURL
                })
            })
        }
        return res.status(200).json({
            message: 'User Updated Successfully',
            data: users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The request failed.'
        });
    }
}