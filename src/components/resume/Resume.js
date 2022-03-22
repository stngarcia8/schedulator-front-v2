import React from 'react'
import PropTypes from 'prop-types'
import { BsFillSaveFill, BsFillCheckSquareFill } from 'react-icons/bs'
import './Resume.scss'

const Resume = ({ getTotalTasks, getTotalDays }) => {
  return (
    <div className='resume'>
      <div className='resume-section'>
        <BsFillSaveFill />
        <h4 className='title4'>
          {getTotalTasks} tareas cargadas
        </h4>
      </div>
      <div className='resume-section'>
        <BsFillCheckSquareFill />
        <h4 className='title4'>
          Distribución en {getTotalDays} días
        </h4>
      </div>
    </div>
  )
}

Resume.propTypes = {
  getTotalTasks: PropTypes.number.isRequired,
  getTotalDays: PropTypes.number.isRequired
}
Resume.defaultProps = {
  getTotalTasks: 0,
  getTotalDays: 0
}

export default Resume
