import { useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { SearchType } from '../shared/contants'
import { loadTask } from '../reducers/actions/taskActions'

export const useLoadButton = () => {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(loadTask(SearchType.BY_TASK_DURATION))
  }

  return { handleClick }
}
