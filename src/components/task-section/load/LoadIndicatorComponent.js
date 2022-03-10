import React from 'react'
import './loadindicatorcomponent.scss'

const LoadIndicatorComponent = () => {
  return (
    <div className='indicator-container'>
      <div className='indicator-spinner' />
      <h1 className='indicator-title'>Cargando tareas...</h1>
    </div>
  )
}

export default LoadIndicatorComponent
