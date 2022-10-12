import React from 'react'
import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext'
import {TiDelete} from 'react-icons/ti'
import VolverAInicio from '../helpers/VolverAInicio'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)
    console.log(cart)
  return (
    <div className='container my-4'>
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
                        <Card key={item.id}>
                            <Row >
                                <Col>
                                    <div >
                                        <Card.Img src={item.pictureUrl} alt='item-cart' style={{ maxHeight: '16rem', maxWidth:'11rem', padding: '13px' }}/>
                                    </div>
                                </Col>
                                    
                                <Col className='d-flex'>

                                    
                                    
                                    <div className='container my-4'>
                                        <div>
                                        <h4><strong>{item.title}</strong></h4>
                                        <p><strong>Cantidad seleccionada {item.contador}</strong></p>
                                        <p><strong>Memoria {item.gb} GB</strong></p>
                                        <p><strong>Precio U$S {item.price}</strong></p>
                                        </div>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className='btn btn-danger delete'><strong><TiDelete/></strong></button>
                                    
                                </Col>
                                    
                            </Row>
                        </Card>
            ))
        }
        {
            cart.length === 0 ?
            null
            :
            <div>
                <h3>Total a pagar: U$S {cartTotal()}</h3>
                <button className="btn btn-danger my-2" onClick={emptyCart}>Vaciar Carrito</button>
                <br/>
                <Link className="btn btn-primary my-2" to="/checkout">Terminar Compra</Link>
            </div>
            
        }
        </Container>
    </div>
  )
}
