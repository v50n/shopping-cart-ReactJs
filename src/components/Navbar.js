import {GiShoppingCart} from 'react-icons/gi';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                Great Ecommerce
            </div>
            <div className="panier">
                <GiShoppingCart />
                <div className="total-quantity">1</div>
            </div>
        </nav>
    )
};

export default Navbar;