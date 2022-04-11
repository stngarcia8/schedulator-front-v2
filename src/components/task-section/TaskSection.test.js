import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TaskSection from './TaskSection'
import ReduxWrapper from '../../wrappers/ReduxWrapper'
import { store } from '../../reducers/store'
import { TaskContextProvider } from '../../contexts/TaskContext'
import { OrderType } from '../../shared/contants'

describe('TaskSection component should', () => {
  const onChangeEvent = jest.fn()
  const onClickEvent = jest.fn()

  const renderTaskSection = () => {
    const { container } = render(
      <ReduxWrapper store={store}>
        <TaskContextProvider>
          <TaskSection
            loading={false}
            disableButton={false}
            actualValue={OrderType.BY_TASK_DURATION}
            noTask={false}
            isDataLoadingError={false}
            getStatusMessage={200}
            getTotalTasks={3}
            getTotalDays={2}
            onChange={onChangeEvent}
            onClick={onClickEvent}
          />
        </TaskContextProvider>
      </ReduxWrapper>
    )
    return container
  }

  test('render select', () => {
    const section = renderTaskSection()
    const select = section.querySelector('select')
    expect(select).toBeInTheDocument()
  })

  test('render button', () => {
    const section = renderTaskSection()
    const button = section.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  test('render resume', () => {
    const section = renderTaskSection()
    const title = section.querySelector('h4')
    expect(title).toBeInTheDocument()
  })
})
