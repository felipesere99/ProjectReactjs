import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Navigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

const Checkout = () => {

    const { cart, cartTotal, terminarCompraConSwal } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) {
            alert("Email incorrecto")
            return 
        }
        console.log(orden)

        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                terminarCompraConSwal(doc.id)
            })

    }


    if (cart.length === 0) {
        return <Navigate to='/'/>
    }
  return (
    <div className='container my-5'>
        <h2>Checkout</h2>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input name='nombre' onChange={handleInputChange} value={values.nombre} type={'text'} className="my-3 form-control" placeholder='Tu nombre' />
            <input name='email' type={'text'} onChange={handleInputChange} value={values.email} className="my-3 form-control" placeholder='Email' />
            <input name='direccion' onChange={handleInputChange} type={'text'} value={values.direccion} className="my-3 form-control" placeholder='Dirreccion' />

            <button type='submit' className='btn btn-primary my-2'>Terminar</button>
        </form>
    </div>
  )
}

export default Checkout;