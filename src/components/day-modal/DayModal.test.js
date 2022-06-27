import React from 'react'
import { render } from '@testing-library/react'
import { store } from '../../reducers/store'
import ReduxWrapper from '../../wrappers/ReduxWrapper'
import { TaskContextProvider } from '../../contexts/TaskContext'
import DayModal from './DayModal'

let modal

describe('DayModal component should', () => {
  beforeEach(() => {
    const { container } = render(
      <ReduxWrapper store={store}>
        <TaskContextProvider>
          <DayModal />
        </TaskContextProvider>
      </ReduxWrapper>
    )
    modal = container
  })

  test('should render DayModal', () => {
    const mainContainer = modal.querySelector('article')
    expect(mainContainer).toBeInTheDocument()
  })
})
