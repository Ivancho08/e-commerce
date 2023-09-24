import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import cart from "../assets/cart.png";


export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)
    return(
        <Link to="/cart">
            <img src={cart} alt="Cart" id="cw" />
            <span>{totalWidget}</span>
        </Link>
    )
}