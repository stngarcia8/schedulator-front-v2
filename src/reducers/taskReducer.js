import { TaskTypes } from './types/TaskTypes'

const initialState = {
  totalTasks: 0,
  totalDays: 0,
  statusResponse: 0,
  days: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskTypes.GET_BY_TASK_DURATION:
      return stateResolver(action.payload)
    case TaskTypes.GET_BY_TASK_PER_DAY:
      return stateResolver(action.payload)
    case TaskTypes.GET_AN_EXCEPTION:
      return exceptionResolver(action.payload)
    default:
      return initialState
  }
}

const stateResolver = (payload) => {
  return {
    ...initialState,
    totalTasks: payload.totalTasks,
    totalDays: payload.totalDays,
    statusResponse: 200,
    days: payload.days
  }
}

const exceptionResolver = (payload) => {
  return {
    ...initialState,
    statusResponse: payload.codeStatus
  }
}

export {
  taskReducer
}
