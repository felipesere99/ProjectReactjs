import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import VolverAInicio from '../helpers/VolverAInicio';
import Select from './Select';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



export const ItemDetail = ({ item }) => {

    const [contador, setContador] = useState(1);
    const [gb, setGb] = useState(item.storage[0].value);
    //const [carrito, setCarrito] = useState(true)
    const {cart, addToCart, isInCart} = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            title: item.title,
            price: item.price,
            contador,
            gb,
        }
        //setCarrito(false)
        
        addToCart( itemToCart )
    }
    console.log(cart)
    console.log(isInCart(item.id))

  return (
    <Container>
      <Row>
        <Col>
            <div>
                <img src={item.pictureUrl} alt='item-detail' style={{ height: '25rem', padding: '25px' }}/>
            </div>
        </Col>
        <Col>
            <div>
                <Card>
                    <Card.Header>{item.title}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{item.description}</ListGroup.Item>
                        <ListGroup.Item>Stock Disponible: {item.stock}</ListGroup.Item>
                        <ListGroup.Item>U$S: {item.price}</ListGroup.Item>
                        {
                            isInCart(item.id)  ?
                             <Link to='/cart' className="btn btn-secondary my-2">Terminar compra</Link>
                            : <ItemCount stock={item.stock}
                                contador={contador}
                                setContador={setContador}
                                handleAgregar={handleAgregar}/>
                        }
                        <ListGroup.Item></ListGroup.Item>
                        <Select options={item.storage} onSelect={setGb}/>
                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                </Card>
                <VolverAInicio />
            </div>
        </Col>
      </Row>
      </Container>
  )
}
