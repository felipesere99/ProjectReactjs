import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pictureUrl} style={{ height: '25rem', padding: '25px' }}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            U$S: {item.price}
            <hr/>
            Disponibles: {item.stock}
            </Card.Text>
        <Button variant="primary">Detalles del producto</Button>
      </Card.Body>
    </Card>
  )
}

export default Item