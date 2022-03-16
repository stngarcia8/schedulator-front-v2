import React from 'react'
import './notaskcomponent.scss'

const NoTaskComponent = () => {
  return (
    <div className='no-task-container'>
      <h1 className='no-task-title'>No hay tareas cargadas</h1>
      <p className='no-task-text'>
        En estos momentos no hay tareas cargadas,
        Presione el botón <strong>Cargar tareas</strong>, para verificar la disponibilidad de estas.
      </p>
    </div>
  )
}

export default NoTaskComponent
