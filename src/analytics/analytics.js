import { analyticsInit, analyticsEvents, analyticsExceptions, analyticsPageView } from './providers/GoogleAnalytics'

export const initializeAnalytics = () => {
  analyticsInit()
}

export const publishEvents = (event, customProperties = undefined) => {
  let eventToPublish = { ...event }
  if (customProperties) {
    eventToPublish = addCustomPropertiesIntoEvent(event, customProperties)
  }
  analyticsEvents(eventToPublish)
}

export const publishException = (exceptionEvent) => {
  analyticsExceptions(exceptionEvent)
}

export const publishPageView = (page) => {
  analyticsPageView(page)
}

const addCustomPropertiesIntoEvent = (event, customProperties) => {
  const type = typeof customProperties
  let newEvent = { ...event }
  if (type === 'object') {
    newEvent = Object.assign(newEvent, customProperties)
  }
  return newEvent
}
