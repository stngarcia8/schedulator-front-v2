import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const TaskContext = React.createContext()
export const TaskContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentDay, setCurrentDay] = useState(0)

  return (
    <TaskContext.Provider value={{
      isOpenModal,
      setIsOpenModal,
      currentDay,
      setCurrentDay
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}

TaskContextProvider.propTypes = {
  children: PropTypes.node
}
