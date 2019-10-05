const Auth = require('../app/controllers/authController');
const User = require('../app/controllers/userController');
const Daily = require('../app/controllers/dailyController');
const Meal = require('../app/controllers/mealController');

module.exports = {
    Query: {
        dailies: (_, { }, ctx ) => Daily.index({ user_id: ctx.userId }),
        daily: (_, { id }) => Daily.show({ id }),
        searchDaily: (_, { date }) => Daily.search({ date }),
        destroyMeal: (_, { meal, item, dailyId }) => Meal.destroy({ meal, item, dailyId })
    }, 
    Mutation: {
        register: (_, { name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }) => Auth.register({ name, cpf, email, dateOfBirth, password, confirmPassword, weight, height }),
        login: (_, { email, password }) => Auth.login({ email, password }),
        storeDaily: (_, { date }, ctx) => Daily.store({ date, user_id: ctx.userId }),
        storeMeal: (_, { meal, food, quantity, measure, calories, dailyId }) => Meal.store({ meal, food, quantity, measure, calories, dailyId }),
        updateMeal: (_, { meal, item, food, quantity, measure, calories, dailyId }) => Meal.update({ meal, item, food, quantity, measure, calories, dailyId })
    },
}