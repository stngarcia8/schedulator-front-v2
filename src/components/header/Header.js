import React from 'react'
import logo from '../../assets/images/task.png'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='brand'>
        <img className='image' src={logo} alt='Task schedulator' />
        <h1 className='header-title'>
          Task Schedulator front
        </h1>
      </div>
    </header>

  )
}

export default Header
