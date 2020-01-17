let user = require('./user');
const hobby = require('./hobby');

//测试正常加载的主外键
user.hasMany(hobby, {
    foreignKey: "user_id",
    sourceKey: "id"
});
hobby.belongsTo(user, {
    foreignKey: "user_id",
    targetKey:"id"
});

user.sync();
hobby.sync();
// setTimeout(() => {
    
// }, 1000);

// setTimeout(() => {
    //测试查询
    user.findAll({
        include: [{
            model: hobby,
            
        }],
        // attributes:["id","name",'hobby']
    }).then(res=>{
        console.log(res[0].dataValues);
    })
// }, 1000);