import '../navbar';
import './bg.scss';
import Mock from 'mockjs';

let obj = {name:'a',age:18};
type ob = {name:string,age:number,[a:string]:any}
let p:ob = new Proxy(obj,{
    get(tar:ob,key:string,value){
        if(key in tar){
            return tar[key];
        }else{
            return 'no such key'
        }
    },
    set(tar,key:string,val){
        if(key in tar){
            tar[key] = val;
            return true;
        }else{
            return true;
        }
    },
    has(tar,key){
        if(key == 'age'){
            return false;
        }
        return key in tar;
    }
})
p.a='f';
p.age=25;


let obj1={name:'12a'};
let value = obj1['name']
Object.defineProperty(obj1,'name',{
    get(){
        return value;
    },
    set(val){
        if(val != value){
            value = val;
        }
    },enumerable:true,configurable:true
})
obj1.name = 'c';

let ele:HTMLElement | null = document.getElementById('blur-txt');
let inputFile = <HTMLElement>document.querySelector('input[type=file]');
if(ele){
    ele.onclick=function(){
        inputFile.click();
    }
}

let landIn = document.getElementById('landIn') as HTMLElement;
let t = landIn?.innerText;
let tArr = t?.split('');
let html = '';
tArr?.forEach((t,i)=>{
    html+=`<span style='animation-delay:${i*0.1}s'>${t}</span>`
})
landIn.innerHTML = html;

function debounce(fn:Function,delay:number){
    let timer:any = null;
    return function(...args:any[]){
        if(timer){clearTimeout(timer)}
        timer = setTimeout(()=>{
            //@ts-ignore
            fn.apply(this,args);
            timer = null;
        },delay);
    }
};

function throttle(fn:Function,delay:number){
    let timer:any = null;
    return function(...args:any[]){
        if(timer) return;
        timer = setTimeout(()=>{
            //@ts-ignore
            fn.apply(this,args);
            timer = null;
        },delay)
    }
}

let NodeArr:any[] = Array.from(document.querySelectorAll('*'));
let NodeArr1 = NodeArr.map(t=>t.nodeName);
let s = new Set(NodeArr1);

let obj11:any = {};
NodeArr = [...s].map(t=>{
    obj11[t] = 0;
    return obj;
});


NodeArr1.forEach(t=>{
    obj11[t]++;
})

let arr = [];
for(let e in obj11){
    let o:any = {};
    o.tagName = e;
    o.value = obj11[e];
    arr.push(o);
}
arr = arr.sort((a,b)=>{
    return - a.value + b.value;
})
arr.slice(0,3).forEach(t=>{
    // console.log('%c'+t.tagName,'background:#0f0');
})

function fn(modules:any){
    let installedModules:any = {};
    function require(moduleName:string){
        if(installedModules[moduleName]) return installedModules.exports;

        let module = installedModules[moduleName] = {exports:{}}

        modules[moduleName](module,module.exports,require);
    }
}

function Find(target:number, array:number[][])
{
    // write code here
    let m = array[0].length;
    let n = array.length;
    if(m === 0 && n === 0) return false;
    let y = m - 1;
    let x = 0;
    // console.log(array[x][y]);return ;
    while(y >= 0 && x < n){
        if(array[x][y] < target){
            x++;
        }else if(array[x][y] > target){
            y--;
        }else{
            return true;
        }
    }
    return false;
}

let arrr = [[1,2,3],[4,5,6],[7,8,9],[10,12,13]];
