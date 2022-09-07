import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ItemCount = ({ stock, contador, setContador }) => {

    
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
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => sumar()} disabled={(contador == stock) ? true : false}>+</Button>
            <p className='contador'>{contador}</p>
            <Button variant="secondary" onClick={() => restar()} disabled={(contador == 1) ? true : false}>-</Button>
        </ButtonGroup>
    </div>
  )
}

export default ItemCount;