import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = ({text}) => {
  return (
    <div className='item-list-container'>
      <h1>{text}</h1>
      <ItemCount stock='5' initial='1'/>
    </div>
  )
}

export default ItemListContainer;