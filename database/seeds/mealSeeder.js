const Meal = require('../../app/models/meal');

module.exports = {
    async run() {
        await Meal.create({ name: 'Café da Manhã', identifier: 'BREAKFAST' });
        await Meal.create({ name: 'Lache da Manhã', identifier: 'MORNING_SNACK' });
        await Meal.create({ name: 'Almoço', identifier: 'LUNCH' });
        await Meal.create({ name: 'Lanche da Tarde', identifier: 'AFTERNOON_SNACK' });
        await Meal.create({ name: 'Jantar', identifier: 'DINNER' });
        await Meal.create({ name: 'Ceia', identifier: 'SUPPER' });
    }
}