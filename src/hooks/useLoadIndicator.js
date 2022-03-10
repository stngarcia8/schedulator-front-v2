import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoadingIndicator } from '../reducers/actions/uiActions'

export const useLoadIndicator = () => {
  const { dispatch } = useDispatch()
  const { loading } = useSelector(state => state.uiData)
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  const changeLoadinStatus = (loadingStatus) => {
    dispatch(showLoadingIndicator(loadingStatus))
  }

  return {
    isLoading, changeLoadinStatus
  }
}
