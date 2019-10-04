const Auth = require('../app/controllers/authController');
const User = require('../app/controllers/userController');
const Daily = require('../app/controllers/dailyController');

module.exports = {
    Query: {
        users: () => User.index(),
        daily: (_, { id }) => Daily.show({ id }),
    }, 
    Mutation: {
        register: (_, { name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }) => Auth.register({ name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }),
        login: (_, { email, password }) => Auth.login({ email, password }),
        storeDaily: (_, { date }, ctx) => Daily.store({ date, user_id: ctx.userId }),
    },
}