import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import MyPromise from '../helpers/PedirDatos';

const ItemListContainer = ({ items }) => {

  const [celulares, setCelulares] = useState([])

  useEffect(() => {
    MyPromise()
        .then(data => setCelulares(data))
}, [])

  console.log(celulares)

  return (
    <div className='item-list-container'>
      <ItemList items={celulares}/>
    </div>
  )
}

export default ItemListContainer;