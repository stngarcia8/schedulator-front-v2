import React from 'react'
import image from '../../../assets/images/task.png'
import './displayitemcomponent.scss'

const DisplayItemComponent = (props) => {
  const { tasks } = props

  const renderItems = () => {
    if (!tasks) return (<></>)
    return (
      tasks.map(task => {
        return (
          <div key={task.taskId} className='task-item'>
            <img className='image' src={image} alt={task.taskName} />
            <span>Tarea: {task.taskName}</span>
            <span>Duración: {task.duration} hrs.</span>
          </div>
        )
      })
    )
  }

  return (
    <div className='group-items'>
      {renderItems()}
    </div>
  )
}

export default DisplayItemComponent
