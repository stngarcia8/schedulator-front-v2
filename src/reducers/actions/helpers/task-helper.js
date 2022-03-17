import {
  SearchType, URI_DURATION, URI_QUANTITY
} from '../../../shared/contants'
import { TaskTypes } from '../../types/TaskTypes'

export const uriResolver = (searchType) => {
  return searchType === SearchType.BY_TASK_DURATION
    ? URI_DURATION
    : URI_QUANTITY
}

export const typeResolver = (searchType) => {
  return searchType === SearchType.BY_TASK_DURATION
    ? TaskTypes.GET_BY_TASK_DURATION
    : TaskTypes.GET_BY_TASK_PER_DAY
}

export const exceptionCodeStatusResolver = (err) => {
  return err.toJSON().status
    ? err.toJSON().status
    : 500
}
