import React,{ createContext ,useEffect,useReducer} from 'react'
import Contextcart from './contextcart'
import "./Cart.css"
import Data from "./Product"
import reducer from './reducer'

export const Cart_items = createContext();
 const initialState={
     items:Data,
     totalamount:0,
     totalitems:0
 }


const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const removeItems=(id)=>{
    return dispatch( {
    type:"REMOVE-ITEMS",
    payload:id,

})
    }

    const clear=()=>{
        return dispatch( {
            type:"CLEAR-CART"
        
        });
    }

    const add= (id) =>{
        return dispatch({
            type : "ADDITION",
            payload : id
        })
    }
   
    const minus= (id) =>{
        return dispatch({
            type : "SUBSTRACTION",
            payload : id
        })
    }

    useEffect(()=>{
        dispatch({type:"GET-TOTAL"})
     
    },[state.items])
 
    return (
        <>
         <Cart_items.Provider  value={{...state,removeItems,clear,add,minus}}>  
            <Contextcart/>
         </Cart_items.Provider> 
        </>
    )
}

export default Cart;
