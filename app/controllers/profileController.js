const User = require('../models/user');
const bcrypt = require('bcryptjs');

const ProfileController = {
    async show({ id }){
       return await User.findById(id);
    },
    async update({ id, name, cpf, email, dateOfBirth}){
        const filtered = ProfileController.findNullDataAndRemove({ name, cpf, email, dateOfBirth });
        return await User.findByIdAndUpdate(id, filtered, { new: true });
    },
    async updatePassword({ id, password, confirmPassword }){
        if(password !== confirmPassword)
            throw new Error('invalida passwords');

        const newPassword = await bcrypt.hash(password, 10);

        return await User.findByIdAndUpdate(id, { password: newPassword }, { new: true });
    },
    async updateWeight({ id, weight }){
        const user = await User.findById(id);

        user.weights.push({
            value: weight
        });

        await user.save()
        return user;
    },
    async updateHeight({ id, height }){
        const user = await User.findById(id);

        user.heights.push({
            value: height
        });

        await user.save()
        return user;
    },
    findNullDataAndRemove(data) {
        let newData = {};

        Object.keys(data).map((key, index) => {
            if(data[key] != null || data[key] != undefined) newData[key] = data[key];
        });

        return newData;
    },
}

module.exports = ProfileController;