import React from 'react'
import ItemList from './ItemList';
import Cargando from '../helpers/Spinner';
import { useProductos } from '../hooks/useProductos';

const ItemListContainer = () => {

  const { productos, cargando } = useProductos()
    
  return (
    <div className='container-fluid'>
        {
            cargando
            ? <Cargando />
            : <ItemList items={productos}/>
        }
    </div>
  )
}

export default ItemListContainer;