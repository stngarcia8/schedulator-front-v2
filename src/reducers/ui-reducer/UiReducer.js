import { SearchType } from '../../shared/contants'
import { UiTypes } from './UiTypes'

const initialState = {
  loading: false,
  search: SearchType.BY_TASK_DURATION
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UiTypes.SHOW_LOADING_INDICATOR:
      return changeLoadingStatus(state, true)
    case UiTypes.HIDE_LOADING_INDICATOR:
      return changeLoadingStatus(state, false)
    case UiTypes.ORDER_BY_DURATION:
      return changeSearchType(state, SearchType.BY_TASK_DURATION)
    case UiTypes.ORDER_BY_QUANTITY:
      return changeSearchType(state, SearchType.BY_TASK_PER_DAY)
    default:
      return state
  }
}

const changeLoadingStatus = (state, status) => {
  return {
    ...state,
    loading: status
  }
}

const changeSearchType = (state, searchType) => {
  return {
    ...state,
    search: searchType
  }
}

export {
  uiReducer
}
