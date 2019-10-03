const Modals = require('../models/menu');
const Menu = Modals.Menu;

module.exports = {
    async index(){
        return await Menu.find().populate('meal');
    },
    async store({ date, meal, food, quantity, measure, calories }, ctx){
        try {
            const menu = await Menu.create({
                date,
                meal,
                itens: {
                    food,
                    quantity,
                    measure,
                    calories
                },
                userId: ctx.userId
            }).populate('meal');

            return menu;

        } catch (err) {
            throw new Error(err);
        }
    }
}