const Auth = require('../controllers/authController');
const User = require('../controllers/userController');

module.exports = {
    Query: {
        users: () => User.index(),
    }, 
    Mutation: {
        register: (_, { name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }) => Auth.register({ name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }),
        login: (_, { email, password }) => Auth.login({ email, password }),
    },
}