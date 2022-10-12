import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Navigate } from 'react-router-dom';
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

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
        
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.contador) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.contador
                })
            } else {
                outOfStock.push(itemInCart)
            }

            if (outOfStock.length === 0) {
                batch.commit()
                    .then(() => {
                        addDoc(ordenesRef, orden)
                            .then((doc) => {
                                console.log(doc.id)
                                terminarCompraConSwal(doc.id)
                            })
                    })
            } else {
                
                alert("Hay items sin stock")
                console.log(outOfStock)
            }
        })

        /*cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
                .then( (doc) => {

                    if (doc.data().stock >= item.contador) {

                        updateDoc(docRef, {
                            stock: doc.data().stock - item.contador
                        })
                    } else {
                        alert("No hay stock suficiente en este momento!")
                    }
                
            })
            
        })



        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                terminarCompraConSwal(doc.id)
            })*/

    }


    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

  return (
    <div className='container my-5'>
        <div>
        <h2>Checkout</h2>
        <hr/>
        <h6>A continuacion anote sus datos para poder finalizar la compra y enviarla a su domicilio!</h6>

        <Form onSubmit={handleSubmit}>
            <div className='my-5'>
            <Form.Control name='nombre' onChange={handleInputChange} value={values.nombre} type={'text'} className="my-3 " placeholder='Tu nombre' />
            <Form.Control name='email' type={'text'} onChange={handleInputChange} value={values.email} className="my-3" placeholder='Email' />
            <Form.Control name='direccion' onChange={handleInputChange} type={'text'} value={values.direccion} className="my-3 " placeholder='Dirreccion' />

            <Button type='submit' className='btn btn-primary my-2'>Terminar</Button>
            </div>
        </Form>
        </div>

        <h2>Resumen de su compra:</h2>
        <Table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cantidad</th>
                    <th>Precio a pagar</th>
                </tr>
            </thead>
        {
            cart.map((item) => {
                return <>
                        <tr className='my-2'>
                            <td><strong>{item.title}</strong></td>
                            <td><strong>{item.contador}</strong></td>
                            <td><strong>U$S {(item.contador * item.price)}</strong></td>
                        </tr>
                </>
            })
        }
        </Table>

    </div>
  )
}

export default Checkout;