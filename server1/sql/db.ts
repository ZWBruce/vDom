const Sequelize = require('sequelize');

const seq = new Sequelize('myDb','root','root',{
    host:'localhost',
    port:'8889',
    dialect:'mysql',
    define:{
        timestamps:false
    }
})

module.exports = seq;