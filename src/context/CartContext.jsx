import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const prodLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(prodLocalStorage);

    useEffect(()=> {
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])


    const addItem = (item, quantity) => {
        
        if(isInCart(item.id)) {
            const updatedCart = cart.map((prod) => {
                if(prod.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + quantity}
                } else {
                    return prod
                }
            })
            setCart(updatedCart)
        } else {
            setCart ([...cart, {...item, cantidad:quantity}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.cantidad, 0)
    }

    const cartTotal = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.cantidad * prod.price),0)
    }

    const itemQuantity = (id)=> {
        const itemCart = cart.find((item)=> item.id === id)
        if(itemCart){
            return itemCart.cantidad
        }else{
            return 0
        }
    }
    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, cartTotal, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

