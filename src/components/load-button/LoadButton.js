import React from 'react'
import PropTypes from 'prop-types'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './LoadButton.scss'

const LoadButton = ({ onClick }) => {
  return (
    <>
      <button
        name='load-button'
        className='load-button'
        onClick={onClick}
      >
        <BsFillCheckCircleFill className='icon' />
        Cargar tareas
      </button>
    </>
  )
}

LoadButton.propTypes = {
  onClick: PropTypes.func
}

export default LoadButton
