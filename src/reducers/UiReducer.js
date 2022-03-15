import { SearchType } from '../shared/contants'
import { UiTypes } from './types/UiTypes'

const initialState = {
  loading: false,
  search: SearchType.BY_TASK_DURATION
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UiTypes.SHOW_LOADING_INDICATOR:
      return changeLoadingStatus(true)
    case UiTypes.HIDE_LOADING_INDICATOR:
      return changeLoadingStatus(false)
    case UiTypes.ORDER_BY_DURATION:
      return changeSearchType(SearchType.BY_TASK_DURATION)
    case UiTypes.ORDER_BY_QUANTITY:
      return changeSearchType(SearchType.BY_TASK_PER_DAY)
    default:
      return initialState
  }
}

const changeLoadingStatus = (status) => {
  return {
    ...initialState,
    loading: status
  }
}

const changeSearchType = (searchType) => {
  return {
    ...initialState,
    search: searchType
  }
}

export {
  uiReducer
}
