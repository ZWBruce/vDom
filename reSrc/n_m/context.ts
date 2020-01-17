import { createContext } from 'react';

type ctx = {
    store:Store
}
export interface Store{
    getState:Function;
    dispatch:Function;
    subscribe:Function;
}
//@ts-ignore
export const Ctxt = createContext<ctx>({});