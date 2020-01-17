import {Store} from './context';

function compose(fns:Function[]){
    return fns.reduce((pre,cur,ind)=>{
        return function(init:any){
            return cur(pre(init))
        }
    })
}
export default function(store:Store,mids:any[]){
    let {getState,dispatch} = store;
    const params = {getState,dispatch:(action:any) => dispatch(action)}
    let ms = [...mids];
    ms = ms.reverse().map(m=>{
        return m(params);
    })
    dispatch = compose(ms)(dispatch);
    return {...store,dispatch};
}

