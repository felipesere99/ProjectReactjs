import React from 'react'
import { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import {TiDelete} from 'react-icons/ti'
import VolverAInicio from '../helpers/VolverAInicio'

export const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

  return (
    <div className='container my-5'>
        <Container>
        <h2>Sus productos elegidos:</h2>
        <hr/>
        
        {
            cart.length === 0 ?
                <div>
                    <h2>Aun no hay articulos en el carrito</h2>
                    <VolverAInicio />
                </div>
            :
            cart.map((item) => (
                        <Card>
                            <div key={item.id}>
                                <h4>{item.title}</h4>
                                <p>Cantidad seleccionada: {item.contador}</p>
                                <p>Memoria: {item.gb} GB</p>
                                <p>Precio: U$S {item.price}</p>
                                <button onClick={() => removeItem(item.id)} className='btn btn-danger mx-2'><TiDelete/></button>
                            </div>
                        </Card>
            ))
        }
        {
            cart.length === 0 ?
            null
            :
            <div>
                <h3>Total a pagar: U$S {cartTotal()}</h3>
                <button className="btn btn-secondary my-2" onClick={emptyCart}>Vaciar carrito</button>
            </div>
            
        }
        </Container>
    </div>
  )
}
