import React from 'react'
import { render, screen } from '@testing-library/react'
import { store } from '../../reducers/store'
import ReduxWrapper from '../../wrappers/ReduxWrapper'
import { TaskContextProvider } from '../../contexts/TaskContext'
import TaskSection from './TaskSection'

let component

describe('TaskSection component should', () => {
  beforeEach(() => {
    const onChange = jest.fn()
    const onClick = jest.fn()
    const { container } = render(
      <ReduxWrapper store={store}>
        <TaskContextProvider>
          <TaskSection
            loading={false}
            disableButton={false}
            actualValue=''
            noTask={false}
            isDataLoadingError={false}
            getStatusMessage={200}
            getTotalTasks={3}
            getTotalDays={2}
            onChange={onChange}
            onClick={onClick}
          />
        </TaskContextProvider>
      </ReduxWrapper>
    )
    component = container
  })

  test('render entire component properly', () => {
    const mainContainer = component.querySelector('.section-container')
    expect(mainContainer).toBeInTheDocument()
  })

  test('render control section properly', () => {
    const controlSection = component.querySelector('.controls-section')
    expect(controlSection).toBeInTheDocument()
  })

  test('render label for select', () => {
    const label = component.querySelector('.select-label')
    expect(label).toBeInTheDocument()
  })

  test('render select control', () => {
    const selectControl = component.querySelector('select')
    expect(selectControl).toBeInTheDocument()
  })

  test('render load button control', () => {
    const loadButton = component.querySelector('.load-button')
    expect(loadButton).toBeInTheDocument()
  })

  test('render resume section properly', () => {
    const resumeSection = component.querySelector('.resume')
    expect(resumeSection).toBeInTheDocument()
  })

  test('render three task loaded', () => {
    const text = screen.getByText(/3 tareas cargadas/i)
    expect(text).toBeInTheDocument()
  })

  test('render distributed in two days', () => {
    const text = screen.getByText(/Distribución en 2 días/i)
    expect(text).toBeInTheDocument()
  })

  test('render task list section properly', () => {
    const taskListSection = component.querySelector('.task-display')
    expect(taskListSection).toBeInTheDocument()
  })
})
