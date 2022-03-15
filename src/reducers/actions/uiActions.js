import { UiTypes } from '../types/UiTypes'

const showLoadingIndicator = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.SHOW_LOADING_INDICATOR))
}

const hideLoadingIndicator = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.HIDE_LOADING_INDICATOR))
}

const orderByDuration = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.ORDER_BY_DURATION))
}

const orderByQuantity = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.ORDER_BY_QUANTITY))
}

const actionCreator = (type) => {
  return { type: type }
}

export {
  showLoadingIndicator, hideLoadingIndicator, orderByDuration, orderByQuantity
}
