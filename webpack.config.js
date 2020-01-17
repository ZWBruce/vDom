const path = require('path');
const HtlmWP = require('html-webpack-plugin');

console.log(process.env.NODE_ENV);
let cfg = {
    entry:{
        build:'./src/app.ts',
        pullDown:'./src/infinitePullDown/i.ts',
        bg:'./src/bg/bg.ts',
        re:'./reIndex.tsx'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    }

};

let cfg1 = {
    entry:'./server1/server.ts',
    output:{
        path:path.resolve(__dirname,'ser1'),
        filename:'server.js'
    }
}
config = cfg;
// console.log(process.argv)
if(process.argv[2] && process.argv[2].slice(2) == 'server'){
    config = cfg1;
}


module.exports={
    mode:'development',
    ...config,
    module:{
        rules:[
            {
                test:/\.[jt]sx?$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-react','@babel/preset-env'],
                            plugins: ["@babel/plugin-transform-runtime"]
                        },
                        
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.tsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'ts-loader'
                }
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            
        ]
    },
    devServer:{
        disableHostCheck: true
    },
    resolve:{
        extensions:['.js','.ts','.jsx','.tsx']
    },
    plugins:[
        new HtlmWP({
            filename:'pullDown.html',
            template:path.resolve(__dirname,'pullDown.html')
        }),
        new HtlmWP({
            filename:'index.html',
            template:path.resolve(__dirname,'index.html')
        }),
        new HtlmWP({
            // filename:'index.html',
            template:path.resolve(__dirname,'bg.html')
        }),
        new HtlmWP({
            template:path.resolve(__dirname,'reIndex.html')
        })
    ]
}