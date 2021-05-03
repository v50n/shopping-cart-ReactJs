import {GiShoppingCart} from 'react-icons/gi';
import '../css/navbar.css';
import { useGetValShoppingCartContext } from '../Context';

const Navbar = () => {
    const {totalProduct} = useGetValShoppingCartContext();
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