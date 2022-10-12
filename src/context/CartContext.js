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
            title: 'Estas seguro?',
            text: "Se borrara todo los productos del carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    const terminarCompraConSwal = (id) => {
      Swal.fire({
        title: 'Compra exitosa!',
        text: `Tu número de orden es: ${id}, llegara a tu domicilio en las proximas 48 horas!`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Genial!'
      })
      setCart([])
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
            removeItem,
            terminarCompraConSwal
          }}>
            {children}
        </CartContext.Provider>
    )
}