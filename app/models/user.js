const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const HeightSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Height = mongoose.model('Height', HeightSchema);

const WeightSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Weight = mongoose.model('Weight', WeightSchema);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true, 
        required: true,
        lowercase: true,
    },
    cpf: {
        type: String,
        unique: true, 
        required: true, 
    },
    dateOfBirth: {
        type: Date,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    photo: {
        type: String,
    },
    heights: [HeightSchema],
    weights: [WeightSchema],
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    Height,
    Weight,
    User,
}