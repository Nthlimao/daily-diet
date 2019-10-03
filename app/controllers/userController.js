const Controller = require('../models/user');
const User = Controller.User;

module.exports = {
    async index() {
        const users = await User.find();
        
        return users;
    },
}