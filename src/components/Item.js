import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={item.pictureUrl} style={{ height: '25rem', padding: '25px' }}/>
      
      <Card.Body>

        <Card.Title>{item.title}</Card.Title>

          <Card.Text>
            U$S: {item.price}
          </Card.Text>
          <Card.Text>
            Disponibles: {item.stock}
          </Card.Text>
          
          <Link to={`/ItemDetail/${item.id}`} className="btn btn-primary my-2">Detalles del Producto</Link>

      </Card.Body>
    </Card>
  )
}

export default Item