import { UiTypes } from './types/UiTypes'

const initialState = {
  loading: false
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UiTypes.SHOW_LOADING_INDICATOR:
      return changeLoadingStatus(true)
    case UiTypes.HIDE_LOADING_INDICATOR:
      return changeLoadingStatus(false)
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

export {
  uiReducer
}
