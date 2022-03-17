import { UiTypes } from '../types/UiTypes'

export const showLoadingIndicator = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.SHOW_LOADING_INDICATOR))
}

export const hideLoadingIndicator = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.HIDE_LOADING_INDICATOR))
}

export const orderByDuration = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.ORDER_BY_DURATION))
}

export const orderByQuantity = () => {
  return (dispatch) => dispatch(actionCreator(UiTypes.ORDER_BY_QUANTITY))
}

const actionCreator = (type) => {
  return { type: type }
}
