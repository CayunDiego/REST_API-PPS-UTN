import bcryptjs from 'bcryptjs';

export const encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return bcryptjs.hash(password, salt);
}

export const validatePassword = async (password, user) => {
    return bcryptjs.compare(password, user.PASSWORD)
}