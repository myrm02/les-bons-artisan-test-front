import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (listIndex) => {
        setCart(cart.filter((e, index) => index !== listIndex))
    }

    const removeAllFromCart = () => {
        setCart([])
    }

    return (<CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
        {children}
    </CartContext.Provider>)
}

export function useCart() {
    return useContext(CartContext)
}