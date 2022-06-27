import { initializeAnalytics, publishEvents, publishException, publishPageView } from './analytics'
import { analyticsInit, analyticsEvents, analyticsExceptions, analyticsPageView } from './providers/GoogleAnalytics'
import { analyticsEvents as Event, analyticsExceptions as Error, analyticsPageView as Pageview, createAnalyticsCustomEvents } from '../shared/events'

jest.mock('./providers/GoogleAnalytics.js')
analyticsInit.mockImplementation(() => jest.fn())
analyticsEvents.mockImplementation(() => jest.fn())
analyticsExceptions.mockImplementation(() => jest.fn())
analyticsPageView.mockImplementation(() => jest.fn())

afterEach(() => {
  jest.clearAllMocks()
})

test('should initialize google analytics engine', () => {
  initializeAnalytics()
  expect(analyticsInit).toBeCalledTimes(1)
})

test('should call events', () => {
  publishEvents(Event.clickLoadButton)
  expect(analyticsEvents).toBeCalledTimes(1)
  expect(analyticsEvents).toBeCalledWith(Event.clickLoadButton)
})

test('should call custom events', () => {
  const newEvent = createAnalyticsCustomEvents('some_event_name', 'some_action', 'some_label')
  publishEvents(newEvent)
  expect(analyticsEvents).toBeCalledTimes(1)
  expect(analyticsEvents).toBeCalledWith(newEvent)
})

test('should call exeption', () => {
  publishException(Error.internalServerException)
  expect(analyticsExceptions).toBeCalledTimes(1)
  expect(analyticsExceptions).toBeCalledWith(Error.internalServerException)
})

test('should call pageview', () => {
  publishPageView(Pageview.startPage)
  expect(analyticsPageView).toBeCalledTimes(1)
  expect(analyticsPageView).toBeCalledWith(Pageview.startPage)
})
