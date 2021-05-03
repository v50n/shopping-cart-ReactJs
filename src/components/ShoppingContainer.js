import CartDetail from "./CartDetail";
import '../css/ShoppingContainer.css';
import {useGetValShoppingCartContext} from '../Context';

const ShoppingContainer = () =>{
    const {listItems, totalPrice,clearAll} = useGetValShoppingCartContext();
    return (
        <div className="cart-container">
            <h1>Your bag</h1>
            <div className="cart-items">
            {
                listItems.map((item,index)=><CartDetail key={index} {...item} id={index} />)
            }
            </div>

            <hr/>
            <div className="total">
                <h3>Total</h3>
                <div className="price">${totalPrice}</div>
            </div>
            <button className="btn-clear" onClick={clearAll}>Clear Cart</button>
        </div>
    )
};

export default ShoppingContainer;