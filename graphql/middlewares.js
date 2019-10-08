const authMiddleware = require('../app/middlewares/authMiddleware');

module.exports = {
    Query: {
        dailies: authMiddleware,
        daily: authMiddleware,
        searchDaily: authMiddleware,
        destroyMeal: authMiddleware,
        showProfile: authMiddleware,
    },
    Mutation: {
        storeDaily: authMiddleware,
        storeMeal: authMiddleware,
        updateMeal: authMiddleware,
        updateProfile: authMiddleware,
        updatePassword: authMiddleware,
        updateWeight: authMiddleware,
        updateHeight: authMiddleware,
    },
}