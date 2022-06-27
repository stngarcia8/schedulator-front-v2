import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { publishEvents, publishPageView } from '../../analytics/analytics'
import { loadTask } from '../../reducers/task-reducer/taskActions'
import { orderByDuration, orderByQuantity } from '../../reducers/ui-reducer/uiActions'
import { LoadIndicator, TaskSection } from '../../components'
import { useTaskData } from '../../hooks'
import { OrderType } from '../../shared/contants'
import { analyticsEvents, analyticsPageView } from '../../shared/events'

const TaskSectionContainer = () => {
  const dispatch = useDispatch()
  const { search, loading } = useSelector(state => state.uiData)
  const { noTask, isDataLoadingError, getStatusMessage, getTotalTasks, getTotalDays } = useTaskData()
  const [isLoadingData, setIsLoadingData] = useState(loading)
  const [disableButton, setDisableButton] = useState(true)
  const [orderValue, setOrderValue] = useState('')

  useEffect(() => {
    publishEvents(analyticsEvents.loadTaskPage)
    publishPageView(analyticsPageView.startPage)
  }, [])

  useEffect(() => {
    setIsLoadingData(loading)
  }, [loading, orderValue])

  const onChange = (event) => {
    event.preventDefault()
    if (!event.target.value) {
      setOrderValue('')
      return setDisableButton(true)
    }
    // publishEvents(createAnalyticsCustomEvents('Select task order', `select task order by ${event.target.value}`, 'load tasks'))
    const customProperty = { task_order: event.target.value }
    publishEvents(analyticsEvents.selectTaskOrder, customProperty)
    setOrderValue(event.target.value)
    setDisableButton(false)
    const optionValue = event.target.value
    optionValue === OrderType.BY_TASK_DURATION
      ? dispatch(orderByDuration())
      : dispatch(orderByQuantity())
  }

  const onClick = (event) => {
    event.preventDefault()
    publishEvents(analyticsEvents.clickLoadButton)
    dispatch(loadTask(search))
  }

  const renderContent = () => {
    if (isLoadingData) return (<LoadIndicator />)
    return (
      <TaskSection
        loading={isLoadingData}
        disableButton={disableButton}
        actualValue={orderValue}
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
