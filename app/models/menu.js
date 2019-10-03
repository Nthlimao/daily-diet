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

const MenuSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal'
    },
    itens: [ItemSchema],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = {
    Menu,
    Item
}