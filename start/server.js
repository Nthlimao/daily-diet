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
const resolvers = require('../app/graphql/resolvers');
const typeDefs = path.resolve(__dirname, '../app/graphql/schema.graphql');
const middlewares = require('../app/graphql/middlewares');

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req => ({ ...req }),
    middlewares: [middlewares],
});

server.start();