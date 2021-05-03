import {BsChevronUp, BsChevronDown} from 'react-icons/bs';
import '../css/CartDetail.css';
import { useGetValShoppingCartContext } from '../Context';

const CartDetail = ({id,title,price,img,amount}) =>{
    const {increment,decrement,removeItem} = useGetValShoppingCartContext();

    return (
        <div className="cart-detail" id={id}>
            <div className="product-img">
                <img src={img} alt="product"/>
            </div>
            <div className="product-detail">
                <div className="name">{title}</div>
                <div className="price">${price}</div>
                <button className="btn-remove-product" onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="quantity" >
                <div><BsChevronUp onClick={() => increment(id)} className="btn-increment"/></div>
                <div className="q">{amount}</div>
                <div><BsChevronDown onClick={() => decrement(id)} className="btn-decrement" /></div>
            </div>

        </div>
    )
}

export default CartDetail;