import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const useProductos = () => {


    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setCargando(true)
        // 1.- Armar la referencia (sync)
        const productosRef = collection(db, 'productos')
        const q = categoryId 
                    ? query(productosRef, where('category', '==', categoryId) )
                    : productosRef
        // 2.- Consumir esa ref (async)
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                setProductos(productosDB)
            })
            .finally(() => {
                setCargando(false)
            })
        
    }, [categoryId])

    return ({
        productos, cargando
    })
}