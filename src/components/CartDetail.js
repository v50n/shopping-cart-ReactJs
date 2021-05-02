import {BsChevronUp, BsChevronDown} from 'react-icons/bs';
import '../css/CartDetail.css';
import { GetValShoppingCartContext } from '../Context';

const CartDetail = ({id,title,price,img,amount}) =>{
    const {increment, getTotalProduct,getTotalPrice} = GetValShoppingCartContext();
    const handleIncrement = (e) =>{
        increment(e.target.parentNode.parentNode.parentNode.id);
        getTotalProduct();
        getTotalPrice();
    }
    

    return (
        <div className="cart-detail" id={id}>
            <div className="product-img">
                <img src={img} alt="product"/>
            </div>
            <div className="product-detail">
                <div className="name">{title}</div>
                <div className="price">${price}</div>
                <button className="btn-remove-product">remove</button>
            </div>
            <div className="quantity" >
                <div><BsChevronUp onClick={handleIncrement} className="btn-increment"/></div>
                <div className="q">{amount}</div>
                <div><BsChevronDown className="btn-decrement" /></div>
            </div>

        </div>
    )
}

export default CartDetail;