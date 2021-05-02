import React, {useState, useContext, useReducer} from 'react';
import listItem from './data';
import reducerShoppingList from './reducer/Reducer';

const ShoppingCartContext = React.createContext();

const initialState = {
    totalProduct: listItem.reduce((total,item) =>{ return total + item.amount},0),
    totalPrice: listItem.reduce((total,item) =>{ return total + item.price*item.amount},0),
    listItems: listItem,
}

const AppProvider = ({children}) => {

    const [state,action] = useReducer(reducerShoppingList,initialState);
    const increment = (index) =>{
        action({
            type: 'increment',
            index
        })
    }
    const decrement = (index) =>{
        action({
            type: 'decrement',
            index
        })
    }
    const getTotalProduct = () =>{
        action({
            type: 'getTotalProduct'
        })
    }
    const getTotalPrice = () =>{
        action({
            type: 'getTotalPrice'
        })
    }
    return(
        <ShoppingCartContext.Provider value={{
            ...state,
            increment,
            getTotalProduct,
            getTotalPrice
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
const GetValShoppingCartContext = () =>{
    return useContext(ShoppingCartContext);
}


export {AppProvider, GetValShoppingCartContext};