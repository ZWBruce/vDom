import React,{useContext,useState,useEffect} from 'react';
import { Ctxt } from './context';

export function connect(mapStateToProps:any,mapDispatchToProps:any){
    return function(Cmp:any){
        return function(props:any){
            const ctxt:any = useContext(Ctxt);
            const {getState,dispatch,subscribe} = ctxt.store;
            const state = getState();
            const [f,setF] = useState(false);
            
            useEffect(()=>{
                let un = subscribe(()=>{setF(!f)});
                return un;
            })
            return (
                <Cmp {...mapStateToProps(state)}
                     {...mapDispatchToProps(dispatch)}
                     {...props} 
                />
            )
        }
    }
}