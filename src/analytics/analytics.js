import { analyticsInit, analyticsEvents, analyticsExceptions, analyticsPageView } from './providers/GoogleAnalytics'

export const initializeAnalytics = () => {
  analyticsInit()
}

export const publishEvents = (event) => {
  analyticsEvents(event)
}

export const publishException = (exceptionEvent) => {
  analyticsExceptions(exceptionEvent)
}

export const publishPageView = (page) => {
  analyticsPageView(page)
}
