// const Sequelize = require('sequelize');
// const {INTEGER,STRING} = Sequelize;

const seq1 = new Sequelize('myDb','root','root',{
    host:'localhost',
    port:'8889',
    dialect:'mysql',
    define:{
        timestamps:false
    }
})

// module.exports = seq;

const user3 = seq1.define('user',{
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

const hobby3 = seq1.define('hobby',{
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


user3.hasMany(hobby3,{
    foreignKey:'user_id',
    sourceKey:'id',
    constraints: false,
    as:'hob'
})
hobby3.belongsTo(user3,{
    foreignKey:'user_id',
    targetKey:'id',
    constraints: false,
    
})
// user.sync();
// hobby.sync();
// seq.sync();



module.exports = {user3,hobby3};