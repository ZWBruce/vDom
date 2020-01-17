
let navbar = <HTMLElement>document.querySelector('#nav');
let route = [
    {name:'index',path:'/index.html'},
    {name:'pullDown',path:'/pullDown.html'},
    {name:'bg',path:'/bg.html'},
    {name:'re',path:'/reIndex.html'},
    {name:'tt',path:'/tt.html'},
]
let curPath = window.location.pathname;
let html = '';
route.forEach(t=>{
    if(curPath != t.path){
        html += `<a href="${t.path}">${t.name}</a>`
    }else{
        html += `<a>${t.name}</a>`
    }
})
navbar.innerHTML = html;
