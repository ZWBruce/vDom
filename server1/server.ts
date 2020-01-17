const express = require('express');
const path = require('path');
const util = require('util');
const route1 = require('./route/route1');
// const expressGraphQL = require('express-graphql');
// const schema = require('./schema');
const {user,hobby }= require('./sql/sequelize');

let server = express();
server.listen(8080);
server.set('view engine','ejs');
server.set('views',path.resolve(__dirname,'../views'));
server.get('/',function(req:any,res:any){
    res.redirect(301,'/index');
})
server.get('/index',async function(req:any,res:any,next:any){
    res.render('index',{title:'首页',text:'这是首页'});
    next();
})
server.get('/test',async (req:any,res:any)=>{
    let data = await user.findOne({
        include:[{
            model:hobby,
            attributes:['hobby'],
            as:'hob'
        }]
    });
    res.send(data);
})
server.use('/index',route1);
server.use(route1);
// server.use('/query',expressGraphQL({
//     schema,
//     graphiql:true
// }))

let str='123455677';
str=str.replace(/\d+(?=\d{3})/,reg=>reg+',');
let len = str.split(',')[0].length;
if(len>3){
    str=str.replace(/\d+(?=\d{3})/,reg=>reg+',');
    len = str.split(',')[0].length;
}
console.log(str);


