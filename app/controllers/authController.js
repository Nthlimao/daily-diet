const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateToken = (params = {}) => { 
    return jwt.sign(params, process.env.SECRET_JWT, { expiresIn: 86400 });
}

module.exports = {
    async register({ name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }) {
        
        if(await User.findOne({ email }))
            throw new Error('User already exists');

        if(await User.findOne({ cpf }))
            throw new Error('User already exists');

        if(password !== confirmPassword)
            throw new Error('Password error');

        try {
            const user = await User.create({
                name,
                email,
                cpf,
                dateOfBirth,
                password,
                heights: {
                    value: height,
                },
                weights:{
                    value: weight,
                },
            });
            
            return {
                user, 
                token: generateToken({ id: user.id }),
            }            
        } catch (err) {
            throw new Error(err.message);
        }
    },
    async login({ email, password }) {
        const user = await User.findOne({ email });

        if(!user) throw new Error('User not found');

        if(!await bcrypt.compare(password, user.password)) throw new Error('Invalid password');

        return {
            user,
            token: generateToken({ id: user.id }),
        }
    }
}