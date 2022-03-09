import React, { useState } from 'react'

export const TaskContext = React.createContext()
export const TaskContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentDay, setCurrentDay] = useState(0)

  return (
    <TaskContext.Provider value={{
      isOpenModal,
      setIsOpenModal,
      currentDay,
      setCurrentDay,
      loading,
      setLoading
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}
