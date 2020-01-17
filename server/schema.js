const {
    GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLID,GraphQLList,GraphQLInt
} = require('graphql');
const {user,hobby }= require('./sql/sequelize');


const hobbyType = new GraphQLObjectType({
    name:'hobb',
    
    fields:{
        hobby:{
            type:GraphQLString
        }
    }
})
const userType =new GraphQLObjectType({
    name:'us',
    fields:{
        name:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        hob:{
            type:GraphQLList(GraphQLString)
        }
    }
})
const queryObj = new GraphQLObjectType({
    name:'graphqlQuery',
    fields:{
        id:{
            type:GraphQLID
        },
        user:{
            type:GraphQLList(userType)
        }
    }
})

const aa={
    type:queryObj,//查询返回结果的类型
    args:{},//查询参数
    async resolve(root,args,contxt){
        let data = await user.findAll({
            include:[{
                model:hobby,
                attributes:['hobby'],
                as:'hob'
            }]
        });
        data = data.map(it=>{
            it.hob = it.hob.map(t=>{
                return t.hobby;
            })
            return it;
        })
        return {
            id:233,
            height:'233cm',
            weight:'233kg',
            user:data
        }
    }
}

module.exports=new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'test',
        fields:{
            aa
        }
    })
})