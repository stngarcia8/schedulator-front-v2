import { useState, useEffect } from 'react'
import { MESSAGE_TYPES } from '../shared/contants'
import { publishException } from '../analytics/analytics'
import { analyticsExceptions } from '../shared/events'

export const useMessage = (messageCode) => {
  const [messageContent, setMessageContent] = useState({})

  useEffect(() => {
    resolveMessageContent()
  }, [messageCode])

  const resolveMessageContent = () => {
    if (messageCode === 500) {
      publishException(analyticsExceptions.internalServerException)
      return setMessageContent(MESSAGE_TYPES.ERROR_500)
    }
    if (messageCode === 404) {
      publishException(analyticsExceptions.notFoundException)
      return setMessageContent(MESSAGE_TYPES.ERROR_400)
    }
    setMessageContent(MESSAGE_TYPES.NO_TASK)
  }

  return { messageContent }
}
