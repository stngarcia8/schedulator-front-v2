import React from 'react'
import image from '../../../assets/images/NoTask.png'
import './NoTask.scss'

const NoTask = () => {
  return (
    <div className='no-task-container'>
      <h1 className='no-task-title'>No hay tareas cargadas</h1>
      <div className='content-container'>
        <img className='image' src={image} alt='No hay tareas' />
        <p className='no-task-text'>
          En estos momentos no hay tareas cargadas,
          Presione el botón <strong>Cargar tareas</strong>, para verificar la disponibilidad de estas.
        </p>
      </div>
    </div>
  )
}

export default NoTask
