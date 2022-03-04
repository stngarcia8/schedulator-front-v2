import React from 'react'
import logo from '../../assets/images/task.png'
import './headerpage.scss'
import Presentation from './Presentation'

const HeaderPage = () => {

  return (<>
    <header className="header">
      <div >
        <div className="brand">
          <div>
            <img src={logo} alt="Task schedulator" />
          </div>
          <div>
            <h1>
              Task Schedulator front
            </h1>
          </div>
        </div>
      </div>
    </header>
    <Presentation />
  </>)
}

export default HeaderPage