import { useState } from "react";
import { createContext } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    /*Otra manera de agregar al carrito
          const newCart = cart.slice()
          newCart.push(item)
          setCart(newCart)*/
  
    const addToCart = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.contador, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.contador * item.price, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id) )
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
          }}>
            {children}
        </CartContext.Provider>
    )
}