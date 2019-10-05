const Daily = require('../models/daily');

const mealController = {
    async store({ meal, food, quantity, measure, calories, dailyId }) {
        const daily = await Daily.findById(dailyId);

        switch (meal) {
            case "breakfast":
                daily.breakfast.itens.push({
                    food,
                    quantity,
                    measure,
                    calories
                });

                await daily.save();
                break;
            case "morning_snack":
                daily.morning_snack.itens.push({
                    food,
                    quantity,
                    measure,
                    calories
                });

                await daily.save();
                break;
            case "lunch":
                daily.lunch.itens.push({
                    food,
                    quantity,
                    measure,
                    calories
                });

                await daily.save();
                break;
            case "afternoon_snack":
                daily.afternoon_snack.itens.push({
                    food,
                    quantity,
                    measure,
                    calories
                });

                await daily.save();
                break;
            case "dinner":
                daily.dinner.itens.push({
                    food,
                    quantity,
                    measure,
                    calories
                });

                await daily.save();
                break;
            case "supper":
                daily.supper.itens.push({
                    food,
                    quantity,
                    measure,
                    calories
                });

                await daily.save();
                break;
        }

        return daily;
    },
    async update({ meal, item, food, quantity, measure, calories, dailyId }){
        const daily = await Daily.findById(dailyId);
        const filtered = await mealController.findNullDataAndRemove({ food, quantity, measure, calories });

        switch (meal) {
            case "breakfast":
                let i = daily.breakfast.itens.id(item);
                let newItem = await mealController.replaceValues(i, filtered);
                i.set(newItem);

                await daily.save()                
                break;
            case "morning_snack":
                let i = daily.morning_snack.itens.id(item);
                let newItem = await mealController.replaceValues(i, filtered);
                i.set(newItem);

                await daily.save()                
                break;
            case "lunch":
                let i = daily.lunch.itens.id(item);
                let newItem = await mealController.replaceValues(i, filtered);
                i.set(newItem);

                await daily.save()                
                break;
            case "afternoon_snack":
                let i = daily.afternoon_snack.itens.id(item);
                let newItem = await mealController.replaceValues(i, filtered);
                i.set(newItem);

                await daily.save()                
                break;
            case "dinner":
                let i = daily.dinner.itens.id(item);
                let newItem = await mealController.replaceValues(i, filtered);
                i.set(newItem);

                await daily.save()                
                break;
            case "supper":
                let i = daily.supper.itens.id(item);
                let newItem = await mealController.replaceValues(i, filtered);
                i.set(newItem);

                await daily.save()                
                break;
        }

        return daily;
    },
    async destroy({ meal, item, dailyId }){
        const daily = await Daily.findById(dailyId);

        switch (meal) {
            case "breakfast":
                await daily.breakfast.itens.id(item).remove();
                await daily.save();
                break;
            case "morning_snack":
                await daily.morning_snack.itens.id(item).remove();
                await daily.save();
                break;
            case "lunch":
                await daily.lunch.itens.id(item).remove();
                await daily.save();
                break;
            case "afternoon_snack":
                await daily.afternoon_snack.itens.id(item).remove();
                await daily.save();
                break;
            case "dinner":
                await daily.dinner.itens.id(item).remove();
                await daily.save();
                break;
            case "supper":
                await daily.supper.itens.id(item).remove();
                await daily.save();
                break;
        }

        return daily;
    },
    findNullDataAndRemove(data) {
        let newData = {};

        Object.keys(data).map((key, index) => {
            if(data[key] != null || data[key] != undefined) newData[key] = data[key];
        });

        return newData;
    },
    replaceValues(item, values){

        Object.keys(values).map((key, index) => {
            item[key] = values[key];
        });

        return item;
    }
}

module.exports = mealController;