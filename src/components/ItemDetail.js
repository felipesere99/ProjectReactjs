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
    const { addToCart, isInCart} = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            title: item.title,
            price: item.price,
            contador,
            gb,
            pictureUrl: item.pictureUrl
        }
        //setCarrito(false)
        
        addToCart( itemToCart )
    }

  return (
    <Container>
      <Row>
        <Col>
            <div>
                <img src={item.pictureUrl} alt='item-detail' style={{ height: '27rem', padding: '25px' }}/>
            </div>
        </Col>
        <Col>
            <div>
                <Card style={{ border: ' 3px solid midnightblue' }}>
                    <Card.Header><h2>{item.title}</h2></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>{item.description}</strong></ListGroup.Item>
                        <ListGroup.Item><strong>Stock Disponible {item.stock}</strong></ListGroup.Item>
                        <ListGroup.Item><h3>U$S {item.price}</h3></ListGroup.Item>
                        <Select options={item.storage} onSelect={setGb}/>
                        {
                            isInCart(item.id)  ?
                             <Link to='/cart' className="btn btn-primary my-2">Terminar compra</Link>
                            : <ItemCount stock={item.stock}
                                contador={contador}
                                setContador={setContador}
                                handleAgregar={handleAgregar}/>
                        }
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
