import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext)

  return (
    <Link to="/cart">
      <div className='cartwidget'>
          <img 
              src="https://e7.pngegg.com/pngimages/218/165/png-clipart-computer-icons-shopping-cart-software-others-miscellaneous-logo.png" 
              alt="carro"
              className="carro"
              />
              <span>{cartQuantity()}</span>
      </div>
    </Link>
  )
}

export default CartWidget