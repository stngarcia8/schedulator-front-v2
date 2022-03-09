import React from 'react'
import useTaskData from '../../../hooks/useTaskData'
import { BsFillSaveFill, BsFillCheckSquareFill } from 'react-icons/bs'
import './resumecomponent.scss'

const ResumeComponent = () => {
  const { getTotalTasks, getTotalDays } = useTaskData()

  return (
    <div className='resume'>
      <div className='resume-section'>
        <BsFillSaveFill />
        <h4 className='title4'>
          Total tareas cargadas:
          <span> {getTotalTasks()}</span>
        </h4>
      </div>
      <div className='resume-section'>
        <BsFillCheckSquareFill />
        <h4 className='title4'>
          Días necesarios para distribución:
          <span> {getTotalDays()}</span>
        </h4>
      </div>
    </div>
  )
}

export default ResumeComponent
