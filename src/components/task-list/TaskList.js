import React from 'react'
import PropTypes from 'prop-types'
import image from '../../assets/images/task.png'
import './TaskList.scss'

const TaskList = (tasks) => {
  const renderItems = () => {
    if (!tasks) return (<></>)
    return (
      tasks.tasks.map(task => {
        return (
          <div key={task.taskId} className='task-item'>
            <div>
              <img className='task-image' src={image} alt={task.taskName} />
            </div>
            <div className='task-content'>
              <span>Tarea: {task.taskName}</span>
              <span>Duración: {task.duration} hrs.</span>
            </div>
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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      taskId: PropTypes.string.isRequired,
      taskName: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}
TaskList.defaultProps = {
  tasks: []
}

export default TaskList
