import TaskApi from "../api/TaskApi"
import { API_URI_BY_TASK_DURATION, API_URI_BY_TASK_PER_DAY_QUANTITY, SearchType } from "../shared/contants"
import { TaskActionTypes } from "./TaskActionTypes"


const loadTask = (searchType) => {
  return async (dispatch) => {
    try {
      const response = await TaskApi.get(uriResolver(searchType))
      dispatch(responseData(searchType, response.data))

    } catch (err) {
      dispatch(responseException(err))
    }
  }
}

const uriResolver = (searchType) => {
  return searchType === SearchType.BY_TASK_DURATION
    ? API_URI_BY_TASK_DURATION
    : API_URI_BY_TASK_PER_DAY_QUANTITY
}

const responseData = (searchType, data) => ({
  type: typeResolver(searchType),
  payload: data
})

const typeResolver = (searchType) => {
  return searchType === SearchType.BY_TASK_DURATION
    ? TaskActionTypes.GET_BY_TASK_DURATION
    : TaskActionTypes.GET_BY_TASK_PER_DAY
}

const responseException = (err) => {
  return {
    type: TaskActionTypes.GET_AN_EXCEPTION,
    payload: {
      codeStatus: exceptionCodeStatusResolver(err)
    }
  }
}

const exceptionCodeStatusResolver = (err) => {
  return err.toJSON().status
    ? err.toJSON().status
    : 500
}

export {
  loadTask
}
