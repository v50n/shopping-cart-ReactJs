import CartDetail from "./CartDetail";
import '../css/ShoppingContainer.css';

const ShoppingContainer = () =>{
    return (
        <div className="cart-container">
            <h1>Your bag</h1>
            <div className="cart-items">
                <CartDetail />
                <CartDetail />
                <CartDetail />
            </div>

            <hr/>
            <div className="total">
                <h3>Total</h3>
                <div className="price">$23234</div>
            </div>
            <button className="btn-clear">Clear Cart</button>
        </div>
    )
};

export default ShoppingContainer;