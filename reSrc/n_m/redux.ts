export type act = {type:string,value?:any}
function createStore(reducer:any){
    let curState = {};
    let fns:Function[] = [];
    function getState(){
        return curState;
    }
    function dispatch(action:act){
        curState = reducer(curState, action);
        fns.forEach(it=>{
            it();
        })
    }
    function subscribe(fn:Function){
        fns.push(fn);
        return function(){
            fns = fns.filter(t=>t!=fn);
        }
    }
    dispatch({type:'@@@INIT'});
    return {getState,dispatch,subscribe};
}

export default createStore;