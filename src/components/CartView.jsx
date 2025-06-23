import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const {cart, cartTotal, clear, removeItem} = useContext(CartContext)
    return(
        <div>
            <h2>Your Cart 🛒</h2>
            <div>
                {
                    cart.map((buys)=> {
                        <div key={buys.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                            <img src={buys.img} alt={buys.name} style={{width:'10rem'}}/>
                            <span>{buys.name}</span>
                            <span>${buys.price},00</span>
                            <span>{buys.cantidad}</span>
                            <span>Precio total: {buys.price} * {buys.cantidad},00</span>
                            <button onClick={()=> removeItem(buys.id)}>x</button>
                        </div>
                    })
                }
            </div>
            <span>Total a pagar: ${cartTotal()},00</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
                <button onClick={clear}>Delete cart</button>
                <Link to='/checkout'>Finish purchase</Link>
            </div>
        </div>

    )
}

export default CartView;