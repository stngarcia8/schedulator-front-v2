import { useDispatch } from 'react-redux'
import { orderByDuration, orderByQuantity } from '../reducers/ui-reducer/uiActions'
import { SearchType } from '../shared/contants'

export const useOrderSelector = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    const optionValue = event.target.value
    optionValue === SearchType.BY_TASK_DURATION
      ? dispatch(orderByDuration())
      : dispatch(orderByQuantity())
  }

  return { handleChange }
}
