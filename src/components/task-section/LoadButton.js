import React from 'react'
import { useDispatch } from 'react-redux'
import { BsFillCheckCircleFill } from "react-icons/bs"
import './loadbutton.scss'
import { loadTask } from '../../reducers/taskActions'
import { SearchType } from '../../shared/contants'


const LoadButton = () => {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(loadTask(SearchType.BY_TASK_DURATION))
  }

  return (<>
    <button
      onClick={handleClick}
    >
      <BsFillCheckCircleFill className="icon" />
      Cargar tareas
    </button>
  </>)
}

export default LoadButton