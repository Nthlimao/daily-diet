const authMiddleware = require('../app/middlewares/authMiddleware');

module.exports = {
    Query: {
        dailies: authMiddleware,
        daily: authMiddleware,
        searchDaily: authMiddleware,
        destroyMeal: authMiddleware,
    },
    Mutation: {
        storeDaily: authMiddleware,
        storeMeal: authMiddleware,
        updateMeal: authMiddleware,
    },
}