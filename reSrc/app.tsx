import React,{useEffect} from 'react';
import { render } from 'react-dom';
import Mock from 'mockjs';
import { Provider } from './n_m/Provider';
import {thunk,log1,log2} from './n_m/mids';
import applyMiddleware from './n_m/applyMiddleware';
import underscore from './n_m/undersore';
import store from './store';
import A from './components/A';
import B from './components/B';
import {Mouse, Cat} from './components/Mouse';

console.log('underscore++++',underscore._({a:'a'}))
let states:any[] = [];
let cursor = 0;
function myUseState<T>(initialState: T): [T, (newState: T) => void] {
    states[cursor] = states[cursor] || initialState;
    const CUR = cursor;
    console.log('当前下标',CUR);
    cursor++;
    function setState(newState: T) {
        states[CUR] = newState;
        render1();
    }

    return [states[CUR], setState];
}
console.log('%cout cmp','color:orange')

function myEffect(cb:Function,deps:any[]){
    const CUR = cursor;
    if(!states[cursor]){
        states[cursor] = deps;
        cb();
        cursor++;
        return ;
    }
    let isChanged = states[CUR].some((t:any,i:number)=>t !== deps[i]);
    if(isChanged){
        cb();
    }
    cursor++;
}

function render1(){
    cursor = 0;
    render(<App />,document.getElementById('app'));
}

export function App(){

    let w = new Worker('/reSrc/worker.ts');
    w.onmessage=function(e){
        console.log(e.data)
    }

    let [a,setA] = myUseState(1);
    let [b,setB] = myUseState(10);
    console.log(a,b);
    function fn(){
        setA(++a);setB(++b);
    }
    myEffect(()=>{
        console.log('%c'+a,'background:skyblue')
    },[a])
    Mock.mock('/api/getName',{
        name:/\w{1,5}/
    })
    Mock.mock('/getNum',{
        num:/\d/
    })
    let s = applyMiddleware(store,[log1,thunk,log2]);

    
    useEffect(()=>{
        function getN(n:number){
            if(n%2 != 1) return false;
            if(n%3 != 2) return false;
            if(n%5 != 4) return false;
            if(n%6 != 5) return false;
            if(n%7 != 0) return false;
            return true;
        }
        let n = 0;
        while(!getN(n)){
            n++;
        }
        console.log(n);

        let arrM = ['push','pop','shift','unshift','sort','reverse','splice'];
        let arrAug:Record<string,any> = {};
        let pro = Array.prototype;
        arrM.forEach((t:string)=>{
            //@ts-ignore
            let original = pro[t];
            //@ts-ignore
            arrAug[t] = function(...args){
                console.log('更改后的方法');
                return original.apply(this,args);
            }
        })

        let arr = ['a','b','c','d'];
        //@ts-ignore
        arr.__proto__ = arrAug;
        
        // arr.push('333');

    },[])
    return (
        <Provider value={{store:s}}>
            <div>111222
                <A />
                <B />
                <Mouse render={(pos:{x:number,y:number})=><Cat {...pos} />} />
            </div>
            <button onClick={fn}>111</button>
        </Provider>
    )
}