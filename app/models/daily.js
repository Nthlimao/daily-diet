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
        default: 'Café da Manhã'
    },
    itens: [ItemSchema]
});


const Breakfast = mongoose.model('Breakfast', BreakfastSchema);
const MorningSnack = mongoose.model('MorningSnack', MorningSnackSchema);

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
    morning_snack: new mongoose.Schema({
        title: {
            type: String,
            default: 'Lanche da Manhã'
        },
        itens: [ItemSchema]
    }),
    lunch: new mongoose.Schema({
        title: {
            type: String,
            default: 'Almoço'
        },
        itens: [ItemSchema]
    }),
    afternoon_snack: new mongoose.Schema({
        title: {
            type: String,
            default: 'Lanche da Tarde'
        },
        itens: [ItemSchema]
    }),
    dinner: new mongoose.Schema({
        title: {
            type: String,
            default: 'Jantar'
        },
        itens: [ItemSchema]
    }),
    supper: new mongoose.Schema({
        title: {
            type: String,
            default: 'Ceia'
        },
        itens: [ItemSchema]
    }),
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Daily = mongoose.model('Daily', DailySchema);

module.exports = Daily;