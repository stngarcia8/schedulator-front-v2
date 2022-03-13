import { useState, useEffect } from 'react'
import { useTaskContext, useTaskData } from '.'

export const useModalForm = () => {
  const { getCurrentDay, noCurrentDayDefined, modalIsOpen, openModalForm } = useTaskContext()
  const { getDays } = useTaskData()
  const [day, setDay] = useState({})

  useEffect(() => {
    setDay(getTaskByDay())
  }, [getCurrentDay()])

  const getTaskByDay = () => {
    if (noCurrentDayDefined()) return {}
    return getDays()
      .find(d => d.dayNumber === Number(getCurrentDay()))
  }

  const closeModal = () => {
    if (!modalIsOpen()) return
    openModalForm(false)
  }

  return { day, closeModal }
}
