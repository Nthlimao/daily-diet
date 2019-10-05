const Daily = require('../models/daily');
const moment = require('moment');

module.exports = {
    async index({ user_id }){
        const dailies = await Daily.find({ user_id });
        return dailies;
    },
    async store({ user_id, date }) {
        const daily = await Daily.create({ user_id, date });

        return daily;
    },
    async show({ id }) {
        const daily = await Daily.findById(id);

        return daily;
    },
    async search({ date }) {
        let days = moment(date);
        let day  = days.toDate();
        let next = days.add(1, 'day').toDate();

        const daily = await Daily.findOne({
            created_at: {
                "$gte": day,
                "$lt": next
            }
        });

        return daily;
    }
}