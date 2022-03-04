import React from 'react'
import './errordisplay.scss'
import Error500 from '../../../assets/images/error500.png'
import Error404 from '../../../assets/images/error404.png'

const ErrorDisplay = (props) => {
  const { errorCode } = props

  const getErrorText = () => {
    if (errorCode === 500) {
      return (`
        El servidor de tareas no se encuentra disponible,
        pruebe a intentar cargar información en un momento. 
         En caso de persistir el problema, favor avisar al administrador del sistema, disculpe las molestias.
      `)
    }
    return (`
     No ha sido posible cargar tareas, el servidor no encuentra información para desplegar 
     la solicitud realizada.
     Disculpe las molestias.
  `)
  }

  const renderImage = () => {
    if (errorCode === 500) {
      return (
        <img className="error-image" src={Error500} alt="Internal server error" />
      )
    }
    return (
      <img className="error-image" src={Error404} alt="Not found" />
    )
  }

  return (
    <div className="error-container">
      <h1 className="error-title">
        Un error ha ocurrido
      </h1>
      <div className="error-content-container">
        {renderImage()}
        <p className="error-text">
          {getErrorText()}
        </p>
      </div>
    </div>
  )

}

export default ErrorDisplay