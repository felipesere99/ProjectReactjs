import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ItemCount = ({ stock, initial }) => {

    const [contador, setContador] = useState(parseInt(initial));

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        } 
    }

    const restar = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }


  return (
    <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => sumar()} disabled={(contador == stock) ? true : false}>+</Button>
            <p className='contador'>{contador}</p>
            <Button variant="secondary" onClick={() => restar()} disabled={(contador == initial) ? true : false}>-</Button>
        </ButtonGroup>
    </div>
  )
}

export default ItemCount;