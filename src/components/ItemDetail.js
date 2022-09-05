import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import VolverAInicio from '../helpers/VolverAInicio';




export const ItemDetail = ({item}) => {
  return (
    <Container>
      <Row>
        <Col>
            <div>
                <img src={item.pictureUrl} alt=''/>
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
                        <ItemCount stock={item.stock} initial='1'/>
                        <ListGroup.Item></ListGroup.Item>
                        <Button variant="secondary">Añadir al Carrito</Button>
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
