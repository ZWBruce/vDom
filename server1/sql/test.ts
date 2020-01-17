let user2 = require('./user');
const hobby2 = require('./hobby');

//测试正常加载的主外键
user2.hasMany(hobby2, {
    foreignKey: "user_id",
    sourceKey: "id"
});
hobby2.belongsTo(user2, {
    foreignKey: "user_id",
    targetKey:"id"
});

user2.sync();
hobby2.sync();
// setTimeout(() => {
    
// }, 1000);

// setTimeout(() => {
    //测试查询
    user2.findAll({
        include: [{
            model: hobby2,
            
        }],
        // attributes:["id","name",'hobby']
    }).then((res:any)=>{
        console.log(res[0].dataValues);
    })
// }, 1000);