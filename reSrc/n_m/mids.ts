import {Store} from './context';

export function log1(store:Store){
    return (next:any)=>
        //此函数返回值就相当于是dispatch;
        function(action:any){
            console.log('log1')
            return next(action);
        }
}

export function thunk(store:Store){
    return (next:any)=>
        function(action:any){
            const {getState,dispatch} = store;
            if(typeof action == 'function'){
                action(dispatch,getState);
            }else{
                return next(action);
            }
            
        }
    
}

export function log2(store:Store){
    return (next:any)=>
        //此函222;
        function(action:any){
            console.log('log2')
            return next(action);
        }
}