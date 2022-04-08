import React from 'react'
import TaskList from './TaskList'

export default {
  title: 'TaskList component',
  component: TaskList
}

const tasks = [
  {
    taskId: 't1',
    taskName: 'Task 1',
    duration: 8
  }
]

const template = (args) => <TaskList {...args} />

export const OneTaskToRender = template.bind({})
OneTaskToRender.args = { tasks: tasks }

export const TwoTaskToRender = template.bind({})
TwoTaskToRender.args = { tasks: [...tasks, tasks] }
