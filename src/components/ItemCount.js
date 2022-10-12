import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ItemCount = ({ stock, contador, setContador, handleAgregar }) => {

    
    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        } 
    }

    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }


  return (
    <div>
        <div style={{ margin: '10px' }}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => sumar()} disabled={(contador == stock) ? true : false}><h4>+</h4></Button>
                <p className='contador'>{contador}</p>
                <Button variant="secondary" onClick={() => restar()} disabled={(contador == 1) ? true : false}><h3>-</h3></Button>
            </ButtonGroup>
        </div>
        <div>
            <Button variant="secondary" onClick={handleAgregar}>Añadir al Carrito</Button>
        </div>
        <hr/>
    </div>
  )
}

export default ItemCount;