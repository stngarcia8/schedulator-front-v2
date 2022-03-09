import React from 'react'
import logo from '../../assets/images/task.png'
import './headercomponent.scss'
import Presentation from './Presentation'

const HeaderComponent = () => {
  return (
    <>
      <header className='header'>
        <div className='brand'>
          <img className='image' src={logo} alt='Task schedulator' />
          <h1 className='header-title'>
            Task Schedulator front
          </h1>
        </div>
      </header>
      <Presentation />
    </>
  )
}

export default HeaderComponent
