// const initialState = {
//   totalProduct: listItem.length,
//   totalPrice: 0,
//   listItems: listItem,
// }

export default function reducerShoppingList(state, action) {
  var newListItem;
    switch (action.type) {
      case 'increment':
        newListItem = state.listItems.map((item,index) => {
          if(index === parseInt(action.index)){
            return {...item, amount: item.amount+1}
          }
          return item
        })
        //var total = newListItem.reduce((total,item) =>{ return total + item.amount},0)
        return {...state, listItems: newListItem};
      case 'decrement':
        return {count: state.count - 1};
      case 'remove_all': // for the case of remove only 1 product, we will update with useState in ShoppingContainer
        return { count: 0};
      case 'getTotalProduct': 
        var total = state.listItems.reduce((total,item) =>{ return total + item.amount},0)
        return {...state, totalProduct:total }
      case 'getTotalPrice': 
        var price = state.listItems.reduce((total,item) =>{ return total + item.price*item.amount},0)
        return {...state, totalPrice: price }
      default:
        throw new Error();
    }
}

