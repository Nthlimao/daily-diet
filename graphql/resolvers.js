const Auth = require('../app/controllers/authController');
const User = require('../app/controllers/userController');
const Meal = require('../app/controllers/mealController');

module.exports = {
    Query: {
        users: () => User.index(),
        meals: () => Meal.index(),
    }, 
    Mutation: {
        register: (_, { name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }) => Auth.register({ name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }),
        login: (_, { email, password }) => Auth.login({ email, password }),
    },
}