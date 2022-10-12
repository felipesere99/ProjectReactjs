import React from 'react'
import Item from './Item';


const ItemList = ({ items }) => {

  return (
    <div className='item-list-container'>
        {items.map((item) =><div > <Item item={item} key={item.id} className='item'/></div>)}
    </div>
  )
}

export default ItemList;