
let root:any = (typeof self === 'object' && self.self === self && self) || 
(typeof global === 'object' && global.global === global && global) || this || {};

let _:any = function(this:any, obj:any){
    //@ts-ignore
    if(!(this instanceof _)) return new _(obj);
    //@ts-ignore
    this.wrapped = obj;
}

function getFns(obj:any){
    let fns = [];
    for(let k in obj){
        if(typeof obj[k] === 'function') fns.push(k)
    }
    return fns;
}

_.chanin = function(obj:any){
    let instance = _(obj);
    instance._chain = true;
    return instance;
}

function packChanin(instance:any,obj:any){
    return instance._chain?_(obj):obj;
}

_.mixin = function(obj:any){
    let fns = getFns(obj);
    fns.forEach(t=>{
        _.prototype[t] = function(...args:any[]){
            return packChanin(this,obj[t].apply(this,this.wrapped.concat(args)));
        }
    })
    return _;
}

_.mixin(_);  //将_上的方法复制到_.prototype上
root._ = _;

export default root;
