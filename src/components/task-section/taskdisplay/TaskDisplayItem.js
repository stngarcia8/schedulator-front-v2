import React from 'react'
import './taskdisplayitem.scss'
import image from '../../../assets/images/task.png'
const TaskDisplayItem = (props) => {
  const { tasks } = props

  const renderItems = () => {
    if (!tasks) return (<></>)
    return (
      tasks.map(task => {
        return (
          <div key={task.taskId} className="task-item">
            <img className="image" src={image} alt={task.taskName} />
            <span>Tarea: {task.taskName}</span>
            <span>Duración: {task.duration}</span>
          </div>
        )
      })
    )
  }

  return (
    <div className="group-items">
      {renderItems()}
    </div>
  )

}

export default TaskDisplayItem