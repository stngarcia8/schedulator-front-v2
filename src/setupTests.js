import '@testing-library/jest-dom/extend-expect'
import fetchMock from 'jest-fetch-mock'

process.env = Object.assign(process.env,
  {
    REACT_APP_GOOGLE_ANALYTICS_TRACKER_ID_G4: 'some_tracker_id',
    REACT_APP_GOOGLE_ANALYTICS_TRACKER_ID_UA: 'some_tracker_id'
  })

fetchMock.enableMocks()
