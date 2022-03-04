import React from 'react'
import { useSelector } from 'react-redux'
import { BsFillSaveFill, BsFillCheckSquareFill } from 'react-icons/bs'
import './resumesection.scss'

const ResumeSection = () => {
  const {totalTasks, totalDays } = useSelector(state => state.taskData);

  return (
    <div className="resume">
      <div className="resume-section">
        <BsFillSaveFill />
        <h4 className="title4">
          Total tareas cargadas:
          <span> {totalTasks }</span>
        </h4>
      </div>
      <div className="resume-section">
        <BsFillCheckSquareFill />
        <h4 className="title4">
          Días necesarios para distribución:
          <span> {totalDays}</span>
        </h4>
      </div>
    </div>
  )

}

export default ResumeSection