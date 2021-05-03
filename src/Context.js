import React, { useContext, useReducer, useEffect} from 'react';
import listItem from './data';
import reducerShoppingList from './reducer/Reducer';

const ShoppingCartContext = React.createContext();

const initialState = {
    totalProduct: listItem.reduce((total,item) =>{ return total + item.amount},0),
    totalPrice: listItem.reduce((total,item) =>{ return total + item.price*item.amount},0),
    listItems: listItem
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
    const clearAll = () =>{
        action({
            type: 'clearAll'
        })
    }
    const removeItem = (index) =>{
        action({
            type: 'removeItem',
            index
        })
    }
    useEffect(()=>{
        getTotalPrice();
        getTotalProduct()
    }, [state.listItems])
    return(
        <ShoppingCartContext.Provider value={{
            ...state,
            increment,
            getTotalProduct,
            getTotalPrice,
            clearAll,
            decrement,
            removeItem
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

// custom hook, make sure have useXXXXXXX
const useGetValShoppingCartContext = () =>{
    return useContext(ShoppingCartContext); 
}


export {AppProvider, ShoppingCartContext, useGetValShoppingCartContext};