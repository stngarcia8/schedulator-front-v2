import React from 'react'
import './notask.scss'

const NoTask = () => {

  return (
    <div className="no-task-container">
      <h1 className="no-task-title">
        No hay tareas cargadas
      </h1>
      <p className="no-task-text">
        En estos momentos no hay tareas cargadas, 
        Presione el botón "Cargar tareas", para verificar la disponibilidad de estas.
      </p>
   </div>
  )
  
}

export default NoTask