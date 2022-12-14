import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const NavBar = () => {

  const {cart} = useContext(CartContext)

  return (
    <>
    <Navbar className='navbar' expand="md" variant="secondary">
        <Container>
          <Link to='/'>
          <Navbar.Brand href="#home">
          <img  width="120"
              id='logo'
              height="80"
              className="d-inline-block align-top"
              src="https://tienda.antel.com.uy/razuna/assets/1/C1E491498DD84E71960E4EE38E691C34/img/C7133CA320484B3B9AE5F788FC196A12/antel-fondoazul.png" alt="logo"/>
          </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className='links-div'>
              <Link to='/ItemList/iphone' className='links' style={{ fontSize: '22px' }}>Iphone</Link>
              <Link to='/ItemList/samsung' className='links' style={{ fontSize: '22px' }}>Samsung</Link>
              <Link to='/ItemList/otros' className='links' style={{ fontSize: '22px' }}>Otros</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
          
        
        <Form className="d-flex mb-3 my-2">
        
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2 d-none d-md-block"
              aria-label="Search"
            />
            <Button variant="primary" className='d-none d-md-block'>Buscar</Button>
            
          </Form>
          {
            cart.length === 0 ?
            null
            :
            <CartWidget />
          }
          
          </Container>
      </Navbar>
      </>
  )
}

export default NavBar;