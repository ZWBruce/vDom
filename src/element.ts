class myElement{
    children: any[];
    props:any;
    type:string = 'div';
    constructor(type:string,props:any,children:any[]){
        this.type=type;
        this.props=props;
        this.children=children;
    }
    render(){
        let el = document.createElement(this.type);
    
        this.setAttr(el);
        //遍历children，如果是html元素的实例，递归，否则是文本节点
        this.children.forEach(t=>{
            let child;
            if(t instanceof HTMLElement){
                child = t;
            }else{
                child = document.createTextNode(t);
            }
            
            el.appendChild(child);
        })
        return el;
    }
    setAttr(el:any){
        for(let k in this.props){
            switch(k){
                case 'value':
                    if(this.type == 'input' || this.type == 'textarea'){
                        el.value=this.props[k];
                    };break;
                case 'style':
                    el.style=this.props[k];break;
                default:
                    el.setAttribute(k,this.props[k]);break;
            }
        }
    }
    
}

function createElement(type:string,props:any,children:any){
    return new myElement(type,props,children).render();
}
export function renderDom(con:Element|HTMLElement,el:any){
    con.appendChild(el);
    // con.innerHTML = el;
}
export default createElement;