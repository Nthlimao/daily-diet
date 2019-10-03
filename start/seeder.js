require('dotenv').config();

const mongoose = require('mongoose');
const database = require('../database/seeds/databaseSeeder');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

const seeder = async () => {
    await database.run();
    mongoose.disconnect();
}

seeder();

