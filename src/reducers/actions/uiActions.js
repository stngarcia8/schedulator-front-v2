import { UiTypes } from '../types/UiTypes'

const showLoadingIndicator = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.SHOW_LOADING_INDICATOR))
}

const hideLoadingIndicator = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.HIDE_LOADING_INDICATOR))
}

const actionCreator = (type) => {
  return { type: type }
}

export {
  showLoadingIndicator, hideLoadingIndicator
}
