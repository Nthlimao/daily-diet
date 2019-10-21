const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const moment = require('moment');

module.exports = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
        return moment(value);
    },
    serialize(value){
        return moment(value).toDate();
    },
    parseLiteral(ast) {
        if(ast.kind = Kind.INT) {
            return moment(ast.value);
        }
        return null;
    }
});