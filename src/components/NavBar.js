import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
    <Navbar bg="secondary" variant="secondary">
        <Container>
          <Navbar.Brand href="#home">
          <img  width="120"
              height="80"
              className="d-inline-block align-top" 
              src="https://tienda.antel.com.uy/razuna/assets/1/C1E491498DD84E71960E4EE38E691C34/img/C7133CA320484B3B9AE5F788FC196A12/antel-fondoazul.png" alt="logo"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Iphone</Nav.Link>
            <Nav.Link href="#features">Samsung</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Buscar</Button>
          </Form>
          <CartWidget />
      </Navbar>
      </>
  )
}

export default NavBar;