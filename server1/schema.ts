// import {
//     GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLID,GraphQLList
// } from 'graphql';
// const userType =new GraphQLObjectType({
//     name:'us',
//     fields:{
//         name:{
//             type:GraphQLString
//         },
//         hobby:{
//             type:GraphQLList(GraphQLString)
//         }
//     }
// })
// const queryObj = new GraphQLObjectType({
//     name:'graphqlQuery',
//     fields:{
//         id:{
//             type:GraphQLID
//         },
//         user:{
//             type:GraphQLList(userType)
//         }
//     }
// })

// const aa={
//     type:queryObj,//查询返回结果的类型
//     args:{},//查询参数
//     resolve(root:any,args:any,contxt:any){
//         return {
//             id:233,
//             height:'233cm',
//             weight:'233kg',
            
//             address:'北京市',
//             user:[
//                 {name:'川ㅍㅍ川←三笠',
//                 hobby:['sing','dance','rap']},
//                 {name:'呗',
//                 hobby:['eat','sing']}
//             ]
//         }
//     }
// }

// export default new GraphQLSchema({
//     query:new GraphQLObjectType({
//         name:'test',
//         fields:{
//             aa
//         }
//     })
// })