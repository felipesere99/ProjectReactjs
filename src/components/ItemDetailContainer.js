import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import MyPromise from '../helpers/PedirDatos';
import Cargando from '../helpers/Spinner';
import { ItemDetail } from './ItemDetail';


const ItemDetailContainer = () => {

    const [productoElegido, setProductoElegido] = useState([]);
    const [cargando, setCargando] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setCargando(true)
        MyPromise()
            .then((resp) => {
                setProductoElegido(resp.find((item) => item.id === Number(itemId)))
            })
            .catch(error => console.log(error))
            .finally(() => {
                setCargando(false)})
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