import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs"
import './loadbutton.scss'


const LoadButton = () => {

  return (<>
    <button >
      <BsFillCheckCircleFill className="icon"/>
      Cargar tareas
    </button>
  </>)
}

export default LoadButton