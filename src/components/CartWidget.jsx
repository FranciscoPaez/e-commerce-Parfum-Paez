import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cartQuantity} = useContext (CartContext);
    
    return (
        <div>
            <span>🛒</span>
            {cartQuantity() > 0 && <span>{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget;