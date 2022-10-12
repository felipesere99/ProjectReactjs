import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


const Item = ({ item }) => {
  return (
    <Card style={{ width: '17.5rem', border: '3px solid midnightblue'}} className='item'>

      <Card.Title style={{ marginTop: '10px', fontWeight: 'bold', backgroundColor: 'rgba(128, 128, 128, 0.7)', padding: '6px'}}>{item.title}</Card.Title>

      <Card.Img variant="top" src={item.pictureUrl} style={{ height: '25rem', padding: '22px', }}/>
      
      <Card.Body>

          <Card.Text className='price'>
            <h4>U$S {item.price}</h4>
          </Card.Text>
          <Card.Text>
            <h5>
            Disponibles {item.stock}
            </h5>
            
          </Card.Text>
          {
            (item.stock == 0) 
            ? <Card.Text>
            <strong style={{ color: 'maroon' }}>No hay stock disponible en este momento!</strong>
          </Card.Text>
          : <Link to={`/ItemDetail/${item.id}`} className="btn btn-primary my-1"><h6 className='my-1'>Detalles del Producto</h6></Link>
          }
          

      </Card.Body>
    </Card>
  )
}

export default Item