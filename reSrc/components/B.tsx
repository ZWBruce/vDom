import React from 'react';
import {connect} from '../n_m/connect';
const axios = require('axios');

function B(props:any){
    const {asyncAdd} = props;
    return (
        <div>
            B cmp
            <cite onClick={asyncAdd}>num:{props.num}</cite>
        </div>
    )
}

export default connect(function(state:any){return {...state}},function(dispatch:any){
    return {
        asyncAdd(){
            dispatch(async ()=>{
                let data = await axios.get('/getNum');
                console.log(data.data);
                dispatch({type:'add',value:data.data.num});
            })
        }
    }
})(B)