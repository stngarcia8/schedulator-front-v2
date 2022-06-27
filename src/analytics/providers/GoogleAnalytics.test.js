import ReactGA from 'react-ga4'
import { analyticsInit, analyticsEvents, analyticsExceptions, analyticsPageView } from './GoogleAnalytics'
import { analyticsEvents as Event, analyticsExceptions as Error, analyticsPageView as Pageview } from '../../shared/events'
import { ANALYTICS_PAGEVIEW_TYPE } from '../../shared/contants'

jest.mock('react-ga4', () => ({
  initialize: jest.fn(),
  event: jest.fn(),
  send: jest.fn()
}))

afterEach(() => {
  jest.clearAllMocks()
})

test('should initialize google analytics engine', () => {
  analyticsInit()
  expect(ReactGA.initialize).toBeCalledTimes(1)
  expect(ReactGA.initialize).toBeCalledWith('some_tracker_id')
})

test('should send events', () => {
  const eventName = Event.clickLoadButton.name
  analyticsEvents(Event.clickLoadButton)
  expect(ReactGA.event).toBeCalledTimes(1)
  expect(ReactGA.event).toBeCalledWith(eventName, Event.clickLoadButton)
})

test('should send exeption', () => {
  const exeptionName = Error.internalServerException.name
  analyticsExceptions(Error.internalServerException)
  expect(ReactGA.event).toBeCalledTimes(1)
  expect(ReactGA.event).toBeCalledWith(exeptionName, Error.internalServerException)
})

test('should send pageview', () => {
  const page = {
    page: Pageview.startPage.path,
    title: Pageview.startPage.title
  }
  analyticsPageView(Pageview.startPage)
  expect(ReactGA.send).toBeCalledTimes(1)
  expect(ReactGA.send).toBeCalledWith(ANALYTICS_PAGEVIEW_TYPE, page)
})
