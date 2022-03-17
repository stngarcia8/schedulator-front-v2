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
      return stateResolver(state, action.payload)
    case TaskTypes.GET_BY_TASK_PER_DAY:
      return stateResolver(state, action.payload)
    case TaskTypes.GET_AN_EXCEPTION:
      return exceptionResolver(state, action.payload)
    default:
      return state
  }
}

const stateResolver = (state, payload) => {
  return {
    ...state,
    totalTasks: payload.totalTasks,
    totalDays: payload.totalDays,
    statusResponse: 200,
    days: payload.days
  }
}

const exceptionResolver = (state, payload) => {
  return {
    ...state,
    statusResponse: payload.codeStatus
  }
}

export {
  taskReducer
}
