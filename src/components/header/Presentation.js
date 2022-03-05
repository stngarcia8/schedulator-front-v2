import React from 'react'
import './presentation.scss'

const Presentation = () => {

  return (
    <>
      <p className="paragraph">
        El proposito de esta página es mostrar los resultados de
        las tareas organizadas, que son cargadas de la ruta
        http://localhost:8081/task, estos datos son organizados y
        expuestos por la API solicitada consumiendo la información
        generada del servicio http://localhost:8080/generator/schedule/tasks
      </p>
    </>
  )

}

export default Presentation