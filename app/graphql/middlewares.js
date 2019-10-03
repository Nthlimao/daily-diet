const authMiddleware = require('../middlewares/authMiddleware');

module.exports = {
    Query: {
        users: authMiddleware,
    },
}