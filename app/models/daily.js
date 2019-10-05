const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    food: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    measure: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Item = mongoose.model('Item', ItemSchema);

const BreakfastSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Café da Manhã'
    },
    itens: [ItemSchema]
});

const MorningSnackSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Lanche da Manhã'
    },
    itens: [ItemSchema]
});

const LunchSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Almoço'
    },
    itens: [ItemSchema]
});

const AfternoonSnackSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Lanche da Tarde'
    },
    itens: [ItemSchema]
});

const DinnerSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Jantar'
    },
    itens: [ItemSchema]
});

const SupperSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Ceia'
    },
    itens: [ItemSchema]
});


const Breakfast = mongoose.model('Breakfast', BreakfastSchema);
const MorningSnack = mongoose.model('MorningSnack', MorningSnackSchema);
const Lunch = mongoose.model('Lunch', LunchSchema);
const AfternoonSnack = mongoose.model('AfternoonSnack', AfternoonSnackSchema);
const Dinner = mongoose.model('Dinner', DinnerSchema);
const Supper = mongoose.model('Supper', SupperSchema);

const DailySchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    breakfast: BreakfastSchema,
    morning_snack: MorningSnackSchema,
    lunch: LunchSchema,
    afternoon_snack: AfternoonSnackSchema,
    dinner: DinnerSchema,
    supper: SupperSchema,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Daily = mongoose.model('Daily', DailySchema);

module.exports = Daily;