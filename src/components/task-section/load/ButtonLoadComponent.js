import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { useLoadButton, useLoadIndicator } from '../../../hooks'
import LoadingIndicator from './LoadingIndicator'
import './buttonloadcomponent.scss'

const ButtonLoadComponent = () => {
  const { isLoading } = useLoadIndicator()
  const { handleClick } = useLoadButton()

  const renderContent = () => {
    if (isLoading) return (<LoadingIndicator />)
    return (
      <>
        <button
          name='load-button'
          className='load-button'
          onClick={handleClick}
        >
          <BsFillCheckCircleFill className='icon' />
          Cargar tareas
        </button>
      </>
    )
  }

  return renderContent()
}

export default ButtonLoadComponent
