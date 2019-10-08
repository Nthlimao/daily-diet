const User = require('../models/user');

module.exports = {
    async index() {
        const users = await User.find();
        
        return users;
    },
    async show({ id }){
        return await User.findById(id);
    }
}