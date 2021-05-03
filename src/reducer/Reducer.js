// const initialState = {
//   totalProduct: listItem.length,
//   totalPrice: 0,
//   listItems: listItem,
// }

export default function reducerShoppingList(state, action) {
  var newListItem;
  var totalProduct;
  var price;
    switch (action.type) {
      case 'increment':
        newListItem = state.listItems.map((item,index) => {
          if(index === parseInt(action.index)){
            return {...item, amount: item.amount+1}
          }
          return item
        })
        return {...state, listItems: newListItem};

      case 'decrement':
        newListItem = state.listItems.map((item,index) => {
          if(index === parseInt(action.index)){
            if(item.amount <= 1){
              return {...item, amount: 0}
            }
            return {...item, amount: item.amount-1}
          }
          return item
        }).filter((item) => item.amount > 0);
        return {...state, listItems: newListItem};

      case 'getTotalProduct': 
        totalProduct = state.listItems.reduce((total,item) =>{ return total + item.amount},0)
        return {...state, totalProduct: totalProduct}

      case 'getTotalPrice': 
        price = state.listItems.reduce((total,item) =>{ return total + item.price*item.amount},0).toFixed(2)
        return {...state, totalPrice: price }

      case 'clearAll': 
        return {
            totalProduct: 0,
            totalPrice: 0,
            listItems: [],
        }
      case 'removeItem' : 
        newListItem = state.listItems.filter((item,index) => {
          return index !== parseInt(action.index)
        })
        return {...state, listItems: newListItem};
      default:
        throw new Error("There is an error");
    }
}

