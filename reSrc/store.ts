import createStore,{act} from './n_m/redux';

function reducer(state:any,action:act){
    const {type,value} = action;
    console.log('%creducer','color:#f44')
    switch(type){
        case 'add':
            let step;
            if(value){step = parseInt(value)}else step=1;
            console.log('add');
            return {...state,num:state.num+step};
        default: 
            return {num:0};
    }
}

export default createStore(reducer);