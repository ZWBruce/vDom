import './i.scss';
import '../navbar';
let con:HTMLElement=document.querySelector('#con') as HTMLElement;
let items = document.querySelectorAll('#con .item');
let first:number = 0;
function randomColor(){
    let r = ~~(Math.random()*255);
    let g = ~~(Math.random()*255);
    let b = ~~(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
let itemsArr:any[] = Array.from(items);
let length = itemsArr.length;
let height = itemsArr[0].offsetHeight;
itemsArr.forEach((it:any,ind)=>{
    it.style.background = randomColor();
    it.innerHTML = ind;
    if(ind == 0){
        it.classList.add('first');
    }else if(ind == length - 1 ){
        it.classList.add('last');
    }
})
function load(start:number=0){
    
    //@ts-ignore
    con.style.paddingTop = `${start*height}px`;
    itemsArr.forEach((it:any,ind)=>{
        it.innerHTML = ind + start;
    })
}

Array.from(items).forEach(it=>{
    let observer = new IntersectionObserver(t=>{
        t.forEach(item=>{
            if(item.isIntersecting && it.classList.contains('first')){
                console.log('first: ',item.target.innerHTML);
                if(first>=length/2){
                    first -= length/2;
                    load(first);
                }
                
            }else if(item.isIntersecting && it.classList.contains('last')){
                console.log('last: ',item.target.innerHTML);
                first += length/2;
                if(first >= 10000) return ;
                load(first);
            }
        })
    })
    observer.observe(it);
})

let timer:any;
let outTop = document.getElementById('out-con')?.scrollTop || 0;
window.onscroll = function(){
    if(timer) {clearTimeout(timer);}
    timer = setTimeout(()=>{
        let docTop = document.documentElement.scrollTop;
        let n = Math.floor((docTop + document.documentElement.clientHeight - outTop + 200)/200/10)*10 - 10;
        n>=0? load(n) : load(0);
        console.log(n);
        timer = null;
    },30);
}

let state:any
function myUseState<T>(initialState: T): [any, (newState: T) => void] {
    state = initialState;

    function setState(newState: T) {
        state = newState;
        console.log(state)
    }

    function getState(){return state;}
    return [getState, setState];
}
let [a,setA] = myUseState({name:'a'});
let [b,setB] = myUseState({name:'b'})
setA({name:'a1'});setB({name:'b1'});
console.log(a(),b());
