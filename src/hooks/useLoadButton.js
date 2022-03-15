import { useDispatch, useSelector } from 'react-redux'
import { loadTask } from '../reducers/actions/taskActions'

export const useLoadButton = () => {
  const dispatch = useDispatch()
  const { search } = useSelector(state => state.uiData)

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(loadTask(search))
  }

  return { handleClick }
}
