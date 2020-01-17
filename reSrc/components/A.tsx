import React,{useEffect} from 'react';
import { connect } from '../n_m/connect';
const axios = require('axios');
import './a.scss';

function A(props:any){
    const {num,add} = props;
    useEffect(()=>{
        function run(gen:Generator){
            return new Promise((resolve,reject)=>{
                function next(data?:any){
                    let res = gen.next(data);
                    if(res.done) return resolve(res.value);
                    console.log(res)
                    let value = toPromise(res.value); //每个axios请求返回的都是promise对象
                    value.then((da:any)=>{next(da)}).catch(reject)
                }
                next();
            })
        }
        
        function toPromise(fn:any ){
            if(typeof fn.then === 'function') return fn;
            if(typeof fn === 'object') return fn;
            return new Promise((res,rej)=>{
                fn(res,rej);
            })
        }
        
        function* getNames(){
            let name1 = yield axios.get('/api/getName');
            let name2 = yield axios.get('/api/getName');
            let name3 = yield axios.get('/api/getName');
            console.log('','',name1.data.name,name2.data.name,name3.data.name);
        }
        run(getNames())
    },[])
    return (
        <div>
            <h1 onClick={add}>{num}</h1>
            <div id="con">
                <div className='loading'></div>
                <div className='loading'></div>
                <div className='loading'></div>
                <div className='loading'></div>
                <div className='loading'></div>
            </div>
            <div className='demo'>
                <div className='text'>
                同步并网系统; 厂区供水节电系统; 如糖元合成酶; 糖原合成酶; 高速烧嘴;
                同步并网系统; 厂区供水节电系统; 如糖元合成酶; 糖原合成酶; 高速烧嘴;
                同步并网系统; 厂区供水节电系统; 如糖元合成酶; 糖原合成酶; 高速烧嘴;
                同步并网系统; 厂区供水节电系统; 如糖元合成酶; 糖原合成酶; 高速烧嘴;
                同步并网系统; 厂区供水节电系统; 如糖元合成酶; 糖原合成酶; 高速烧嘴;
                </div>
            </div>
        </div>
    )
}
export default connect(function(state:any){
    return {...state}
},function(dispatch:Function){
    return {
        add(){
            dispatch({type:'add'});
        }
    }
})(A);