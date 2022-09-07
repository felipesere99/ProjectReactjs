import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import MyPromise from '../helpers/PedirDatos';
import { useParams } from 'react-router-dom'
import Cargando from '../helpers/Spinner';

const ItemListContainer = () => {

  const [celulares, setCelulares] = useState([])
  const [cargando, setCargando] = useState(true)

  const {categoryId} = useParams();

  useEffect(() => {
    setCargando(true)
    MyPromise()
        .then(data => {
          if(!categoryId){
          setCelulares(data)
          } else {
            setCelulares(data.filter((item) => item.category === categoryId))
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setCargando(false)})
}, [categoryId])

  return (
    <div className='item-list-container'>
        {
            cargando
            ? <Cargando />
            : <ItemList items={celulares}/>
        }
    </div>
  )
}

export default ItemListContainer;