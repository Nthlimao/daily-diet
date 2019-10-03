const MealSeeder = require('./mealSeeder');

module.exports = {
    async run(){
        await MealSeeder.run();
    }
}