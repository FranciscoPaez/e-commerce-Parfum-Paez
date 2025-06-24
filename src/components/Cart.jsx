import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartView from "./CartView"
import EmptyCart from "./EmptyCart"


const Cart = () => {
    const { cart } = useContext(CartContext)
    return(
        <>
          {cart.length ? <CartView/> : <EmptyCart/>}
        </>
    )
}

export default Cart