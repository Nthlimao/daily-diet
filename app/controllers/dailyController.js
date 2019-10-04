const Daily = require('../models/daily');

module.exports = {
    async store({ user_id, date }) {
        const daily = await Daily.create({ user_id, date });

        return daily;
    },
    async show({ id }) {
        const daily = await Daily.findById(id);

        return daily;
    }
}