import createEle,{renderDom} from  './element';
// import Axios from 'axios';
import './navbar';
import './app.scss';
const Axios = require('axios')
let Mock = require('mockjs');
Mock.mock('/api/getName',{
    'user':/\w{5,8}/
});
let myCon = createEle('div',{style:'background:#ace'},[]);
let myList = createEle('ul',{class:'list'},[
    createEle('li',{class:'item'},['aa']),
    createEle('li',{class:'item'},['bb']),
    createEle('li',{class:'item'},['cc'])
])
myCon.appendChild(myList);
window.onload=function(){
    console.log(myList);
    renderDom(<HTMLElement>document.getElementById('app'),myCon);
    let btn = <HTMLElement>document.getElementById('btn');
    //复制粘贴
    let copy2Clipboard=(content:string)=>{
        let dom = document.createElement('input');
        dom.value = content;
        dom.style.visibility = 'hidden';
        document.body.appendChild(dom);
        dom.select();
        document.execCommand('copy');
        document.body.removeChild(dom);
        alert('复制成功');
    }
    let url = location.href;
    // btn.onclick = ()=>{copy2Clipboard(url)};
    function getCopy(){
        //@ts-ignore
        navigator.permissions.query({name:'clipboard-write'}).then(res=>{
            console.log(res);
            if(res.state === 'granted'){
                console.log('允许');
                navigator.clipboard.writeText('clip content').then(res=>{
                    console.log('成功拷贝');
                },err=>{
                    console.log('拷贝失败');
                })
            }else if(res.state === 'prompt'){
                console.log('询问')
            }else if(res.state === 'denied'){
                console.log('拒绝')
            }
        })
    }
    btn.onclick = ()=>{getCopy()}
    function doPaste(e:Event){
        e.preventDefault();
        //@ts-ignore
        navigator.permissions.query({name:'clipboard-read'}).then(res=>{
            if(res.state === 'granted'){
                console.log('允许');
                navigator.clipboard.readText().then(res=>{
                    console.log('待复制的文本',res);
                },err=>{
                    console.log('复制失败',err);
                })
            }else if(res.state === 'prompt'){
                console.log('询问')
            }else if(res.state === 'denied'){
                console.log('拒绝')
            }
        })
    }
    this.document.addEventListener('paste',doPaste);

    function delay(){
        return Axios.get('/api/getName');
    }
    async function fn(){
        let data = await delay();
        console.log('timeout 的输出',data);
        return 'fuuuu';
    }
    console.log(fn());
}

