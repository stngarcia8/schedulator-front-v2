import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTaskData, useTaskContext } from '../../hooks'
import { DayList } from '../../components'

const DayListContainer = ({ loading }) => {
  const { getDays } = useTaskData()
  const { setCurrentDay, modalIsOpen, openModalForm } = useTaskContext()
  const [isLoading, setIsloading] = useState(loading)

  useEffect(() => {
    setIsloading(loading)
  }, [loading])

  const onClick = (event) => {
    if (modalIsOpen()) return
    event.preventDefault()
    setCurrentDay(event.target.value)
    openModalForm(true)
  }

  return (<DayList loading={isLoading} days={getDays()} onClick={onClick} />)
}

DayListContainer.propTypes = {
  loading: PropTypes.bool
}

export default DayListContainer
