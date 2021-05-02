import {GiShoppingCart} from 'react-icons/gi';
import '../css/navbar.css';
import { GetValShoppingCartContext } from '../Context';

const Navbar = () => {
    const {totalProduct} = GetValShoppingCartContext();
    return (
        <nav>
            <div className="logo">
                Great Ecommerce
            </div>
            <div className="panier">
                <GiShoppingCart />
                <div className="total-quantity">{totalProduct}</div>
            </div>
        </nav>
    )
};

export default Navbar;