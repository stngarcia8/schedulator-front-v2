import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTask } from '../../reducers/task-reducer/taskActions'
import { orderByDuration, orderByQuantity } from '../../reducers/ui-reducer/uiActions'
import { LoadIndicator, TaskSection } from '../../components'
import { useTaskData } from '../../hooks'
import { OrderType } from '../../shared/contants'

const TaskSectionContainer = () => {
  const dispatch = useDispatch()
  const { search, loading } = useSelector(state => state.uiData)
  const { noTask, isDataLoadingError, getStatusMessage, getTotalTasks, getTotalDays } = useTaskData()
  const [isLoadingData, setIsLoadingData] = useState(loading)
  const [disableButton, setDisableButton] = useState(true)
  const [orderValue, setOrderValue] = useState('')

  useEffect(() => {
    setIsLoadingData(loading)
  }, [loading, orderValue])

  const onChange = (event) => {
    event.preventDefault()
    if (!event.target.value) {
      setOrderValue('')
      return setDisableButton(true)
    }
    setOrderValue(event.target.value)
    setDisableButton(false)
    const optionValue = event.target.value
    optionValue === OrderType.BY_TASK_DURATION
      ? dispatch(orderByDuration())
      : dispatch(orderByQuantity())
  }

  const onClick = (event) => {
    event.preventDefault()
    dispatch(loadTask(search))
  }

  const renderContent = () => {
    if (isLoadingData) return (<LoadIndicator />)
    return (
      <TaskSection
        loading={isLoadingData}
        disableButton={disableButton}
        noTask={noTask()}
        isDataLoadingError={isDataLoadingError()}
        getStatusMessage={getStatusMessage()}
        getTotalTasks={getTotalTasks()}
        getTotalDays={getTotalDays()}
        onChange={onChange}
        onClick={onClick}
      />
    )
  }

  return renderContent()
}

export default TaskSectionContainer
