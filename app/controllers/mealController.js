const Meal = require('../models/meal');

module.exports = {
    async index() {
        return await Meal.find();
    }
}