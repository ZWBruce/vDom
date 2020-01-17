import React from 'react';
import {Ctxt,Store} from './context';

interface P{
    children:any;
    value:{
        store:Store
    }
}
export function Provider(props:P){
    const {children, value} = props;
    return (
        <Ctxt.Provider value={value}>
            {children}
        </Ctxt.Provider>
    )
}