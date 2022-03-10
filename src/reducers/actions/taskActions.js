import { showLoadingIndicator, hideLoadingIndicator } from './uiActions'
import TaskApi from '../../api/TaskApi'
import { URI_BY_TASK_DURATION, URI_BY_TASK_PER_DAY, SearchType } from '../../shared/contants'
import { TaskTypes } from '../types/TaskTypes'

const loadTask = (searchType) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingIndicator())
      const response = await TaskApi.get(uriResolver(searchType))
      dispatch(hideLoadingIndicator())
      dispatch(actionTaskDataCreator(searchType, response.data))
    } catch (err) {
      dispatch(hideLoadingIndicator())
      dispatch(actionExceptionCreator(err))
    }
  }
}

const uriResolver = (searchType) => {
  return searchType === SearchType.BY_TASK_DURATION
    ? URI_BY_TASK_DURATION
    : URI_BY_TASK_PER_DAY
}

const actionTaskDataCreator = (searchType, data) => ({
  type: typeResolver(searchType),
  payload: data
})

const typeResolver = (searchType) => {
  return searchType === SearchType.BY_TASK_DURATION
    ? TaskTypes.GET_BY_TASK_DURATION
    : TaskTypes.GET_BY_TASK_PER_DAY
}

const actionExceptionCreator = (err) => {
  return {
    type: TaskTypes.GET_AN_EXCEPTION,
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
