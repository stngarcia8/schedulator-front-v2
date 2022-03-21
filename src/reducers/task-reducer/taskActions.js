import { showLoadingIndicator, hideLoadingIndicator } from '../ui-reducer/uiActions'
import TaskApi from '../../api/TaskApi'
import { TaskTypes } from './TaskTypes'
import { uriResolver, typeResolver, exceptionCodeStatusResolver } from './helpers/task-helper'

export const loadTask = (searchType) => {
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

const actionTaskDataCreator = (searchType, data) => ({
  type: typeResolver(searchType),
  payload: data
})

const actionExceptionCreator = (err) => {
  return {
    type: TaskTypes.GET_AN_EXCEPTION,
    payload: {
      codeStatus: exceptionCodeStatusResolver(err)
    }
  }
}
