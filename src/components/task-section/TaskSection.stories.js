import { action } from '@storybook/addon-actions'
import React from 'react'
import TaskSection from './TaskSection'
import { store } from '../../reducers/store'
import ReduxWrapper from '../../wrappers/ReduxWrapper'
import { TaskContextProvider } from '../../contexts/TaskContext'

export default {
  title: ' TaskSection component',
  component: TaskSection
}

const template = (args) => {
  return (
    <ReduxWrapper store={store}>
      <TaskContextProvider>
        <TaskSection {...args} />
      </TaskContextProvider>
    </ReduxWrapper>
  )
}

export const FirstStory = template.bind({})

FirstStory.args = {
  loading: false,
  disableButton: false,
  actualValue: '',
  noTask: false,
  isDataLoadingError: false,
  getStatusMessage: 200,
  getTotalTasks: 3,
  getTotalDays: 2,
  onChange: action('changed'),
  onClick: action('submited')
}
