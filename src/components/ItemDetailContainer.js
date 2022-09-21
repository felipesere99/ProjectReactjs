import { doc, getDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config';
import MyPromise from '../helpers/PedirDatos';
import Cargando from '../helpers/Spinner';
import { ItemDetail } from './ItemDetail';


const ItemDetailContainer = () => {

    const [productoElegido, setProductoElegido] = useState([]);
    const [cargando, setCargando] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setCargando(true)
        
        // 1) Armar la referencia (sync)
        const docRef = doc(db, 'productos', itemId)
        
        // 2) Llamar a la DB (async)
        getDoc(docRef)
            .then((doc) => {
                setProductoElegido({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setCargando(false)
            })
        
        
        
        /*MyPromise()
            .then((resp) => {
                setProductoElegido(resp.find((item) => item.id === Number(itemId)))
            })
            .catch(error => console.log(error))
            .finally(() => {
                setCargando(false)})*/
    }, [])

  return (
    <div className='item-detail-container'>

        {
            cargando
            ? <Cargando />
            : <ItemDetail item={productoElegido} />
        }
    </div>
  )
}

export default ItemDetailContainer;