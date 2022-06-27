import ReactGA from 'react-ga4'
import { ANALYTICS_PAGEVIEW_TYPE } from '../../shared/contants'

export const analyticsInit = () => {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKER_ID_G4)
}

export const analyticsEvents = (event) => {
  ReactGA.event(event.name, event)
}

export const analyticsExceptions = (exceptionEvent) => {
  ReactGA.event(exceptionEvent.name, exceptionEvent)
}

export const analyticsPageView = (page) => {
  ReactGA.send(ANALYTICS_PAGEVIEW_TYPE, {
    title: page.title,
    page: page.path
  })
}
