import {BsChevronUp, BsChevronDown} from 'react-icons/bs';
import '../css/CartDetail.css';

const CartDetail = () =>{
    return (
        <div className="cart-detail">
            <div className="product-img">
                <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png" alt="product"/>
            </div>
            <div className="product-detail">
                <div className="name">samsung AZAZE</div>
                <div className="price">$199</div>
                <button className="btn-remove-product">remove</button>
            </div>
            <div className="quantity">
                <button className="btn-increment"><BsChevronUp/></button>
                <div className="q">1</div>
                <button className="btn-decrement"><BsChevronDown/></button>
            </div>

        </div>
    )
}

export default CartDetail;