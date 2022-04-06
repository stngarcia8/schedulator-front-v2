import React from 'react'
import PropTypes from 'prop-types'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './LoadButton.scss'

const LoadButton = ({ disableButton, onClick }) => {
  return (
    <>
      <button
        name='load-button'
        className={disableButton ? 'load-button-disable' : 'load-button'}
        disabled={disableButton}
        onClick={onClick}
      >
        <BsFillCheckCircleFill className='icon' />
        Cargar tareas
      </button>
    </>
  )
}

LoadButton.propTypes = {
  disableButton: PropTypes.bool,
  onClick: PropTypes.func
}

export default LoadButton
