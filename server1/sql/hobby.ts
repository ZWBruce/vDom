// const Sequelize = require('sequelize');
// const seq = require('./db')
const {INTEGER,STRING} = Sequelize;

const hobby4 = seq.define('hobby',{
    id: {
        type: INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
    },
    user_id: {
        type: INTEGER,
        allowNull:false
    },
    hobby: {
        type: STRING,
        allowNull:false
    }

},{
    freezeTableName: true,
    timestamps:false
});

module.exports = hobby4;