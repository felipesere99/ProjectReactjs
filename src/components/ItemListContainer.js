import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
//import MyPromise from '../helpers/PedirDatos';
import { useParams } from 'react-router-dom'
import Cargando from '../helpers/Spinner';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

const ItemListContainer = () => {

  const [celulares, setCelulares] = useState([])
  const [cargando, setCargando] = useState(true)

  const {categoryId} = useParams();

  useEffect(() => {
    setCargando(true)
    // 1) Armar referencia (sync)
    const productosRef = collection(db, 'productos')
    const q = categoryId 
                  ? query(productosRef, where('category', '==', categoryId))
                  : productosRef
    // 2) Consumir esa ref (async)
    getDocs(q)
        .then((resp) => {
          const productos = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
          console.log(productos)

          setCelulares(productos)
        })
        .finally(setCargando(false))

    /*MyPromise()
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
          setCargando(false)})*/
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