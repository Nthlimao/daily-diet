require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const mongoose = require('mongoose');

// DATABASE
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    }
);

mongoose.set('useCreateIndex', true);

// SERVER
const resolvers = require('../graphql/resolvers');
const typeDefs = path.resolve(__dirname, '../graphql/schema.graphql');
const middlewares = require('../graphql/middlewares');

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req => ({ ...req }),
    middlewares: [middlewares],
});

server.start();