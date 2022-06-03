import ReactGA from 'react-ga4'
import { ANALYTICS_EVENT_TYPE, ANALYTICS_PAGEVIEW_TYPE } from '../../shared/contants'

export const analyticsInit = () => {
  ReactGA.initialize(
    process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKER_ID,
    { debug_mode: true }
  )
}

export const analyticsEvents = (event) => {
  ReactGA.event(event.name, {
    hitType: ANALYTICS_EVENT_TYPE,
    category: event.category,
    action: event.action,
    label: event.label
  })
}

export const analyticsExceptions = (exceptionEvent) => {
  ReactGA.event(exceptionEvent.name, {
    hitType: ANALYTICS_EVENT_TYPE,
    category: exceptionEvent.category,
    action: exceptionEvent.action,
    label: exceptionEvent.label
  })
}

export const analyticsPageView = (page) => {
  ReactGA.send(ANALYTICS_PAGEVIEW_TYPE, {
    title: page.title,
    page: page.path
  })
}
