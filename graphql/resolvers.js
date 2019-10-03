const Auth = require('../app/controllers/authController');
const User = require('../app/controllers/userController');
const Meal = require('../app/controllers/mealController');
const Menu = require('../app/controllers/menuController');

module.exports = {
    Query: {
        users: () => User.index(),
        meals: () => Meal.index(),
        menus: () => Menu.index(),
    }, 
    Mutation: {
        register: (_, { name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }) => Auth.register({ name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }),
        login: (_, { email, password }) => Auth.login({ email, password }),
        storeMenu: (_, { date, meal, food, quantity, measure, calories }, ctx) => Menu.store({ date, meal, food, quantity, measure, calories }, ctx),
    },
}