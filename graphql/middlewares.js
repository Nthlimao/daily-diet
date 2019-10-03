const authMiddleware = require('../app/middlewares/authMiddleware');

module.exports = {
    Query: {
        users: authMiddleware,
        meals: authMiddleware,
    },
}