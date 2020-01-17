const Sequelize = require('sequelize');
const seq = require('./db')
const {INTEGER,STRING} = Sequelize;

const user = seq.define('user',{
    id: {
        type: INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
    },
    name: {
        type: STRING,
        allowNull:false
    },
    addr: {
        type: STRING,
        allowNull:false
    },
    age: {
        type:INTEGER
    }

},{
    freezeTableName: true,
    timestamps:false
});

module.exports = user;
