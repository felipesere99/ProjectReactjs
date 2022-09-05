import React from 'react'
import { Link } from 'react-router-dom'

const VolverAInicio = () => {
  return (
    <div className='volver'>
        <Link to={`/`} className="btn btn-primary my-2">Volver a Inicio</Link>
    </div>
  )
}

export default VolverAInicio;