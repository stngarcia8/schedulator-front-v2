import React from 'react'
import './LoadIndicator.scss'

const LoadIndicator = () => {
  return (
    <div className='indicator-container'>
      <div className='indicator-spinner' />
      <h1 className='indicator-title'>Cargando tareas...</h1>
    </div>
  )
}

export default LoadIndicator
